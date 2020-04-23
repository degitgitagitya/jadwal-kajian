import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import ItemSlide from "../Components/ItemSlide";
import CardKajian from "../Components/CardKajian";

class ListKajian extends Component {
  render() {
    return (
      <Container>
        <div>
          {/* Desktop */}
          <div className="d-none d-lg-block">
            <div className="d-flex justify-content-between align-items-center">
              <h3>{this.props.title}</h3>
              <div
                onClick={() => {
                  this.props.history.push(this.props.lainnya);
                }}
                className="span-clickable"
              >
                Lainnya
              </div>
            </div>
            <hr className="semi-bold-hr" />
            <div className="d-flex justify-content-between align-items-center">
              <ItemSlide
                fetchContent={this.props.fetchContent}
                style={{ maxWidth: 1110, padding: `0px 30px` }}
                number={this.props.jumlahKajian}
                data={this.props.data}
              ></ItemSlide>
            </div>
          </div>

          {/* Mobile */}
          <div className="d-block d-lg-none">
            <div className="d-flex justify-content-between align-items-center">
              <h3>{this.props.title}</h3>
              <div
                onClick={() => {
                  this.props.history.push(this.props.lainnya);
                }}
                className="span-clickable"
              >
                Lainnya
              </div>
            </div>
            <hr className="semi-bold-hr" />
            <div className="d-flex justify-content-between flex-wrap">
              {this.props.data.slice(0, 4).map((data) => {
                return (
                  <CardKajian
                    fetchContent={this.props.fetchContent}
                    key={data.id}
                    data={data}
                  ></CardKajian>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default withRouter(ListKajian);
