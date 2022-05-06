import React from 'react';
import './App.css';
import MovieCardList from './Components/MovieCardList'
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
    <div className="">
      <MovieCardList />
    </div>
    </ThemeProvider>
  );
}

export default App;
