import React, {Component} from 'react';
import './navbar.scss'
import Button from '../button'
import '../button/button.scss'

export default class Navbar extends Component {
  
    render() {
      return <div className="component-navbar">
        <Button styleInfo="button--success"></Button>
        <Button styleInfo="button--danger"></Button>
      </div>;
    }
  }
