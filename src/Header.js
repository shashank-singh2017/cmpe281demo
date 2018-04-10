import React, { Component } from 'react';




class Header extends Component {
  render() {
    return (

      <div className="container-fluid" style={{ backgroundColor: "blue"}}>
            <nav className="navbar navbar-toggleable-md navbar-dark" style={{paddingLeft: 0}}>
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul className="navbar-nav mr-auto" >
            <li className="nav-item active" >
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item active" >
              <a className="nav-link" href="#">About Us</a>
            </li>
            <li className="nav-item active" >
              <a className="nav-link " href="#">Services</a>
            </li>
            <li className="nav-item active" >
              <a className="nav-link " href="/MainPage">MainPage</a>
            </li>
            <li className="nav-item active" >
              <a className="nav-link " href="/Alcohol">Alcohol Page</a>
            </li>
        </ul>
        </div>
      </nav>
      </div>
    );
  }
}

export default Header;
