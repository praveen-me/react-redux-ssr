import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/posts">Post</Link>
      </div>
    );
  }
}

export default Header;