import React, { Component } from "react";
import { Container } from "react-bootstrap";

import "./Footer.css";
import { withRouter } from "react-router-dom";

class Footer extends Component {
  redirectTo = (url) => {
    this.props.history.push(url);
  };

  render() {
    return (
      <div className="footer-background text-white">
        <Container className="py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Jadwal Kajian</h2>
              <div className="row">
                <div
                  onClick={() => {
                    this.redirectTo("/daftar-jadwal-kajian");
                  }}
                  className="col-6 footer-content"
                >
                  Jawdal Kajian
                </div>
                <div
                  onClick={() => {
                    this.redirectTo("/daftar-penceramah");
                  }}
                  className="col-6 footer-content"
                >
                  Penceramah
                </div>
              </div>
              <div className="row">
                <div
                  onClick={() => {
                    this.redirectTo("/berlangganan");
                  }}
                  className="col-6 footer-content"
                >
                  Berlangganan
                </div>
                <div
                  onClick={() => {
                    this.redirectTo("/tanya-jawab");
                  }}
                  className="col-6 footer-content"
                >
                  Tanya Jawab
                </div>
              </div>
              <div className="row">
                <div
                  onClick={() => {
                    this.redirectTo("/kirim-jadwal");
                  }}
                  className="col-6 footer-content"
                >
                  Kirim Jadwal
                </div>
                <div
                  onClick={() => {
                    this.redirectTo("/hubungi");
                  }}
                  className="col-6 footer-content"
                >
                  Hubungi
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Footer);
