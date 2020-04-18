import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";

export default class KirimSaran extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Hubungi Kami / Kirim Saran"></BreadCumb>

        <Container className="mb-5">
          <h2 className="text-center mb-4">Kirim Saran</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="primary-bold">Judul</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Ketik judul pesan di sini.."
                />
                <div className="primary-bold">Saran</div>
                <textarea
                  placeholder="Ketik saran di sini.."
                  name="saran"
                  id="saran"
                  className="form-control"
                  rows="8"
                ></textarea>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <button className="custom-button custom-button-primary">
                    KIRIM SARAN
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
