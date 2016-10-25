import React from 'react';
import Slider from './Slider.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: {
        index: 0,
        data: [
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
    };
    this.onClickNext = (e) => this._onClickNext(e);
    this.onClickPrev = (e) => this._onClickPrev(e);
  }
  componentDidMount() {
    //コンポーネントがレンダリングされたら実行される
  }
  _onClickPrev(e){
    let prev = this.state.slide.index - 1;
    if(prev < 0) prev = this.state.slide.data.length - 1;
    this.setState({
      slide: {
        index: prev,
        data: this.state.slide.data
      }
    });
  }
  _onClickNext(e){
    let next = this.state.slide.index + 1;
    if(next >= this.state.slide.data.length) next = 0;

    this.setState({
      slide: {
        index: next,
        data: this.state.slide.data
      }
    });
  }
  render() {
    return (
      <div>
        <Slider slide={this.state.slide} onClickNext={this.onClickNext} onClickPrev={this.onClickPrev}></Slider>
      </div>
    );
  }
}

export default App;