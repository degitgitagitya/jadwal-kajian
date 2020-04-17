import React, { Component } from "react";
import { Container } from "react-bootstrap";

import CardKajian from "../Components/CardKajian";
import Navigation from "../Components/Navigation";

import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <br />
        <Container>
          <div className="row">
            <div className="col-6">
              <div className="d-flex justify-content-between">
                <h3>Kajian Hari Ini</h3>
                Lainnya
              </div>
              <hr className="bold-hr" />
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-between">
                <h3>Kajian Besok</h3>
                Lainnya
              </div>
              <hr className="bold-hr" />
            </div>
          </div>
          <div className="row">
            <div className="col-6 d-flex justify-content-around align-items-center">
              <h2>
                <i className="fas fa-chevron-left"></i>
              </h2>
              <CardKajian></CardKajian>
              <CardKajian></CardKajian>
              <h2>
                <i className="fas fa-chevron-right"></i>
              </h2>
            </div>
            <div className="col-6 d-flex justify-content-around align-items-center">
              <h2>
                <i className="fas fa-chevron-left"></i>
              </h2>
              <CardKajian></CardKajian>
              <CardKajian></CardKajian>
              <h2>
                <i className="fas fa-chevron-right"></i>
              </h2>
            </div>
          </div>
        </Container>
        <div className="landing-page-tanya-jawab">
          <Container className="pt-3 mt-5">
            <div className="row">
              <div className="col-6"></div>
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <h3>Tanya Jawab Terbaru</h3>
                  Lainnya
                </div>
                <hr className="bold-hr" />
                <div className="d-flex flex-column"></div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
