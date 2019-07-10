import React, {Component} from 'react';
import Button from '../button'
import './navbar.scss'

export default class Navbar extends Component {
  
    render() {
      return <div className="navbar">
        <Button styleInfo="button--success" content="ACEPTAR"></Button>
        <Button styleInfo="button--danger" content="CANCELAR"></Button>
      </div>;
    }
  }
