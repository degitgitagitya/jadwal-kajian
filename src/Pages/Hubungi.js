import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";
import JadwalSaran from "../Components/JadwalSaran";

import "./Hubungi.css";

export default class Hubungi extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Hubungi Kami"></BreadCumb>

        <Container className="mb-5">
          <h2 className="text-center mb-4">Hubungi Kami</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="primary-bold">Judul</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Ketik judul pesan di sini.."
                />
                <div className="primary-bold">Pesan</div>
                <textarea
                  placeholder="Ketik pesan di sini.."
                  name="pesan"
                  id="pesan"
                  className="form-control"
                  rows="8"
                ></textarea>
                <br />
                <br />
                <div className="d-flex justify-content-center">
                  <button className="custom-button custom-button-primary">
                    KIRIM PESAN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container>
          <div className="row">
            <div className="col-6">
              <h3 className="text-center">Lokasi</h3>
              <div className="d-flex justify-content-start align-items-center">
                <h3>
                  <FontAwesomeIcon
                    className="text-muted mr-3"
                    icon="map-marker-alt"
                  ></FontAwesomeIcon>
                </h3>
                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                  aut minima facilis pariatur architecto non dolorum aspernatur
                  consequatur.
                </div>
              </div>
            </div>
            <div className="col-6">
              <h3 className="text-center">Kontak</h3>
              <div className="d-flex justify-content-start">
                <h3>
                  <FontAwesomeIcon
                    className="text-muted mr-3"
                    icon="envelope"
                  ></FontAwesomeIcon>
                </h3>
                <div>email@email.com</div>
              </div>

              <div className="d-flex justify-content-start">
                <h3>
                  <FontAwesomeIcon
                    className="text-muted mr-3"
                    icon="phone"
                  ></FontAwesomeIcon>
                </h3>
                <div>555-555-555</div>
              </div>
            </div>
          </div>
        </Container>

        <br />
        <br />

        <JadwalSaran></JadwalSaran>
        <Footer></Footer>
      </div>
    );
  }
}
