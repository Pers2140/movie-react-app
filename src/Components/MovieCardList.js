import React, { useState } from 'react'
import MovieCard from './MovieCard'
import { Container, Row} from 'react-bootstrap';

export default function MovieCardList() {
    const [movies, setMovies] = useState([
      {
        "_id": "60cf7fecc48d32a6dd60488d",
        "filename": "Alita_Battle_Angel_.mkv",
        "driveId": "1r0VSOoEs5MgJ2U4XgM8ecTC4xbTZgDjx",
        "download": "https://drive.google.com/uc?id=1r0VSOoEs5MgJ2U4XgM8ecTC4xbTZgDjx&export=download",
        "view": "https://drive.google.com/file/d/1r0VSOoEs5MgJ2U4XgM8ecTC4xbTZgDjx/preview",
        "title": "Alita: Battle Angel",
        "backdrop": "https://image.tmdb.org/t/p/original//8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg",
        "poster": "https://image.tmdb.org/t/p/original//xRWht48C2V8XNfzvPehyClOvDni.jpg",
        "plot": "When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.",
        "release_date": "2019-01-31",
        "average": 7.2,
        "comments": []
      }
    ])
    fetch("http://dev1.dplabs.local:8000/movies/bum")
    .then((res) => res.json())
    .then((data) => console.log(data[0]["title"]));

  return (
        <>
          <Container>
            <Row className='align-center'>
            {/* <MovieCard movie={bum[0]} /> */}

            {
              movies.map( movie => {
                return (
                  <MovieCard movie={movie} /> 
                )
              })
            }
            
            </Row>    
          </Container>  
        </>
    )
}
