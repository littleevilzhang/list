import React , { Component } from 'react';
import './main.css'
class Main extends Component {
  render () {
    let name = 'Zhang'
    return (
      <div className="main">
        {name}
      </div>
    )
  }
}

export default Main
