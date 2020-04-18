import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class BreadCumb extends Component {
  render() {
    return <Container className="mt-1">{this.props.content}</Container>;
  }
}
