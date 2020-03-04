import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';

import { login } from '../../actions/Auth';

import Logo from '../../assets/images/temp-logo.webp';
import Alert from '../../components/Alert';

const Login = ({ login }) => {
  const [loginFormData, setLoginForm] = useState({
    username: '', password: '', doingLogin: false,
  });
  const { doingLogin } = loginFormData;

  const onWriteForm = (event) => setLoginForm({
    ...loginFormData,
    [event.target.name]: event.target.value,
  });

  const doLogin = async (event) => {
    event.preventDefault();
    setLoginForm({ doingLogin: true });
    await login(loginFormData);
    setLoginForm({ doingLogin: false });
  };

  return (
    <div className="login container slide-bottom">
      <div className="login--Inner">
        <img src={Logo} alt="logomarca" />
        <div className="form--Wrapper">
          <form className="form" onSubmit={(event) => doLogin(event)}>
            <input onChange={(event) => onWriteForm(event)} placeholder="Usuário" name="username" type="username" />
            <input onChange={(event) => onWriteForm(event)} placeholder="Senha" name="password" type="password" />
            <button type="submit">{ doingLogin ? 'Entrando...' : 'Entrar' }</button>
          </form>
          <Alert />
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, { login })(Login);
