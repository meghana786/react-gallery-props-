import React, { Component } from 'react';
import './App.css';
import DataComponent from './components/DataComponent';

class AppClass extends Component {
  render() {
    const { data } = this.props;
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
}

const AppClassWithData = () => (
  <DataComponent>
    <AppClass />
  </DataComponent>
);

export default AppClassWithData;
