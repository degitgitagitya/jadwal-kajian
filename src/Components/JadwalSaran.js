import React, { Component } from "react";
import { Container } from "react-bootstrap";

import "./JadwalSaran.css";
import { withRouter } from "react-router-dom";

class JadwalSaran extends Component {
  render() {
    return (
      <div className="landing-background-hubungi">
        <Container>
          <div className="row align-items-center">
            <div className="col-6 text-center">
              <h1>Kirim Jadwal</h1>
              <p>Mempunyai informasi tentang jadwal kajian?</p>
              <button
                onClick={() => {
                  this.props.history.push("/kirim-jadwal");
                }}
                className="custom-button-outline custom-button-outline-white"
              >
                KIRIM JADWAL KAJIAN
              </button>
            </div>
            <div className="col-6 text-center">
              <h1>Kirim Saran</h1>
              <p>Mempunyai saran untuk kami?</p>
              <button
                onClick={() => {
                  this.props.history.push("/kirim-saran");
                }}
                className="custom-button custom-button-primary"
              >
                KIRIM SARAN
              </button>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(JadwalSaran);
