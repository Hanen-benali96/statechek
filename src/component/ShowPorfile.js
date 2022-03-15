import React, { Component } from 'react'
import pic from '../profilePicture.jpg'

export default class ShowProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        fullName: "Hanen Ben Ali", 
        bio:"Full stack js developer", 
        profession:"Software developer",
        time : new Date(),
      }
      }
      componentDidMount() {
        this.timeNow = setInterval(()=> {
          this.setState({time : new Date()})
        }, 1000)
      }
      componentWillUnmount(){
        clearInterval(this.timeNow) 
    }
  render() {
    return (
        <div style={{backgroundColor:'black',padding:'50%'}}>
            <img style={{width:'500px',borderRadius:'50%'}} src={pic}></img>
            <div style={{pading:'left',color:'aquamarine'}}><h1>{this.state.fullName}</h1>
            <h2>{this.state.profession}</h2>
            <h3>{this.state.bio}</h3>
            <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        </div>
        )
  }
}