import React from 'react';
import Slider from './Slider.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  getInitialState (){
    return {
      slide: [
        {
          title: 'A',
          image: 'hoge.png'
        },
        {
          title: 'B',
          image: 'hoge.png'
        },
        {
          title: 'C',
          image: 'hoge.png'
        },
        {
          title: 'D',
          image: 'hoge.png'
        },
        {
          title: 'E',
          image: 'hoge.png'
        }
      ]
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