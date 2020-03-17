import React from 'react';
import truncate from 'truncate';
import moment from 'moment';
import 'moment/locale/pt-br';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { loadArticles } from '../../actions/Article';
import ReactPaginate from 'react-paginate';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.css';

const ArtigosIndex = ({ articleState, loadArticles }) => {
  const artigos = articleState.data.docs;
  const hasPrevious = articleState.data.hasPrevPage;
  const hasNext = articleState.data.hasNextPage;
  const page = articleState.data.page;
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
                <Link to={`/articles/${artigo.link}`}>{ truncate(artigo.title, 70) }</Link>
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
        <ReactPaginate
          previousLabel={(
            <FontAwesomeIcon icon={faArrowLeft} />
          )}
          nextLabel={(
            <FontAwesomeIcon icon={faArrowRight} />
          )}
          breakLabel={'...'}
          breakClassName={'prev-next'}
          pageCount={articleState.data.totalPages}
          onPageChange={({ selected }) => loadArticles(1 + selected)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={0}
          containerClassName={'pagination'}
          pageClassName={'pages'}
          nextClassName={'prev-next'}
          previousClassName={'prev-next'}
          activeClassName={'active'}
        />
      </div>
    </div>
  );
};

ArtigosIndex.propTypes = {
  articleState: PropTypes.object.isRequired,
  loadArticles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  articleState: state.articleReducer,
});

export default connect(mapStateToProps, { loadArticles })(ArtigosIndex);
