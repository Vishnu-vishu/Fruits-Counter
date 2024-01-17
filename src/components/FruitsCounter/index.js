import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangoescount: 0,
    bananascount: 0,
  }

  onIncreaseMangoCount = () => {
    this.setState(prevState => ({mangoescount: prevState.mangoescount + 1}))
  }

  onIncreaseBananaCount = () => {
    this.setState(prevState => ({bananascount: prevState.bananascount + 1}))
  }

  render() {
    const {mangoescount, bananascount} = this.state
    return (
      <div className="fruits-counter-container">
        <div className="fruits-counter">
          <h1 className="count-text">
            Bob ate <span className="count">{mangoescount}</span> mangoes <span className="count">{bananascount}</span> bananas
          </h1>
          <div className="counters-control-container">
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="fruit-image"
                alt="mango"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onIncreaseMangoCount}
                >
                Eat Mango
                </button>
              </div>
            </div>
            <div className="counter-control">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="fruit-image"
                alt="banana"
              />
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onIncreaseBananaCount}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
