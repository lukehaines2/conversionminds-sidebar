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
    <div className="grid-container">
      <div className="grid">
        {createGrid()}
      </div>
    </div>
  )
}

export default ImageGrid;



