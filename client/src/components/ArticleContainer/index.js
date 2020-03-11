import React, { useState } from 'react';
import truncate from 'truncate';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadArticles } from '../../actions/Article';

import { setCurrentArticle, remove } from '../../actions/Article';

import './index.css';

const ArticleContainer = ({ articleState, setCurrentArticle, remove, loadArticles }) => {
  const hasPrevious = articleState.data.hasPrevPage;
  const hasNext = articleState.data.hasNextPage;
  const page = articleState.data.page;

  const [show, setShow] = useState(false);
  const handleShow = (article) => {
    setCurrentArticle(article);
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleDelete = async () => {
    await remove(articleState.currentArticle);
    setShow(false);
  };

  const articlesElement = [];
  if (articleState.data.docs) {
    articleState.data.docs.forEach((article) => articlesElement.push(
      <div key={article._id} className="article-container-article">
        <img src={article.image} alt={article.title} />
        <div>
          <Link to={`/articles/${article._id}`}>{article.title}</Link>
          <p>{truncate(article.description, 150)}</p>
        </div>
        <div className="button-group">
        <Button className="buttons-header" variant="outline-danger" onClick={() => handleShow(article)}>Excluir</Button>
        </div>
      </div>,
    ));
  }
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Confirmar ação
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Deseja realmente excluir o artigo &quot;
          { articleState.currentArticle ? articleState.currentArticle.title : '' }
          &quot;?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="article-container">
        <div className="article-container--Inner">
          <div className="article-container-header">
            <h2>Artigos publicados</h2>
          </div>
          <div className="article-container-content">
            { articlesElement || <h2>Você não possui nenhum artigo!</h2> }
          </div>

          <div className="prev-next-buttons">
          <Button variant="primary" disabled={!hasPrevious} onClick={(event) => loadArticles(page-1)}>Anterior</Button>
          <Button variant="primary" disabled={!hasNext} onClick={(event) => loadArticles(page+1)}>Próximo</Button>
          </div>
        </div>
      </div>
    </>
  );
};

ArticleContainer.propTypes = {
  setCurrentArticle: PropTypes.func.isRequired,
  articleState: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,
  loadArticles: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  articleState: state.articleReducer,
});

export default connect(mapStateToProps, { setCurrentArticle, remove, loadArticles })(ArticleContainer);
