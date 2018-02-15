import React from 'react';
import './App.css';
import {Content} from './components/Content'
import {Header} from './components/Header'

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      input: '',
      density: 25,
      height: 300,
      width: 500,
      color: '#D2D7D3',
      fontRange: {min: 5, max: 30},
      fontFamily: 'Titillium Web',

      lineDensity: 10
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <input type="text" 
          value={this.state.input} 
          placeholder="e.g. Bach, Chopin, Mozart"
          onChange={(e) => this.setState({input: e.target.value})}/>

        <Content 
          state={this.state}/>
      </div>
    );
  }
}

export default App;
