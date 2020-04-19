import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ItemSlide from "../Components/ItemSlide";

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
          <ItemSlide
            fetchContent={this.props.fetchContent}
            style={{ maxWidth: 1110, padding: `0px 30px` }}
            number={5}
            data={this.props.data}
          ></ItemSlide>
        </div>
      </Container>
    );
  }
}
