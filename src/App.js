import React, { Component } from 'react';
import './App.css';
import { Player, PlayerList, PlayerForm } from './components/Player'
import axios from 'axios'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      players: [],
      currentPlayer: {}
    }
  }


  componentDidMount() {
    axios.get('http://localhost:8080/players')
      .then(resp => this.setState({ players: resp.data }))
  }

  updateCurrentPlayer = item => {
    this.setState({
      currentPlayer: item
    })
  }

  render() {
    return (
      <div className="container-fluid" >
        <div className="row">
          <div className="col s12">Menu</div>
        </div>
        <div className="row">
          <div className="col s3"><PlayerList players={this.state.players} updateCurrentPlayer={this.updateCurrentPlayer} /></div>
          <div className="col s9"><Player /></div>
        </div>
        <div className="row">
          <div className="col s12"><PlayerForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
