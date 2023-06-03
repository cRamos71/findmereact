import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./css/SecondModal.css";
import { useState } from 'react';

function SecondModal({followingids}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    
  
    return (
      <>
        <button id="btnmodallocsall" onClick={handleShow}>
              <i class="bi bi-card-heading"> All recent locations</i>
            </button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Last know locations</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <label id='lbldatef'>From:</label>
            <input type='date'/>
            <label id='lbldatet'>To:</label>
            <input type='date'/>
            {/* Add the content for the second modal here */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default SecondModal;  