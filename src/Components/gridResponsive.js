import React from 'react';
import '../style/grid.scss';


const gridCreator = () => {
  const colours = ["lightblue", "lightgrey", "orange", "silver", "lightgreen", "hotpink"];
  return (
    colours.map((colour, idx) => (
      <div key={colour[idx]} className="card">
        <div className="thumbnail" style={{ background: colour }}></div>
        <div className="text">
          <div className="title">I am a card Title</div>
          <div className="subheader">I am some random smaller text talking about the image!</div>
        </div>
      </div>
    ))
  )
}

function App() {
  return (
    <div className="App">
      <h1>Grid solution</h1>
      <div className="grid-container">
        {gridCreator()}
      </div>
      <div className="spacer"></div>
      <h1>Flexbox solution</h1>
      <h4>(intended behaviour "impossible" so compromise required)</h4>
      <div className="flex-container">
        {gridCreator()}
        <div className="blank"></div>
      </div>
    </div>
  );
}

export default App;
