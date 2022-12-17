import React from 'react'
// import "./Film.css"

const Film = ({path}) => {
  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/w500/${path}`} alt="" />
    </div>
  )
}

export default Film