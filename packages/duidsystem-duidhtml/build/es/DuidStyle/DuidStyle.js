import React, { Component } from 'react';
import appendStyle from "./appendStyle";
import getStyleId from "./getStyleId";
import removeStyle from "./removeStyle";

class DuidStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styleId: null
    };
  }

  componentWillMount() {
    this.setState((state, props) => ({
      styleId: getStyleId(props.children)
    }));
  }

  componentDidMount() {
    appendStyle(this.state.styleId, this.props.children);
  }

  componentWillUnmount() {
    removeStyle(this.state.styleId);
  }

  render() {
    return React.createElement(React.Fragment, null);
  }

}

export default DuidStyle;