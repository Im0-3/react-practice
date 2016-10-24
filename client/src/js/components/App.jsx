import React from 'react';
import Slider from './Slider.jsx';

let data = {
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
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Slider slide={data.slide}></Slider>
      </div>
    );
  }
}

export default App;