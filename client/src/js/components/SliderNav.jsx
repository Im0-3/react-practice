import React from 'react';

class SliderNav extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
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
    );
  }
}

export default SliderNav;