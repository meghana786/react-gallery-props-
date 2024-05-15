import React, { Component } from 'react';
import './App.css';
import DataComponent from './components/DataComponent'; 

class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h1>Image Gallery</h1>
        <DataComponent />
      </div>
    );
  }
}

export default AppClass;
