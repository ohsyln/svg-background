import React from 'react'
import logo from '../githublogo.png'

export class Header extends React.PureComponent {
    render() { 
        return( 
            <div className="header">
                <div className="headerInner">
                  <span className="title">
                    SVG Background Generator
                  </span>
                  <a href="https://github.com/sylnsyln/svg-background">
                      <img src={logo} alt="github logo" className="logo"/>
                  </a>
                </div>
                <hr/>
            </div>
        );
    }
}
