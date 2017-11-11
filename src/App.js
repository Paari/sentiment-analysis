import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <section className="main-banner" style={{backgroundImage: 'url(./images/bg.svg)'}}>
      <div className="container ">
        <div className="row justify-content-center align-items-center d-flex full-height">
          <div className="col-12 col-md-8 text-center">
            <img alt="image" className="App-logo" src={logo} />
            <h1 className="score-heading">Score: 0</h1>
            <div className="form-group">
              <textarea class="form-control comment-input" rows="3"></textarea>
            </div>
          </div>
        </div>
      </div>
      </section>
    );
  }
}

export default App;
