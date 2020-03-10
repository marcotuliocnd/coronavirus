const ArticleModel = require('../models/Article');

const list = async (req, res) => {
  const { page = 1, search } = req.query;
  const query = {};
  if (search) {
    query.search = search;
  }

  try {
    const data = await ArticleModel.paginate(query, { sort: { createdAt: -1 }, page, limit: 10 });
    return res
      .status(200)
      .json({ success: false, data });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, data: 'Internal Server Error' });
  }
};

const store = async (req, res) => {
  try {
    if (
      !req.body.title
      || !req.body.description
      || !req.body.content
      || !req.body.tags
    ) {
      return res
        .status(400)
        .json({ success: false, data: 'O artigo está faltando informações' });
    }
    const { body } = req;
    body.image = `${process.env.API}/${req.file.path}`;
    body.link = `${String(body.title).toLowerCase().replace(' ', '-')}.chtml`;

    const data = await ArticleModel.create(body);
    return res
      .status(200)
      .json({ success: true, data });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, data: 'Internal Server Error' });
  }
};

const remove = async (req, res) => {
  try {
    const data = await ArticleModel.deleteOne({ _id: req.params.article });
    return res
      .status(200)
      .json({ success: true, data });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, data: 'Internal Server Error' });
  }
};

const update = async (req, res) => {
  try {
    const data = await ArticleModel.updateOne({ _id: req.params.article }, req.body);
    return res
      .status(200)
      .json({ success: true, data });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, data: 'Internal Server Error' });
  }
};

const show = async (req, res) => {
  try {
    const data = await ArticleModel.findOne({ link: String(req.params.article).toLowerCase() });
    return res
      .status(200)
      .json({ success: true, data });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, data: 'Internal Server Error' });
  }
};

module.exports = {
  list,
  store,
  remove,
  update,
  show,
};
