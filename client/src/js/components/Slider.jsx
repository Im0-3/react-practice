import SliderList from './SliderList.jsx';
import SliderNav from './SliderNav.jsx';

import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: {
        index: 0,
        position: 0,
        targetPosition: 800,
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
    this.loop = () => this._loop();
  }
  _onClickPrev(e){
    this.animate(-window.innerHeight).then(() => {
      let prev = this.state.slide.index - 1;
      if (prev < 0) prev = this.state.slide.data.length - 1;

      this.setState({
        slide: {
          index: prev,
          position: 0,
          targetPosition: 0,
          data: this.state.slide.data
        }
      });
    });
  }
  _onClickNext(e){
    this.animate(window.innerHeight).then(() => {
      let next = this.state.slide.index + 1;
      if(next >= this.state.slide.data.length) next = 0;

      this.setState({
        slide: {
          index: next,
          position: 0,
          targetPosition: 0,
          data: this.state.slide.data
        }
      });
    });
  }
  componentDidMount(){

  }
  animate(pos){
    this.setState({
      slide: {
        index: this.state.slide.index,
        position: 0,
        targetPosition: pos,
        data: this.state.slide.data
      }
    });
    let promise = new Promise((resolve) => {
      this.resolve = resolve;
      this.loop();
    });
    return promise;
  }
  _loop(){
    this.raID = requestAnimationFrame(this.loop);
    let position = this.state.slide.position + (this.state.slide.targetPosition - this.state.slide.position) * 0.2;
    this.setState({
      slide: {
        index: this.state.slide.index,
        position: position,
        targetPosition: this.state.slide.targetPosition,
        data: this.state.slide.data
      }
    });
    if(Math.abs(this.state.slide.position - this.state.slide.targetPosition) < 0.001){
      this.setState({
        slide: {
          index: this.state.slide.index,
          position: 0,
          targetPosition: 0,
          data: this.state.slide.data
        }
      });
      cancelAnimationFrame(this.raID);
      this.resolve();
      return;
    }
  }
  render() {
    return (
      <div className="Slider">
        <SliderList slide={this.state.slide}/>
        <SliderNav onClickPrev={this.onClickPrev} onClickNext={this.onClickNext} />
      </div>
    );
  }
}

export default Slider;