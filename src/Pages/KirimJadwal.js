import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";

import "./KirimJadwal.css";
import "./Berlangganan.css";

export default class KirimJadwal extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Hubungi Kami / Kirim Jadwal"></BreadCumb>

        <Container className="mb-5">
          <h2 className="text-center mb-4">Kirim Jadwal</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="primary-bold">Nama Pengirim</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nama Pengirim"
                />

                <div className="primary-bold">Nama Penceramah</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nama Penceramah"
                />

                <div className="primary-bold">Lokasi</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Lokasi"
                />
              </div>
              <div className="col-4">
                <div className="primary-bold">Nomor Telepon Pengirim</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nomor Telepon Pengirim"
                />

                <div className="primary-bold">
                  Nomor Telepon Pihak Penceramah
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nomor Telepon Pihak Penceramah"
                />

                <div className="primary-bold">Waktu</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Waktu"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="primary-bold">Informasi Lainnya</div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Informasi Lainnya"
                />
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <button className="custom-button custom-button-primary">
                KIRIM JADWAL
              </button>
            </div>
          </div>
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}
