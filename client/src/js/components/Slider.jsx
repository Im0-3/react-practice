import SliderItem from './SliderItem.jsx';

import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.slide.data);
    let index = this.props.slide.index;
    let before = index - 1;
    let after = index + 1;
    let len = this.props.slide.data.length;

    console.log(len);

    if(before < 0) before = len - 1;
    if(after >= len) after = 0;

    let slideItemNode = (_index) => {
      let data = this.props.slide.data[_index];
      return (<SliderItem title={data.title} index={_index}></SliderItem>);
    };

    return (
      <div className="Slider">
        <div className="SliderList">
          {slideItemNode(before)}
          {slideItemNode(index)}
          {slideItemNode(after)}
        </div>
        <div className="SliderNav">
          <div className="SliderNav__Item SliderNav__Item--Prev">
            <button onClick={this.props.onClickPrev}>
              prev
            </button>
          </div>
          <div className="SliderNav__Item SliderNav__Item--Next">
            <button onClick={this.props.onClickNext}>
              next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;