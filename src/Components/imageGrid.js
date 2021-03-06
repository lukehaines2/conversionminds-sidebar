import React from "react";

const ImageGrid = () => {
  const getRandomSize = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }

  const createGrid = () => {
    let images = [];

    for (var i = 0; i < 25; i++) {
      var width = getRandomSize(200, 250);
      var height = getRandomSize(200, 250);
      images.push(<img key={`${i}-${width}-${height}`} src={`https://placekitten.com/${width}/${height}`} alt="crazy cats" className="img-fluid" />)
    }
    return images;
  }


  return (
    <div className="grid">
      <h3>MASONRY IMAGE GRID</h3>
      {createGrid()}
    </div>
  )
}

export default ImageGrid;



