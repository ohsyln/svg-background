import React from 'react'

export class Line extends React.PureComponent {
  render() {
    return( 
      <line 
        x1={this.props.x1}
        x2={this.props.x2}
        y1={this.props.y.y1}
        y2={this.props.y.y2}
        style={{
          stroke: this.props.color,
          strokeWidth: 1
        }}
      >
      </line>
    );
  }
}
