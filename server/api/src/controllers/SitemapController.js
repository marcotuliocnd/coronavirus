const ArticleModel = require('../models/Article');

const sitemap = async () => {
  try {
    const { link } = await ArticleModel.find().lean();
    return link.map((item) => `https://coronavirus.com.br/${item}`);
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

module.exports = { sitemap };
