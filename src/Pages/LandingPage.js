import React, { Component } from "react";
import { Container } from "react-bootstrap";

import CardKajian from "../Components/CardKajian";
import CardTanyaJawabLanding from "../Components/CardTanyaJawabLanding";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

import "./LandingPage.css";
import JadwalSaran from "../Components/JadwalSaran";

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

        <div className="landing-page-tanya-jawab"></div>
        <Container className="mt-5">
          <div className="row align-items-center">
            <div className="col-6 text-center">
              <h1>Tanya Jawab</h1>
              <p>Cari jawaban dari pertanyaan anda di sini</p>
              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  placeholder="Cari di sini..."
                  className="global-rounded-search p-2 mr-2"
                />
                <button className="global-border-radius custom-button custom-button-primary">
                  <i className="fa fa-search mr-2"></i> CARI
                </button>
              </div>
              <p className="mt-5">Ingin mengajukan pertanyaan?</p>
              <button className="custom-button custom-button-primary">
                AJUKAN PERTANYAAN
              </button>
              <p className="mt-3">
                Hanya ingin melihat lihat tanya jawab lainnya?
              </p>
              <button className="custom-button-outline custom-button-outline-white">
                LIHAT TANYA JAWAB LAINNYA
              </button>
            </div>
            <div className="col-6">
              <div className="d-flex justify-content-between">
                <h3>Tanya Jawab Terbaru</h3>
                Lainnya
              </div>
              <hr className="bold-hr" />
              <div className="d-flex flex-column align-items-end">
                <CardTanyaJawabLanding></CardTanyaJawabLanding>
                <CardTanyaJawabLanding></CardTanyaJawabLanding>
                Lainnya
              </div>
            </div>
          </div>
        </Container>

        <Container className="text-center mt-5 mb-5">
          <h1>Berlangganan</h1>
          <p>
            Berlangganan untuk mendapatkan informasi dari kami <br /> langsung
            ke Email anda{" "}
          </p>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              placeholder="Masukan email anda di sini"
              className="global-rounded-search-primary pt-2 pb-2 mr-2"
            />
            <button className="custom-button custom-button-primary global-border-radius">
              {" "}
              <i className="fas fa-bell mr-2"></i> BERLANGGANAN{" "}
            </button>
          </div>
        </Container>

        <JadwalSaran></JadwalSaran>

        <Footer></Footer>
      </div>
    );
  }
}
