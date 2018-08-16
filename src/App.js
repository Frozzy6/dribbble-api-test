import React, { Component } from 'react';

import Navbar from './components/Navbar';
import DialogContent from './components/DialogContent';
import ContentContainer from './containers/contentContainer';
import Dialog from './containers/dialog';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <ContentContainer />
        <Dialog />
      </div>
    );
  }
}

export default App;
