import React, { Component } from "react";
import { Container, Carousel } from "react-bootstrap";
import jsonata from "jsonata";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactModal from "react-modal";
import { AuthContext } from "../Contexts/Authentication";

import CardTanyaJawabLanding from "../Components/CardTanyaJawabLanding";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import JadwalSaran from "../Components/JadwalSaran";
import ItemSlide from "../Components/ItemSlide";

import kajian from "../Assets/kajian.jpg";
import KAJIAN from "../Data/Kajian";

import "./LandingPage.css";

class LandingPage extends Component {
  static contextType = AuthContext;

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

    let tanyaJawab = jsonata(`tanya^(>waktu)`);
    tanyaJawab = tanyaJawab.evaluate(KAJIAN);

    this.state = {
      cariPertanyaan: "",
      emailBerlangganan: "",
      hariIni: result,
      besok: res,
      tanyaJawab: tanyaJawab,
    };
  }

  toggleModalWarning = () => {};

  componentDidMount() {
    window.scrollTo(0, 0);
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

  handleKeyPressSub = (event) => {
    if (event.key === "Enter") {
      this.props.history.push(
        `/berlangganan?email=${this.state.emailBerlangganan}`
      );
    }
  };

  onClickCariPertanyaan = () => {
    this.props.history.push(`/tanya-jawab?cari=${this.state.cariPertanyaan}`);
  };

  handleKeyPressTanya = (event) => {
    if (event.key === "Enter") {
      this.props.history.push(`/tanya-jawab?cari=${this.state.cariPertanyaan}`);
    }
  };

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.context.modalWarning}
          className="kelas-modal"
          overlayClassName="kelas-modal-overlay"
        >
          <div className="d-flex justify-content-center">
            <h1>
              <FontAwesomeIcon
                style={{
                  color: "#FF7900",
                }}
                icon="exclamation"
              ></FontAwesomeIcon>
            </h1>
          </div>
          <h2 className="text-center">Harap di Baca</h2>
          <button
            onClick={() => {
              this.context.changeModalWarningToFalse();
            }}
            className="custom-button w-100 custom-button-primary"
          >
            Baik, saya mengerti
          </button>
          <p className="text-center">
            Situs web ini merupakan situs web <strong>demo</strong> dan bukan
            merupakan produk akhir
          </p>
          <p className="text-center">
            Situs web ini hanya menggambarkan tampilan{" "}
            <strong>(USER INTERFACE)</strong> dari produk akhir, sehingga
            beberapa fungsi dari situs web ini tidak bisa digunakan seperti{" "}
            <strong>
              (masuk, daftar, beberapa fungsi pada filter dan yang lainnya)
            </strong>
          </p>
          <p className="text-center">
            <strong>
              Semua data yang ada pada situs web ini merupakan data yang tidak
              benar, hanya untuk kebutuhan konten, sehingga tidak boleh
              dijadikan referensi
            </strong>
          </p>
          <button
            onClick={() => {
              this.context.changeModalWarningToFalse();
            }}
            className="custom-button w-100 custom-button-primary"
          >
            Baik, saya mengerti
          </button>
        </ReactModal>

        {/* Desktop */}

        <div className="d-none d-lg-block">
          <Navigation></Navigation>
          <br />

          <Container>
            <div className="row">
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <h3>Kajian Hari Ini</h3>
                  <span
                    onClick={() => {
                      let date = new Date();
                      date =
                        date.getFullYear() +
                        "-" +
                        (date.getMonth() + 1) +
                        "-" +
                        date.getDate();

                      this.props.history.push(
                        `/daftar-jadwal-kajian?waktu=${date}`
                      );
                    }}
                    className="span-clickable"
                  >
                    Lainnya
                  </span>
                </div>
                <hr className="bold-hr" />
              </div>
              <div className="col-6">
                <div className="d-flex justify-content-between">
                  <h3>Kajian Besok</h3>
                  <span
                    onClick={() => {
                      let today = new Date();
                      let tomorrow = new Date(today);
                      tomorrow.setDate(tomorrow.getDate() + 1);
                      tomorrow =
                        tomorrow.getFullYear() +
                        "-" +
                        (tomorrow.getMonth() + 1) +
                        "-" +
                        tomorrow.getDate();

                      this.props.history.push(
                        `/daftar-jadwal-kajian?waktu=${tomorrow}`
                      );
                    }}
                    className="span-clickable"
                  >
                    Lainnya
                  </span>
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
                    onKeyPress={this.handleKeyPressTanya}
                  />
                  <button
                    onClick={this.onClickCariPertanyaan}
                    className="global-border-radius custom-button custom-button-primary"
                  >
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
                  <span
                    className="span-clickable"
                    onClick={() => {
                      this.props.history.push("/tanya-jawab");
                    }}
                  >
                    Lainnya
                  </span>
                </div>
                <hr className="bold-hr" />
                <div className="d-flex flex-column align-items-end">
                  {this.state.tanyaJawab.slice(0, 2).map((data) => {
                    return (
                      <CardTanyaJawabLanding
                        key={data.id}
                        data={data}
                      ></CardTanyaJawabLanding>
                    );
                  })}
                  <span
                    className="span-clickable"
                    onClick={() => {
                      this.props.history.push("/tanya-jawab");
                    }}
                  >
                    Lainnya
                  </span>
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
                onKeyPress={this.handleKeyPressSub}
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

        {/* Mobile */}

        <div className="d-block d-lg-none">
          <Navigation title="BERANDA"></Navigation>

          <Carousel>
            {this.state.hariIni.map((data) => {
              return (
                <Carousel.Item key={data.id}>
                  <div>
                    <div
                      style={{ backgroundImage: `url(${data.gambar})` }}
                      className="mobile-slider-landing-page"
                    >
                      <div className="mobile-slider-landing-page-content">
                        <div className="mobile-slider-landing-page-cover py-3">
                          <Container>
                            <div className="mobile-slider-landing-page-content-header">
                              <div className="d-flex justify-content-center py-2">
                                <div
                                  onClick={() => {
                                    let date = new Date();
                                    date =
                                      date.getFullYear() +
                                      "-" +
                                      (date.getMonth() + 1) +
                                      "-" +
                                      date.getDate();

                                    this.props.history.push(
                                      `/daftar-jadwal-kajian?waktu=${date}`
                                    );
                                  }}
                                >
                                  Kajian Hari Ini
                                  <FontAwesomeIcon
                                    icon="arrow-right"
                                    className="ml-2"
                                  ></FontAwesomeIcon>
                                </div>
                              </div>
                            </div>
                            <div
                              onClick={() => {
                                this.props.history.push(
                                  `/detail-jadwal-kajian?id=${data.id}`
                                );
                              }}
                              className="mobile-slider-landing-page-content-detail text-white"
                            >
                              <div className="d-flex justify-content-between">
                                <div>{data.penceramah}</div>
                                <div>
                                  <FontAwesomeIcon
                                    icon="map-marker-alt"
                                    className="mr-2"
                                  ></FontAwesomeIcon>
                                  {data.kota}
                                </div>
                              </div>
                              <div className="text-bold">{data.judul}</div>
                              <div className="secondary-text">
                                {data.deskripsi.substring(0, 70)} ...
                              </div>
                            </div>
                          </Container>
                        </div>
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>

          {/* List Tanya Jawab */}

          <Container>
            <div className="d-flex align-items-center justify-content-between mt-3">
              <div className="text-semi-bold">Tanya Jawab</div>
              <div
                onClick={() => {
                  this.props.history.push(`/tanya-jawab`);
                }}
                className="secondary-text"
              >
                Lainnya
                <FontAwesomeIcon
                  icon="arrow-right"
                  className="ml-2"
                ></FontAwesomeIcon>
              </div>
            </div>
            {this.state.tanyaJawab.slice(0, 3).map((data) => {
              return (
                <CardTanyaJawabLanding
                  key={data.id}
                  data={data}
                ></CardTanyaJawabLanding>
              );
            })}
          </Container>

          {/* Form Tanya Jawab */}

          <Container className="text-center">
            <div className="text-semi-bold mt-4">Tanya Jawab</div>
            <div className="secondary-text">Cari pertayaan anda di sini</div>
            <input
              type="text"
              className="form-control"
              placeholder="Cari pertanyaan di sini.."
            />
            <button className="mt-2 custom-button custom-button-primary w-100">
              CARI PERTANYAAN
            </button>
            <div className="secondary-text mt-2">Atau</div>
            <button
              onClick={() => {
                this.props.history.push(`/ajukan-pertanyaan`);
              }}
              className="mt-2 custom-button-outline custom-button-outline-primary w-100"
            >
              AJUKAN PERTANYAAN
            </button>
          </Container>

          {/* Form Berlangganan */}

          <div className="mobile-background-berlangganan mt-4">
            <Container className="text-center py-4">
              <div className="text-semi-bold">Berlangganan</div>
              <div className="secondary-text">
                Berlangganan untuk mendapatkan informasi dari kami langsung ke
                Email anda
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Masukan Email anda di sini..."
                value={this.state.emailBerlangganan}
                onChange={this.onChangeEmailBerlangganan}
                onKeyPress={this.handleKeyPressSub}
              />
              <button
                onClick={() => {
                  this.props.history.push(
                    `/berlangganan?email=${this.state.emailBerlangganan}`
                  );
                }}
                className="mt-2 custom-button custom-button-primary w-100"
              >
                BERLANGGANAN
              </button>
            </Container>
          </div>

          {/* Section Kirim Jadwal dan Saran */}

          <JadwalSaran></JadwalSaran>

          {/* Footer */}

          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default withRouter(LandingPage);
