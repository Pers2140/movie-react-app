import React from "react";
import { useState } from "react";
import { Modal, Container, Row, Col, Card, Image } from "react-bootstrap";

export default function MovieCard({ movie }) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <div
        className="col-sm-12 col-md-6 col-lg-4 movie-card"
        onClick={() => setLgShow(true)}
      >
        <Card>
          <Card.Img variant="top" src={movie.poster} />
          <Card.Body></Card.Body>
        </Card>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Body className="p-0">
          <div style={{ padding:"5px", backgroundImage:`url(${movie.backdrop})`,backgroundRepeat:"no-repeat",color:"white" }}>
          <Modal.Header closeButton className="text-white">
            <Modal.Title id="example-modal-sizes-title-lg">
              {movie.title}
            </Modal.Title>
          </Modal.Header>
          <br></br>
            <Container>
              <Row>
                <Col sm={12} md={6}>
                  <img src={movie.poster} className="w-100 mx-aut0"></img>
                </Col>
                <Col sm={12} md={6}>
                  <p className="bg-dark p-5 text-center rounded">{movie.plot}</p>
                </Col>
              </Row>
            </Container>

        <br></br>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
