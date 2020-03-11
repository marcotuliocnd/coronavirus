import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import './index.css';
import Helmet from 'react-helmet';

import { login } from '../../actions/Auth';

import Logo from '../../assets/images/logo.png';
import Alert from '../../components/Alert';

const Login = ({ login, authState }) => {
  const [loginFormData, setLoginForm] = useState({
    username: '', password: '', doingLogin: false,
  });
  const { doingLogin } = loginFormData;

  const onWriteForm = (event) => setLoginForm({
    ...loginFormData,
    [event.target.name]: event.target.value,
  });

  if (authState.isAuthenticated) {
    return <Redirect to="/painel" />
  }

  const doLogin = async (event) => {
    event.preventDefault();
    setLoginForm({ doingLogin: true });
    await login(loginFormData);
    setLoginForm({ doingLogin: false });
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
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
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.authReducer,
});

export default connect(mapStateToProps, { login })(Login);
