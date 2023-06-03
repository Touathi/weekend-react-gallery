import React from 'react';
import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

import GalleryList from '../GalleryList/GalleryList'

function App() {



  const [Gallery, setGallery] = useState([])
  
  const getGallery = () => {
    axios.get('/gallery')
      .then (response => {
        console.log(response);
        setGallery(response.data)
      })
      .catch (err => {
        console.log(err);
      })
  }

  useEffect( () => {
    getGallery()
  }, [] )
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList 
          Gallery={Gallery}
          getGallery={getGallery}/>
      </div>
    );
}

export default App;
