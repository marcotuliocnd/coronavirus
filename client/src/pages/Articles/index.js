import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import Helmet from 'react-helmet';
import { show } from '../../actions/Article';
import moment from 'moment';
import 'moment/locale/pt-br';

import Loading from '../../components/Loading';

import NotFound from '../NotFound';
import Header from '../../components/HeaderInformation';
import Footer from '../../components/Footer';
import Anuncio from '../../components/Anuncio';

import './index.css';

const Articles = ({ match, show, article, loading }) => {
  useEffect(() => {
    show(match.params.article);
  }, []);

  function formatDate(datetime) {
    moment.locale('pt-br');
    return moment(datetime).calendar();
  }

  return loading ? <Loading /> : !article ? <NotFound /> : (
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
            <h3 className="datetime">{ formatDate(article.createdAt) }</h3>
            <hr />
          </div>
          <div className="articles-content">
            { ReactHtmlParser(article.content) }
          </div>
          <hr />
          <Anuncio />
        </div>
      </div>
      <Footer />
    </>
  );
};

Articles.propTypes = {
  show: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  article: PropTypes.object,
};

const mapStateToProps = (state) => ({
  article: state.articleReducer.currentArticle,
  loading: state.articleReducer.loadingOne,
});

export default connect(mapStateToProps, { show })(Articles);
