import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

export default function MovieCardList() {
  const [movies, setMovies] = useState([]);
  const [reqMovies, setReqMovies] = useState(6);

 

  useEffect(() => {
    const handleScroll = (e) => {
      if (
        window.innerHeight + e.target.documentElement.scrollTop + 1 >=
        e.target.documentElement.scrollHeight - 5
      ){
        setReqMovies(reqMovies+6)
      }
    };
  
    const getMovies = (m) => {
      axios(`https://movies-nodeapi.herokuapp.com/movies/?page=1&limit=${m}`)
        .then(({data}) => setMovies(data));
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
