import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

const CookieModal = () => {
  const [show, setShow] = useState(localStorage.getItem('@cookies') ? false : true);

  const handleClose = () => {
    localStorage.setItem('@cookies', true);
    setShow(false)
  };
  return (
    <>
        <Modal backdrop={'static'} show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Cookies</Modal.Title>
          </Modal.Header>
          <Modal.Body>Esse site utiliza cookies para coletar dados.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Aceitar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}
export default CookieModal;
