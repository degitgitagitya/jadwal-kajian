import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import "./BreadCumb.css";

class BreadCumb extends Component {
  redirectTo = (url) => {
    this.props.history.push(url);
  };

  render() {
    return (
      <Container className="mt-1">
        {this.props.content.map((data) => {
          return (
            <span
              key={data.id}
              onClick={() => {
                this.redirectTo(data.url);
              }}
              className="breadcumb-content"
            >
              {data.nama}
            </span>
          );
        })}
      </Container>
    );
  }
}

export default withRouter(BreadCumb);
