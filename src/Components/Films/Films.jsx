import React, { useEffect, useState } from 'react';
import Film from '../Film/Film';
import './Films.css'

export const Films = () => {
  // const [film, SetFilms]=useState([])
  const [Backdrops, SetBackdrops] = useState(null);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/76341/images?api_key=3c4a75c60ab27c385698962f1c76f654'
    )
      .then((response) => response.json())
      .then((data) => {
        SetBackdrops(data.backdrops);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return <div className='films_container'>
    {
    Backdrops && (Backdrops.map((film,index)=>{
       return <Film key={index} path={film.file_path}/>
    })) 
    }
  </div>;
};
