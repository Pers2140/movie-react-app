import React from "react";
import { useState } from "react";
import { Modal, Container, Row, Col, Card, Image } from "react-bootstrap";

export default function MovieCard({ movie }) {
  const [lgShow, setLgShow] = useState(false);
  console.log(movie);
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
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {movie.title}
            </Modal.Title>
          </Modal.Header>
            <Container>
              <Row>
                <Col sm={12} md={6}>
                  <img src={movie.poster} className="w-100 mx-aut0"></img>
                </Col>
                <Col sm={12} md={6}>
                  {movie.plot}
                </Col>
              </Row>
            </Container>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
