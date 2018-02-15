import React from 'react'

export class Text extends React.PureComponent {
  render() {
    return( 
      <text 
        x={this.props.x} 
        y={this.props.y} 
        fontSize={this.props.fontSize}
        fill={this.props.color}
        fontFamily={this.props.fontFamily}
        style={{
          'fontFamily': this.props.fontFamily,
          'fontStyle': this.props.fontStyle
        }}
      >
          {this.props.text}
      </text>
    );
  }
}
