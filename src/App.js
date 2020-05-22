import React from 'react';
import './App.css';
import { Player, PlayerList, PlayerForm } from './components/Player'
function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col s12">Menu</div>
      </div>
      <div className="row">
        <div className="col s3"><PlayerList /></div>
        <div className="col s9"><Player /></div>
      </div>
      <div className="row">
        <div className="col s12"><PlayerForm /></div>
      </div>
    </div>
  );
}

export default App;
