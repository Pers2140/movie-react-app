import React from "react";
import { useState } from "react";
import { Modal, Container, Row, Col, Card } from "react-bootstrap";

export default function MovieCard({ movie }) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <div
        className="col-sm-12 col-md-6 col-lg-4 movie-card"
        onClick={() => setLgShow(true)}
      >
          <Card.Img className="p-0 m-0 movie-card" src={movie.poster} />
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        className="modal fade"
      >
        <Modal.Body className="p-0" style={{"height":"500px"}}>
          <div style={{ padding:"5px", backgroundImage:`url(${movie.backdrop})`,backgroundRepeat:"no-repeat",color:"white" }}>
          <Modal.Header closeButton className="text-white">
            <Modal.Title id="example-modal-sizes-title-lg">
              {movie.title}
            </Modal.Title>
          </Modal.Header>
          <br></br>
            <Container>
              <Row>
                <Col sm={12} md={4}>
                  <div className="img-box position-relative">
                  <a  href={movie.view}><img className="movie-img" src="https://cdn-icons-png.flaticon.com/512/482/482059.png" alt="" /></a>
                  <img src={movie.poster} alt="" className="w-100 mx-auto "></img>
                  </div>
                  <br></br>
                  <h3 className="mx-auto text-black">{"⭐".repeat(movie.average)}</h3>
                </Col>
                <Col sm={12} md={8}>
                  <p className="bg-dark p-5 text-center rounded">{movie.plot}</p>
                  <div className="overflow-auto text-black" style={{"maxHeight":"500px"}}>
                  {movie.comments.map((comment) => {
                    return <Card key={comment.user+comment.comment} className="m-2">
                      <div className="card-body p-5">
                        <h5 className="card-title">{comment.user}</h5>
                        <p className="card-text">{comment.comment}</p>
                        <p className="card-text">{"⭐".repeat(comment.rating)}</p>
                      </div>
                    </Card>;
                  })}
                  </div>
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
