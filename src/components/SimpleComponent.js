import React, { Component } from 'react'

 class SimpleComponent extends Component {
   constructor(params) {
     super()
     this.state ={
       mood: 'happy'
     }
   }
   handleClick = () => {
     console.log("in mood changer")

     const newMood = this.state.mood === 'happy' ? 'sad' :'happy'


     this.setState({
      mood: newMood
     })
   }
  render() {
    return (
        
          <div onClick={this.handleClick}>{this.state.mood}</div>
          
    )
  }
}
export default SimpleComponent