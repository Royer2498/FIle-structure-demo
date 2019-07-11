import React, {Component} from '../../../../node_modules/react';
import Button from '../button'
import './navbar.scss'

export default class Navbar extends Component {
  
    render() {
      return <div className="navbar">
        <Button styleInfo="button--success" content="ACEPTAR"></Button>
        <Button styleInfo="button--danger" content="CANCELAR"></Button>
        <Button styleInfo="button--warning" content="INFO"></Button>
        <Button content="DEFAULT BUTTON"></Button>
      </div>;
    }
  }
