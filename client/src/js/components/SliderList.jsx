import SliderItem from './SliderItem.jsx';

import React from 'react';

class SliderList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let index = this.props.slide.index;
    let before = index - 1;
    let after = index + 1;
    let len = this.props.slide.data.length;

    if(before < 0) before = len - 1;
    if(after >= len) after = 0;

    let slideItemNode = (_index, itemIndex) => {
      let data = this.props.slide.data[_index];
      return (<SliderItem title={data.title} index={index} itemIndex={itemIndex} position={this.props.slide.position}></SliderItem>);
    };

    return (
      <div className="SliderList">
        {slideItemNode(before, 0)}
        {slideItemNode(index, 1)}
        {slideItemNode(after, 2)}
      </div>
    );
  }
}

export default SliderList;