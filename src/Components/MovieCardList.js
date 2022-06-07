import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Player from "./Player";
import { Container, Row } from "react-bootstrap";
import axios from "axios";

export default function MovieCardList() {

  const [movies, setMovies] = useState([]);
  const [reqMovies, setReqMovies] = useState(6);
  
  // Controlling Movie list and player display property
  let moviesDisplay = {display:"block"}
  let playerDisplay = {display:"none"}
  
  // by default player display set to none otherwise change
  const [currentMovie,setcurrentMovie] = useState('default')
  if (currentMovie != 'default'){
    moviesDisplay = {display:"none"}
    playerDisplay = {display:"block"}
    // hide Model on player display
    document.getElementById('popup').style.display ="none"
  }

  // On scroll add more movies
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
      <div className="blurBar1"></div>
      <Player  style={playerDisplay} moviesrc={currentMovie} setMovie={setcurrentMovie}/>
      <Container className="blur" style={moviesDisplay}>
        <Row className="align-center">
          {movies.map((movie) => {
            return <MovieCard  movie={movie} setMovie={setcurrentMovie} key={movie._id}/>;
          })}
        </Row>
      </Container>
        <div className="blurBar2"></div>
    </>
  );
}
