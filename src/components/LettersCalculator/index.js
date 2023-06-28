// Write your code here.

import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: ''}

  onCountText = event => {
    this.setState({count: event.target.value})
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="calculator-container">
          <div className="text-container">
            <h1>Calculate the Letters you Enter</h1>
            <div>
              <label htmlFor="letter" className="letter">
                Enter the phrase
              </label>
              <br />
              <input
                type="text"
                placeholder="Enter the phrase"
                id="letter"
                className="type-text"
                onChange={this.onCountText}
              />
            </div>
            <br />
            <p type="button" className="button">
              No.of letters: {count.length}
            </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
