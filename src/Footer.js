import React, { Component } from 'react';

import './Footer.css';



class Footer extends Component {
  render() {
    return (
      <div>
      <footer className="footer" style={{backgroundColor: "#353839",padding: 20}}>
            <div className="icons" style={{float: "right"}}>
              <span className="icon"></span>
              <span className="icon" style={{marginLeft: 10}}></span>
              <span className="icon" style={{marginLeft: 10}}>/></span>
              <span className="icon" style={{marginLeft: 10}}>/></span>
              <span className="icon" style={{marginLeft: 10}}></span>
            </div>
      </footer>
      </div>
    );
  }
}


export default Footer;
