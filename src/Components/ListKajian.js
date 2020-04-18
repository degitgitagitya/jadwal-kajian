import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardKajian from "../Components/CardKajian";

export default class ListKajian extends Component {
  render() {
    return (
      <Container>
        <div className="d-flex justify-content-between align-items-center">
          <h3>{this.props.title}</h3>
          <div>Lainnya</div>
        </div>
        <hr className="semi-bold-hr" />
        <div className="d-flex justify-content-between align-items-center">
          <h3>
            <FontAwesomeIcon icon="chevron-left"></FontAwesomeIcon>
          </h3>
          <CardKajian></CardKajian>
          <CardKajian></CardKajian>
          <CardKajian></CardKajian>
          <CardKajian></CardKajian>
          <CardKajian></CardKajian>
          <h3>
            <FontAwesomeIcon icon="chevron-right"></FontAwesomeIcon>
          </h3>
        </div>
      </Container>
    );
  }
}
