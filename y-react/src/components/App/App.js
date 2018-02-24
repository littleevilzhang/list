import React, { Component } from 'react'
import './app.css'

class App extends Component {
  state = {
    sizes:[
      {
        size:'M'
      },
      {
        size:'L'
      },
      {
        size:'XL'
      },
      {
        size:'XXL'
      },
    ]
  }
  render () {
    
    const list = this.state.sizes.map((item,i) => (
      <div key={i} className="size">{item.size}</div>
    ))
    return (

      <div className="app">
        <div className="list">
          {list}
        </div>
      </div>
    )
  }
}


export default App;
