const jwt = require('jsonwebtoken');
const authConfig = require('../config');

module.exports = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ success: false, data: 'Conexão recusada' });
  }

  try {
    const decoded = jwt.verify(token, authConfig.secret);

    req.user = decoded.user;

    return next();
  } catch (err) {
    return res.status(401).json({ success: false, message: 'Token inválido' });
  }
};
