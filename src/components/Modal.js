import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./css/Modal.css";

function ModalLocs({ item, name }) {
  const [modalitems, setModalItems] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  var requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: sessionStorage.getItem("token"),
    },
    body: JSON.stringify({
      end: "2023-07-01",
      followerID: item,
      start: "2023-01-01",
    }),
  };

  useEffect(() => {
    fetch("https://api.secureme.me/api/v1/follower/history", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setModalItems(data.locations);
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, []);

  return (
    <>
      <button id="btnmodallocs" onClick={handleShow}>
        <i class="bi bi-card-heading"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{name} locations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="ullocs" style={{ maxHeight: "400px", overflowY: "scroll" }}>
            {modalitems?.map(
              (
                item,
                index // ? so maps will only be called if locs aren't either null or undefined
              ) => (
                <li key={item.ID}>
                  {index === 0 && (
                    <b id="lastloci">
                      {name} last location:
                      <br />
                    </b>
                  )}
                  <b>LocationID: </b> {item.ID}
                  <br />
                  <b>Date:</b> {item.CreatedAt.split("T")[0]}
                  <b>,</b>
                  <b> Hour:</b> {item.CreatedAt.slice(11, 16)}
                  <br />
                  <b>Latitude:</b> {item.Latitude}
                  <b>, </b>
                  <b> Longitude:</b> {item.Longitude}
                </li>
              )
            )}
          </ul>
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

export default ModalLocs;
