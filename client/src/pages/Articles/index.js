import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Helmet from 'react-helmet';
import { show } from '../../actions/Article';

import Loading from '../../components/Loading';

import Header from '../../components/HeaderInformation';
import Footer from '../../components/Footer';

import './index.css';

const Articles = ({ match, show, article }) => {
  useState(() => {
    show(match.params.article);
  });
  const loading = true;
  return loading && !article ? <Loading /> : (
    <>
      <Helmet>
        <title>{ article.title }</title>
        <meta
          name="description"
          content={article.description}
        />
      </Helmet>
      <Header />
      <div className="articles-show">
        <div className="articles-show--Inner">
          <div className="articles-header">
            <h1>{ article.title }</h1>
            <h2>{ article.description }</h2>
            <hr />
          </div>
          <div className="articles-content">
            { ReactHtmlParser(article.content) }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

Articles.propTypes = {
  show: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  article: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  article: state.articleReducer.currentArticle,
});

export default connect(mapStateToProps, { show })(Articles);
