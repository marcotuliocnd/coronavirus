import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CookieModal = () => {
  const [show, setShow] = useState(!localStorage.getItem('@cookies'));

  const handleClose = () => {
    localStorage.setItem('@cookies', true);
    setShow(false);
  };
  return (
    <>
      <Modal backdrop="static" show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Política de privacidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Este website utiliza cookies para tornar sua experiência
          a melhor possível. Se você estiver de acordo basta clicar em &quot;Concordo!&quot;.
          {' '}
          <Link to="/privacidade">Saiba mais</Link>
          .
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Concordo
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CookieModal;
