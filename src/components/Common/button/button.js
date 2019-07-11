
import React, {Component} from '../../../../node_modules/react';
import './button.scss'

export default class Button extends Component {

    render() {
      return <div className="component-navbar">
        <button className={"button " +this.props.styleInfo}>{this.props.content}</button>
      </div>;
    }
  }