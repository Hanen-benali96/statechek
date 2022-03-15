import React, { Component } from 'react'
import ShowProfile from './component/ShowPorfile.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        show : false
    }
}
  render() {
    return (
      <div style={{display:'flex',justifyContent:'center'}}>  {this.state.show ? <ShowProfile/> : null}
      <button onClick={()=>this.setState({show: !this.state.show})}>Show!
      </button>
      </div>
    )
  }
}