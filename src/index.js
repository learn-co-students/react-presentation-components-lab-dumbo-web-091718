import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

let mood = 'happy'
function changeMood() {
  if (mood === 'happy') {
    mood = 'sad'
  } else {
    mood = 'happy'
  }
}


ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent mood={this.mood} handleClick={this.changeMood} />
  </div>,
  document.getElementById('root')
);
