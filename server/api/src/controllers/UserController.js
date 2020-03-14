const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/User');
const authConfig = require('../config');

const register = async (req, res) => {
  const { username, password } = req.body;
  try {
    const checkExists = await UserModel.find({ username });
    if (checkExists.length !== 0) {
      return res
        .status(403)
        .json({ success: false, data: 'Usuário já existe!' });
    }

    const passSalt = await bcrypt.genSalt();
    const passCrypted = await bcrypt.hash(password, passSalt);

    const data = await UserModel.create({
      username,
      password: passCrypted,
    });

    delete data._doc.password;
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

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username });
    if (!user) {
      return res
        .status(401)
        .json({ success: false, data: 'Usuário ou senha incorretos' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ success: false, data: 'Usuário ou senha incorretos' });
    }

    delete user._doc.password;
    const payload = { user };

    const token = generateToken(payload);

    return res
      .status(200)
      .json({ success: true, data: { user, token } });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, data: 'Internal Server Error' });
  }
};

const list = async (req, res) => {
  try {
    const data = await UserModel.find();
    return res
      .status(200)
      .json({ success: true, data });
  } catch (err) {
    console.error(err.message);
    return res
      .status(500)
      .json({ success: false, error: 'Internal Server Error' });
  }
};

function generateToken(payload = {}) {
  return jwt.sign(
    payload,
    authConfig.secret,
    { expiresIn: authConfig.expiresTokenIn },
  );
}

module.exports = {
  register,
  login,
  list,
};
