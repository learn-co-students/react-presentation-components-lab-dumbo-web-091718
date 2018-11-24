import React, {Component} from 'react'

class SimplerComponent extends React.Component {

  render(){
    return (
      <div onClick={()=> this.props.handleClick}>I am just {this.props.mood}</div>
    )
  }
}

export default SimplerComponent;
