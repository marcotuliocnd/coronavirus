import React, { useState, useEffect } from 'react';
import truncate from 'truncate';
import { Link } from 'react-router-dom';
import { Button, Modal, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadArticles, setCurrentArticle, remove, editar } from '../../actions/Article';

import Alert from '../Alert';

import './index.css';

const ArticleContainer = ({
  articleState, setCurrentArticle, remove, loadArticles, editar,
}) => {
  const [loading, setLoading] = useState(false);
  const hasPrevious = articleState.data.hasPrevPage;
  const hasNext = articleState.data.hasNextPage;
  const { page } = articleState.data;

  const [show, setShow] = useState(false);
  const handleShow = (article) => {
    setCurrentArticle(article);
    setShow(true);
  };
  const handleClose = () => setShow(false);
  const handleDelete = async () => {
    setLoading(true);
    await remove(articleState.currentArticle);
    setLoading(false);
    setShow(false);
  };

  const [edit, setEdit] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    image: null,
    content: '',
    id: '',
    saving: false,
  });
  const handleEdit = (article) => {
    setFormData({
      title: article.title,
      description: article.description,
      tags: article.tags,
      content: article.content,
      id: article._id,
      saving: false,
    });
    setEdit(true);
  };
  const handleEditClose = () => setEdit(false);
  const onWriteForm = (event) => setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });
  const onWriteContent = (event) => setFormData({
    ...formData,
    content: event,
  });
  const onUploadImage = (event) => console.log(event.target.value);
  const handleSave = async () => {
    setFormData({ ...formData, saving: true });
    const multipart = new FormData();
    multipart.append('title', formData.title);
    multipart.append('description', formData.description);
    multipart.append('tags', formData.tags);
    multipart.append('content', formData.content);
    multipart.append('file', formData.image);
    try {
      await editar(multipart, formData.id);
      setFormData({ ...formData, saving: false });
      setEdit(false);
    } catch (err) {
      setFormData({ ...formData, saving: false });
    }
  };
  const saving = false;


  const articlesElement = [];
  if (articleState.data.docs) {
    articleState.data.docs.forEach((article) => articlesElement.push(
      <div key={article._id} className="article-container-article">
        <div className="content-article">
          <img src={article.image} alt={article.title} />
          <div>
            <Link to={`/articles/${article.link}`}>{article.title}</Link>
            <p>{truncate(article.description, 150)}</p>
          </div>
        </div>
        <div className="button-group">
          <Button className="buttons-header" variant="outline-primary" onClick={() => handleEdit(article)}>Editar</Button>
          <Button className="buttons-header" variant="outline-danger" onClick={() => handleShow(article)}>Excluir</Button>
        </div>
      </div>,
    ));
  }

  const modules = {
    toolbar: [
      [{ header: '1' }, { header: '2' }, { font: [] }, { align: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' },
        { indent: '-1' }, { indent: '+1' }],
      ['link', 'image', 'video'],
      ['clean'],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };
  return (
    <>
      <Modal dialogClassName="modal-article" backdrop="static" show={edit} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            EDITAR ARTIGO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert />
          <Form>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control name="title" value={formData.title} onChange={(event) => onWriteForm(event)} type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control name="description" value={formData.description} onChange={(event) => onWriteForm(event)} type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tags</Form.Label>
              <Form.Control name="tags" value={formData.tags} onChange={(event) => onWriteForm(event)} type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Imagem</Form.Label>
              <Form.Control name="image" onChange={(event) => onUploadImage(event)} type="file" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Conteúdo</Form.Label>
              <ReactQuill
                name="content"
                value={formData.content}
                modules={modules}
                onChange={(event) => onWriteContent(event)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            { formData.saving ? 'Salvando' : 'Salvar'}
          </Button>
        </Modal.Footer>
      </Modal>
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
            {loading ? 'Excluindo' : 'Excluir'}
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
            <div className="next-prev-buttons">
              <Button variant="primary" disabled={!hasPrevious} onClick={(event) => loadArticles(page - 1)}>Anterior</Button>
              <Button variant="primary" disabled={!hasNext} onClick={(event) => loadArticles(page + 1)}>Próximo</Button>
            </div>
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
  editar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  articleState: state.articleReducer,
});

export default connect(mapStateToProps, { setCurrentArticle, remove, loadArticles, editar })(ArticleContainer);
