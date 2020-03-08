import React from 'react';
import truncate from 'truncate';
import moment from 'moment';
import 'moment/locale/pt-br';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.css';

const ArtigosIndex = ({ articleState }) => {
  const artigos = articleState.data.docs;
  const listArtigosElement = [];

  function formatDate(datetime) {
    moment.locale('pt-br');
    return moment(datetime).calendar();
  }

  if (artigos) {
    artigos.forEach((artigo) => {
      listArtigosElement.push(
        <li key={artigo._id}>
          <div className="article">
            <div className="article--Inner">
              <img src={artigo.image} alt={artigo.title} />
              <div>
                <Link to={`/articles/${artigo._id}`}>{ truncate(artigo.title, 70) }</Link>
                <p>{ truncate(artigo.description, 150) }</p>
                <p className="datetime">{ formatDate(artigo.createdAt) }</p>
              </div>
            </div>
          </div>
        </li>,
      );
    });
  }
  return (
    <div className="artigos sombra">
      <div className="artigos--Inner">
        <h2 className="box-title articles-title">Confira as últimas notícias</h2>
        <ul className="list">
          { listArtigosElement }
        </ul>
      </div>
    </div>
  );
};

ArtigosIndex.propTypes = {
  articleState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  articleState: state.articleReducer,
});

export default connect(mapStateToProps)(ArtigosIndex);
