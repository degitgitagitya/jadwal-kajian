import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";

export default class Daftar extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Daftar"></BreadCumb>
        <Container className="mb-5">
          <h2 className="text-center mb-4">Daftar</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="primary-bold">Nama</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nama"
                />
                <div className="primary-bold">Email</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Email"
                />
                <div className="primary-bold">Kata Sandi</div>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Kata Sandi"
                />
                <div className="primary-bold">Konfirmasi Kata Sandi</div>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Konfirmasi Kata Sandi"
                />
                <div className="d-flex justify-content-center">
                  <button className="custom-button custom-button-primary">
                    DAFTAR
                  </button>
                </div>

                <div className="d-flex justify-content-center mt-2">
                  <div>Sudah memiliki akun?</div>
                </div>

                <div className="d-flex justify-content-center mt-2">
                  <button
                    onClick={() => {
                      this.props.history.push("/masuk");
                    }}
                    className="custom-button-outline custom-button-outline-primary"
                  >
                    MASUK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}
