import React from 'react';
import Slider from './Slider.jsx';

class App extends React.Component {
  getInitialState (){
    return {
      name: hoge
    }
  }
  render() {
    return (
      <div>
        <Slider name="hoge"></Slider>
      </div>
    );
  }
}

export default App;