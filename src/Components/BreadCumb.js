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
      <div>
        {/* Desktop */}

        <div className="d-none d-lg-block">
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
        </div>

        {/* Mobile */}

        <div className="d-block d-lg-none">
          <Container className="my-1 secondary-text">
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
        </div>
      </div>
    );
  }
}

export default withRouter(BreadCumb);
