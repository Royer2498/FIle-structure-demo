
import React, {Component} from 'react';
import './button.scss'

export default class Button extends Component {

    render() {
      return <div className="component-navbar">
        <button className={"button " +this.props.styleInfo}>HOLA MUNDO</button>
      </div>;
    }
  }