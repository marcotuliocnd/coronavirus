import React, { useState } from 'react';
import {
  ButtonToolbar, Button, Modal, Form,
} from 'react-bootstrap';
import truncate from 'truncate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Alert from '../Alert';
import Logo from '../../assets/images/temp-logo.webp';

import { save } from '../../actions/Article';
import { logout } from '../../actions/Auth';

import './index.css';

const Header = ({ save, logout, authState }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    image: null,
    content: '',
    saving: false,
  });

  const { saving } = formData;

  const onWriteForm = (event) => setFormData({
    ...formData,
    [event.target.name]: event.target.value,
  });

  const onUploadImage = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSave = async () => {
    setFormData({ ...formData, saving: true });
    const multipart = new FormData();
    multipart.append('title', formData.title);
    multipart.append('description', formData.description);
    multipart.append('tags', formData.tags);
    multipart.append('content', formData.content);
    multipart.append('file', formData.image);
    await save(multipart);
    setFormData({ ...formData, saving: false });
    setShow(false);
  };

  const handleContent = () => {
    const editorElement = document.querySelector('.public-DraftEditor-content');
    const content = editorElement.innerHTML;
    setFormData({
      ...formData,
      content,
    });
  };


  return (
    <>
      <Modal dialogClassName="modal-article" backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            CRIAR ARTIGO
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert />
          <Form>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control name="title" onChange={(event) => onWriteForm(event)} type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control name="description" onChange={(event) => onWriteForm(event)} type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Tags</Form.Label>
              <Form.Control name="tags" onChange={(event) => onWriteForm(event)} type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Imagem</Form.Label>
              <Form.Control name="image" onChange={(event) => onUploadImage(event)} type="file" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Conteúdo</Form.Label>
              <Editor
                onContentStateChange={handleContent}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            { saving ? 'Salvando' : 'Salvar'}
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="cabecalho">
        <div className="cabecalho--Inner">
          <div className="content">
            <img src={Logo} alt="Logomarca" />
            <ButtonToolbar className="toolbar">
              <Button className="buttons-header" variant="outline-primary" onClick={handleShow}>Criar</Button>
            </ButtonToolbar>
          </div>
          <div className="profile">
            <FontAwesomeIcon icon={faUser} />
            <h3>{ truncate(authState.user.username, 10) }</h3>
            <button type="button" className="exit" onClick={logout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  save: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  authState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.authReducer,
});

export default connect(mapStateToProps, { save, logout })(Header);
