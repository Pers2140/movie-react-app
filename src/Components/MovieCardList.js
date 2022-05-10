import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Container, Row } from "react-bootstrap";

export default function MovieCardList() {
  const [movies, setMovies] = useState([]);
  const [reqMovies, setReqMovies] = useState(6);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setReqMovies(reqMovies+1)
  };

  const getMovies = (m) => {
    fetch(`http://dev1.dplabs.local:8000/movies?page=1&limit=${m}`)
      .then((res) => res.json())
      .then((data) => setMovies(data));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    getMovies(reqMovies);
    return () => {};
  }, [scrollPosition]);

  return (
    <>
      <Container>
        <Row className="align-center">
          {/* <MovieCard movie={bum[0]} /> */}

          {movies.map((movie) => {
            return <MovieCard movie={movie} />;
          })}
        </Row>
      </Container>
    </>
  );
}
