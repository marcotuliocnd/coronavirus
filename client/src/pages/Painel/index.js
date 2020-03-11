import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import Loading from '../../components/Loading';

import { loadArticles } from '../../actions/Article';

import Header from '../../components/Header';
import ArticleContainer from '../../components/ArticleContainer';

const Painel = ({ articleState }) => {
  useEffect(() => {
    loadArticles();
  }, []);
  return articleState.loading ? 
  <Loading /> : (
    <>
      <Helmet>
        <title>Painel</title>
      </Helmet>
      <Header />
      <div className="painel">
        <div className="painel--Inner">
          <ArticleContainer />
        </div>
      </div>
    </>
  );
}

Painel.propTypes = {
  loadArticles: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  articleState: state.articleReducer,
});

export default connect(mapStateToProps, { loadArticles })(Painel);
