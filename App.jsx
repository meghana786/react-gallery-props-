import React from 'react';
import './App.css';
import DataComponent from './components/DataComponent';

function App({ data }) {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <div className="image-container">
        {data.map(item => (
          <img key={item.id} src={item.img} alt={`Elephant ${item.id}`} />
        ))}
      </div>
    </div>
  );
}

const AppWithData = () => (
  <DataComponent>
    <App />
  </DataComponent>
);

export default AppWithData;
