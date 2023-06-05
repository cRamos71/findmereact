import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./css/SecondModal.css";
import { useEffect, useState } from "react";
import React, { Fragment } from "react";

function SecondModal({ followingids, dateF, dateT }) {
  const [show, setShow] = useState(false);
  const [load, setLoad] = useState(true);
  const [responses, setResponses] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleLoad() {
    setLoad(!load);
  }

  useEffect(() => {
    
    const fetchRequests = followingids.map((id) => {
      const requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: sessionStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          end: dateT,
          start: dateF,
          userID: id,
        }),
      };

      return fetch(
        "https://api.secureme.me/api/v1/position/history/user",
        requestOptions
      )
        .then((response) => response.json())
        .catch((error) => console.log("Failed to fetch:", error));
    });

    Promise.all(fetchRequests)
      .then((responses) => {
        setResponses(responses);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  }, [load]);

  return (
    <>
      <button
        id="btnmodallocsall"
        onClick={() => {
          handleShow();
          handleLoad();
        }}
      >
        <i className="bi bi-card-heading"></i>
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Last know locations</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul id="ullocs" style={{ maxHeight: "400px", overflowY: "scroll" }}>
            {responses?.map((response) => (
              <React.Fragment key={response.userID}>
                {" "}
                {/* Works as a component */}
                {response.locations?.map((location) => (
                  <li key={location.ID}>
                    <b>UserID:</b> {location.UserId}
                    <br />
                    <b>Location ID:</b> {location.ID}
                    <br />
                    <b>Date:</b> {location.CreatedAt.split("T")[0]}
                    <b>,</b>
                    <b> Hour:</b> {location.CreatedAt.slice(11, 16)}
                    <br />
                    <b>Latitude:</b> {location.Latitude}
                    <b>,</b>
                    <b> Longitude:</b> {location.Longitude}
                  </li>
                ))}
              </React.Fragment>
            ))}
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

export default SecondModal;
