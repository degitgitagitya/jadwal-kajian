import React, { Component } from "react";
import { Container } from "react-bootstrap";
import jsonata from "jsonata";

import CardTanyaJawabLanding from "../Components/CardTanyaJawabLanding";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import JadwalSaran from "../Components/JadwalSaran";
import ItemSlide from "../Components/ItemSlide";

import KAJIAN from "../Data/Kajian";

import "./LandingPage.css";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);

    let today = new Date();
    today =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    let tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow =
      tomorrow.getFullYear() +
      "-" +
      (tomorrow.getMonth() + 1) +
      "-" +
      tomorrow.getDate();

    const expresson = jsonata(`kajian[tanggal="${today}"]`);
    const result = expresson.evaluate(KAJIAN);

    const x = jsonata(`kajian[tanggal="${tomorrow}"]`);
    const res = x.evaluate(KAJIAN);

    this.state = {
      cariPertanyaan: "",
      emailBerlangganan: "",
      hariIni: result,
      besok: res,
    };
  }

  onChangeCariPertanyaan = (event) => {
    this.setState({
      cariPertanyaan: event.target.value,
    });
  };

  onChangeEmailBerlangganan = (event) => {
    this.setState({
      emailBerlangganan: event.target.value,
    });
  };

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
            <div className="col-6 ">
              <ItemSlide
                style={{ maxWidth: 600, padding: `0px 60px` }}
                number={2}
                data={this.state.hariIni}
              ></ItemSlide>
            </div>
            <div className="col-6">
              <ItemSlide
                style={{ maxWidth: 600, padding: `0px 60px` }}
                number={2}
                data={this.state.besok}
              ></ItemSlide>
            </div>
          </div>
        </Container>

        <div className="landing-page-tanya-jawab"></div>
        <Container className="mt-5">
          <div className="row align-items-center">
            <div className="col-6 text-center">
              <h1
                onClick={() => {
                  this.props.history.push("/tanya-jawab");
                }}
                className="clickable-heading"
              >
                Tanya Jawab
              </h1>
              <p>Cari jawaban dari pertanyaan anda di sini</p>
              <div className="d-flex justify-content-center">
                <input
                  type="text"
                  placeholder="Cari di sini..."
                  className="global-rounded-search p-2 mr-2"
                  value={this.state.cariPertanyaan}
                  onChange={this.onChangeCariPertanyaan}
                />
                <button className="global-border-radius custom-button custom-button-primary">
                  <i className="fa fa-search mr-2"></i> CARI
                </button>
              </div>
              <p className="mt-5">Ingin mengajukan pertanyaan?</p>
              <button
                onClick={() => {
                  this.props.history.push("/ajukan-pertanyaan");
                }}
                className="custom-button custom-button-primary"
              >
                AJUKAN PERTANYAAN
              </button>
              <p className="mt-3">
                Hanya ingin melihat lihat tanya jawab lainnya?
              </p>
              <button
                onClick={() => {
                  this.props.history.push("/tanya-jawab");
                }}
                className="custom-button-outline custom-button-outline-white"
              >
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
              value={this.state.emailBerlangganan}
              onChange={this.onChangeEmailBerlangganan}
            />
            <button
              onClick={() => {
                this.props.history.push(
                  `/berlangganan?email=${this.state.emailBerlangganan}`
                );
              }}
              className="custom-button custom-button-primary global-border-radius"
            >
              <i className="fas fa-bell mr-2"></i> BERLANGGANAN
            </button>
          </div>
        </Container>

        <JadwalSaran></JadwalSaran>

        <Footer></Footer>
      </div>
    );
  }
}
