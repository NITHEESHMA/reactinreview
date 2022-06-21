import React, { Component } from 'react'

export default class Class extends Component {
    constructor(props){
        super(props);
        this.state={count:0}
    }
  render() {
    return (
      <div>{this.state.count}
      <button onClick={()=>{this.setState({count:this.state.count+1})}}>click</button>
      
      
      </div>
    )
  }
}
