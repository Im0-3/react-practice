import React from 'react';

class SliderItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = `SlideItem SlideItem--0${this.props.index}`;
    return (
      <div className={className}>
        {this.props.title}
      </div>
    )
  }
}

export default SliderItem;