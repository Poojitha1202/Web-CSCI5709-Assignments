import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  Container,
  Row,
  Col,
  Modal,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyFitnessJourney.css"; // Assuming you store your additional CSS here

const MyFitnessJourney = () => {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleWarningClose = () => setShowWarning(false);
  const handleWarningShow = () => setShowWarning(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) {
      handleWarningShow();
    } else {
      handleWarningClose();
      handleShow();
    }
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">MyFitnessJourney</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#metricshistory">Metrics History</Nav.Link>
              <Nav.Link href="#edit">Edit</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Row className="justify-content-center">
          <Col md={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formDate" className="mb-3">
                <Form.Label>Date</Form.Label>
                {/* Controlled input for date */}
                <Form.Control
                  type="date"
                  placeholder="Enter date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formHeight" className="mb-3">
                <Form.Label>Height</Form.Label>
                <Form.Control type="text" placeholder="Enter height" />
              </Form.Group>

              <Form.Group controlId="formWeight" className="mb-3">
                <Form.Label>Weight</Form.Label>
                <Form.Control type="text" placeholder="Enter weight" />
              </Form.Group>

              <Form.Group controlId="formArms" className="mb-3">
                <Form.Label>Arms</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter arms measurement"
                />
              </Form.Group>

              <Form.Group controlId="formChest" className="mb-3">
                <Form.Label>Chest</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter chest measurement"
                />
              </Form.Group>

              <Form.Group controlId="formHip" className="mb-3">
                <Form.Label>Hip</Form.Label>
                <Form.Control type="text" placeholder="Enter hip measurement" />
              </Form.Group>

              <Form.Group controlId="formNotes" className="mb-3">
                <Form.Label>Notes</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter notes"
                />
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit">
                  Save
                </Button>
                <Button variant="secondary" type="button">
                  Cancel
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* Modal for success message */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Details saved Successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal for warning message */}
      <Modal show={showWarning} onHide={handleWarningClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Please enter the date to continue!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleWarningClose}>
            OK
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyFitnessJourney;
