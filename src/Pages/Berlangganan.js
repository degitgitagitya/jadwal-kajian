import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";

import "./Berlangganan.css";

export default class Berlangganan extends Component {
  state = {
    inputEmail: "",
  };

  componentDidMount() {
    const url = new URL(window.location.href);
    const email = url.searchParams.get("email");
    this.setState({
      inputEmail: email,
    });
  }

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Berlangganan"></BreadCumb>
        <Container className="mb-5">
          <h2 className="text-center mb-4">Form Berlangganan</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="primary-bold">Email</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Masukan email"
                />
                <div className="primary-bold">Preferensi Penceramah</div>
                <button className="custom-button-outline custom-button-outline-primary mb-3">
                  PILIH PENCERAMAH
                </button>
                <div className="primary-bold">Preferensi Lokasi</div>
                <button className="custom-button-outline custom-button-outline-primary mb-3">
                  PILIH LOKASI
                </button>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <button className="custom-button custom-button-primary">
                    MULAI BERLANGGANAN
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
