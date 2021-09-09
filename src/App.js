import React, { Component } from 'react';
import MainStory from './components/MainStory';

export default class App extends Component {
  render(){
    return (
      <div className="App">
        
        <div className="layout">
          <MainStory/>
        </div>
      
      </div>
    );
  }
}
