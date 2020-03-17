const ArticleModel = require('../models/Article');

const sitemap = async () => {
  try {
    const data = await ArticleModel.find().lean();
    return data.map((item) => `https://coronavirus.com.br/${item.link}`);
  } catch (err) {
    console.error(err.message);
    return [];
  }
};

module.exports = { sitemap };
