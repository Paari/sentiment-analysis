import React, { Component } from 'react'
import request from 'superagent'

import Score from './Components/score'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      totalScore: 0,
      tone: [
        'negative',
        'neutral',
        'positive'
      ]
    }

    // Bind function to this
    this.getScore = this.getScore.bind(this)
  }

  getScore(inputMessage) {
    // hit the api and get the score
    request.post('http://doremember.dev:5000')
    .type('application/x-www-form-urlencoded')
    .send({'message': inputMessage})
    .end( (err, res) => {
      this.setState({
        score: res.body.score,
        totalScore: res.body.totalScore
      })
    })
  }

  /**
   * [whileWriting description]
   * @param  {[text]} inputMessage [The text input from the user]
   * @return {[object]}            [result from the server after anlysis]
   */
  whileWriting(inputMessage) {
    this.getScore(inputMessage)
  }

  render() {
    /**
     * [checks the value of overall score and gets the tone from state]
     * @return {[string]}
     */
    const toneOfWords = () => {
      if (this.state.totalScore === 0 ) {
        return this.state.tone[1]
      }
      if (this.state.totalScore < 0) {
        return this.state.tone[0]
      }

      return this.state.tone[2]
    }

    return (
      <section className="main-banner" style={{backgroundImage: 'url(./images/bg.svg)'}}>
      <div className="container ">
        <div className="row justify-content-center align-items-center d-flex full-height">
          <div className="col-12 col-md-8 text-center">
            <img alt="logo" className="App-logo" src={logo} />
            <h2>Tone: {toneOfWords()}</h2>
            <Score score={this.state.score} />
            <div className="form-group">
              <textarea
                className="form-control comment-input"
                onChange={(event) => this.whileWriting(event.target.value)}
                rows="3" />
            </div>
          </div>
        </div>
      </div>
      </section>
    )
  }
}

export default App
