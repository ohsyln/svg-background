import React from 'react'
import {Text} from './Text'
import {Line} from './Line'
import {
  getRand,
  csvToArr
} from '../utility'

export class Content extends React.PureComponent {
  getRandFromArr(input) {
    return input[getRand(input.length)];
  }
  getRandStyle() {
    return getRand(2) ? "normal" : "italic";
  }

  generateText(){
    const {input, density, height, width, 
    color, fontRange, fontFamily } = this.props.state;
    const inputArr = csvToArr(input);
    const {min, max} = fontRange;

    const text = ( 
      [...Array(density)].map((e,i) => 
        <Text 
          x={getRand(width)} 
          y={getRand(height)} 
          fontSize={getRand(min,max)}
          fontStyle={this.getRandStyle()}
          fontFamily={fontFamily}
          color={color}
          text={this.getRandFromArr(inputArr)}

          key={i}
        />
      )
    );

    return text;
  }
  getYs(height) {
    const y1 = getRand(height);
    const y2 = getRand(2) > 0 ? y1 : getRand(height);
    return {y1: y1, y2: y2};
  }

  generateLine() {
    const {input, lineDensity, width, height, color} = this.props.state;
    if (input === '') return null;

    const line = (
      [...Array(lineDensity)].map((e,i) => 
        <Line
          x1={getRand(width)}
          x2={getRand(width)}
          y={this.getYs(height)}
          color={color}

          key={i}
        />
      )
    );

    return line;
  }

  render() {
    return ( 
      <div className="content">
        <svg 
          width={this.props.state.width} 
          height={this.props.state.height}
        >
          {this.generateText()} 
          {this.generateLine()}
        </svg>
      </div>
    );
  }
}

