import React, { Component } from "react";
import { Container } from "react-bootstrap";

import "./JadwalSaran.css";
import { withRouter } from "react-router-dom";

class JadwalSaran extends Component {
  render() {
    return (
      <div>
        {/* Desktop */}

        <div className="d-none d-lg-block">
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
        </div>

        {/* Mobile */}

        <div className="d-block d-lg-none">
          <Container className="py-4 text-center">
            <div className="text-semi-bold">Kirim Jadwal</div>
            <div className="secondary-text">
              Mempunya informasi tentang jadwal kajian?
            </div>
            <button
              onClick={() => {
                this.props.history.push(`/kirim-jadwal`);
              }}
              className="w-100 custom-button-primary custom-button"
            >
              KIRIM JADWAL
            </button>

            <div className="text-semi-bold mt-3">Kirim Saran</div>
            <div className="secondary-text">Mempunyai saran untuk kami</div>
            <button
              onClick={() => {
                this.props.history.push(`/kirim-saran`);
              }}
              className="w-100 custom-button-outline-primary custom-button-outline"
            >
              KIRIM SARAN
            </button>
          </Container>
        </div>
      </div>
    );
  }
}

export default withRouter(JadwalSaran);
