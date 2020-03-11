import React, { useState, useEffect } from 'react';
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
import Logo from '../../assets/images/logo.png';

import { save } from '../../actions/Article';
import { saveStatus, loadStatus } from '../../actions/Status';
import { logout } from '../../actions/Auth';

import './index.css';

const Header = ({ save, logout, loadStatus, authState, statusState, saveStatus }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    tags: '',
    image: null,
    content: '',
    saving: false,
  });

  const [showStatus, setShowStatus] = useState(false);
  const handleStatusShow = () => {
    setShowStatus(true)
  };
  const handleStatusClose = () => setShowStatus(false);

  const [statusData, setStatusData] = useState({
    title: '',
    description: '',
    maintenance: '',
    coronaTitle: '',
    coronaText: '',
    announcementRectangle: null,
    announcementSquare: null,
    savingStatus: false,
  });

  const {
    title, description, maintenance, coronaTitle, coronaText,
  } = statusData;

  useEffect(() => {
    loadStatus();
    
    setStatusData({
      title: statusState.loading || !statusState.data.title ? '' : statusState.data.title,
      description: statusState.loading || !statusState.data.description ? '' : statusState.data.description,
      maintenance: statusState.loading ? true : statusState.data.maintenance,
      coronaTitle: statusState.loading || !statusState.data.coronaTitle ? '' : statusState.data.coronaTitle,
      coronaText: statusState.loading || !statusState.data.coronaText ? '' : statusState.data.coronaText,
      announcementRectangle: null,
      announcementSquare: null,
      savingStatus: false,
    })
  }, [statusState.loading]);

  const onWriteStatus = (event) => setStatusData({
    ...statusData,
    [event.target.name]: event.target.value,
  });

  const onUploadAd = (event) => {
    setStatusData({
      ...statusData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleStatusSave = async () => {
    setStatusData({ ...statusData, savingStatus: true });
    const multipart = new FormData();

    multipart.append('title', statusData.title);
    multipart.append('description', statusData.description);
    multipart.append('maintenance', statusData.maintenance);
    multipart.append('coronaTitle', statusData.coronaTitle);
    multipart.append('coronaText', statusData.coronaText);
    if (statusData.announcementRectangle) {
      multipart.append('announcementRectangle', statusData.announcementRectangle);
    }
    if (statusData.announcementSquare) {
      multipart.append('announcementSquare', statusData.announcementSquare);
    }
    await saveStatus(multipart);
    setStatusData({ ...statusData, savingStatus: false });
    setShowStatus(false);
  };

  const { saving } = formData;
  const { savingStatus } = statusData;

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

      <Modal dialogClassName="modal-article" backdrop="static" show={showStatus} onHide={handleStatusClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            GERENCIAR PÁGINA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Alert />
          <Form>
            <Form.Group>
              <Form.Label>Título</Form.Label>
              <Form.Control value={title} name="title" onChange={(event) => onWriteStatus(event)} type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Descrição</Form.Label>
              <Form.Control value={description}  name="description" onChange={(event) => onWriteStatus(event)} type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Manutenção</Form.Label>
              <Form.Control value={maintenance} name="maintenance" onChange={(event) => onWriteStatus(event)} as="select">
                <option value={true}>Sim</option>
                <option value={false}>Não</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Anúncio 01 (Superior)</Form.Label>
              <Form.Control name="announcementRectangle" onChange={(event) => onUploadAd(event)} type="file" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Anúncio 02 (Inferior)</Form.Label>
              <Form.Control name="announcementSquare" onChange={(event) => onUploadAd(event)} type="file" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Título do texto informativo</Form.Label>
              <Form.Control value={coronaTitle} name="coronaTitle" onChange={(event) => onWriteStatus(event)} type="text" />
            </Form.Group>

            <Form.Group>
              <Form.Label>Texto informativo</Form.Label>
              <Form.Control value={coronaText} name="coronaText" as="textarea" rows="3" onChange={(event) => onWriteStatus(event)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleStatusClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleStatusSave}>
            { savingStatus ? 'Salvando' : 'Salvar'}
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
            <ButtonToolbar className="toolbar">
              <Button className="buttons-header" variant="outline-primary" onClick={handleStatusShow}>Gerenciar</Button>
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
  saveStatus: PropTypes.func.isRequired,
  loadStatus: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  authState: PropTypes.object.isRequired,
  statusState: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  authState: state.authReducer,
  statusState: state.statusReducer,
});

export default connect(mapStateToProps, { save, logout, saveStatus, loadStatus })(Header);
