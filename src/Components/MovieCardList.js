import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Container, Row } from "react-bootstrap";

export default function MovieCardList() {
  const [movies, setMovies] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [reqMovies, setReqMovies] = useState(4);

 

  useEffect(() => {
    
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      setReqMovies(reqMovies+1)
    };
  
    const getMovies = (m) => {
      fetch(`https://movies-nodeapi.herokuapp.com/movies/?page=1&limit=${m}`)
        .then((res) => res.json())
        .then((data) => setMovies(data));
    };
    window.addEventListener("scroll", handleScroll);
    getMovies(reqMovies);
    return () => {};
  }, [reqMovies]);

  return (
    <>
        <div className="bar1"></div>
      <Container className="blur">
        <Row className="align-center">
          {/* <MovieCard movie={bum[0]} /> */}

          {movies.map((movie) => {
            return <MovieCard movie={movie} key={movie._id}/>;
          })}
        </Row>
      </Container>
        <div className="bar2"></div>
    </>
  );
}
