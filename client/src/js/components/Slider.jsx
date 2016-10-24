import SliderItem from './SliderItem.jsx';

import React from 'react';

class Slider extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let slideItemNode = this.props.slide.map((slide) => {
      return (<SliderItem title={slide.title}></SliderItem>);
    });
    return (
      <div>
        {slideItemNode}
      </div>
    );
  }
}

export default Slider;