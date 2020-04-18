import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";

export default class AjukanPertanyaan extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Tanya Jawab / Ajukan Pertanyaan"></BreadCumb>
        <Container className="mb-5">
          <h2 className="text-center mb-4">Ajukan Pertanyaan</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="primary-bold">Judul</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Judul"
                />
                <div className="primary-bold">Pertanyaan</div>
                <textarea
                  placeholder="Ketik pertanyaan di sini.."
                  name="pertanyaan"
                  id="pertanyaan"
                  className="form-control"
                  rows="8"
                ></textarea>
                <br />
                <div className="d-flex justify-content-center">
                  <button className="custom-button custom-button-primary">
                    KIRIM PERTANYAAN
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
