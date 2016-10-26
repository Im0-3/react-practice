import React from 'react';

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = `SlideItem SlideItem--0${this.props.index}`;
    let transform = window.innerHeight * (this.props.itemIndex - 1) + this.props.position;
    return (
      <div className={className} style={{transform: `translate3d(0, ${transform}px, 0)`}}>
        {this.props.title}
      </div>
    )
  }
}

export default SliderItem;