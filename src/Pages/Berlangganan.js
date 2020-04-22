import React, { Component } from "react";
import { Container } from "react-bootstrap";
import jsonata from "jsonata";
import ReactModal from "react-modal";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";
import WajibDiisi from "../Components/WajibDiisi";

import KAJIAN from "../Data/Kajian";

import "./Berlangganan.css";

class Berlangganan extends Component {
  constructor(props) {
    super(props);

    let x = jsonata("kota^(<nama)");
    x = x.evaluate(KAJIAN);
    let tempX = [];
    x.forEach((data) => {
      tempX.push({
        id: data.id,
        nama: data.nama,
        status: -1,
      });
    });
    x = tempX;

    let y = jsonata("penceramah^(<nama)");
    y = y.evaluate(KAJIAN);
    let tempY = [];
    y.forEach((data) => {
      tempY.push({
        id: data.id,
        nama: data.nama,
        status: -1,
      });
    });
    y = tempY;

    this.state = {
      showModalLokasi: false,
      showModalPenceramah: false,
      showModalBerlangganan: false,
      inputEmail: "",
      contentLokasi: x,
      contentLokasiFilter: x,
      contentPenceramah: y,
      contentPenceramahFilter: y,
      warning: false,
      warningMsg: "",
    };
  }

  changeInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    const url = new URL(window.location.href);
    const email = url.searchParams.get("email");
    if (email !== null) {
      this.setState({
        inputEmail: email,
      });
    }
  }

  toggleModalLokasi = () => {
    this.setState({
      showModalLokasi: !this.state.showModalLokasi,
    });
  };

  handleSearchLokasi = (event) => {
    let x = this.state.contentLokasi;
    let newX = [];

    x.forEach((data) => {
      if (data.nama.toLowerCase().includes(event.target.value) === true) {
        newX.push(data);
      }
    });

    this.setState({
      contentLokasiFilter: newX,
    });
  };

  handleClickFilterLokasi = (id) => {
    let x = this.state.contentLokasiFilter;
    x.forEach((data, index) => {
      if (data.id === id) {
        x[index].status = x[index].status * -1;
      }
    });

    this.setState({
      contentLokasiFilter: x,
    });
  };

  toggleModalPenceramah = () => {
    this.setState({
      showModalPenceramah: !this.state.showModalPenceramah,
    });
  };

  handleSearchPenceramah = (event) => {
    let x = this.state.contentPenceramah;
    let newX = [];

    x.forEach((data) => {
      if (data.nama.toLowerCase().includes(event.target.value) === true) {
        newX.push(data);
      }
    });

    this.setState({
      contentPenceramahFilter: newX,
    });
  };

  handleClickFilterPenceramah = (id) => {
    let x = this.state.contentPenceramahFilter;
    x.forEach((data, index) => {
      if (data.id === id) {
        x[index].status = x[index].status * -1;
      }
    });

    this.setState({
      contentPenceramahFilter: x,
    });
  };

  toggleModalBerlangganan = () => {
    this.setState({
      showModalBerlangganan: !this.state.showModalBerlangganan,
    });
  };

  redirectTo = (url) => {
    this.props.history.push(url);
  };

  validateInput = () => {
    let penceramah = 0;
    let lokasi = 0;

    this.state.contentLokasiFilter.forEach((data) => {
      if (data.status === 1) {
        lokasi = 1;
      }
    });

    this.state.contentPenceramahFilter.forEach((data) => {
      if (data.status === 1) {
        penceramah = 1;
      }
    });

    if (this.state.inputEmail === "") {
      return "Harap isi email";
    } else if (penceramah === 0) {
      return "Harap pilih penceramah";
    } else if (lokasi === 0) {
      return "Harap pilih lokasi";
    } else {
      return "Sukses";
    }
  };

  toggleWarning = (msg) => {
    this.setState({
      warning: true,
      warningMsg: msg,
    });
  };

  render() {
    return (
      <div>
        <div className="d-none d-lg-block">
          <div>
            <ReactModal
              isOpen={this.state.showModalPenceramah}
              className="kelas-modal"
              overlayClassName="kelas-modal-overlay"
            >
              <div className="text-center">
                <h3>Pilih Penceramah </h3>
                <input
                  type="text"
                  className="global-rounded-search-primary py-2"
                  placeholder="Cari nama penceramah di sini.."
                  onChange={this.handleSearchPenceramah}
                />
                <hr className="semi-bold-hr mx-5" />
              </div>
              <div className="d-flex justify-content-start flex-wrap">
                {this.state.contentPenceramahFilter.map((data) => {
                  return (
                    <div
                      onClick={() => {
                        this.handleClickFilterPenceramah(data.id);
                      }}
                      key={data.id}
                      className="filter-custom-width d-flex list-filter"
                    >
                      <div
                        className={
                          data.status === 1
                            ? "filter-check-box-primary filter-check-box-primary-selected mr-2"
                            : "filter-check-box-primary mr-2"
                        }
                      ></div>
                      <div>{data.nama}</div>
                    </div>
                  );
                })}
              </div>

              <div className="d-flex justify-content-end">
                <button
                  className="custom-button-primary custom-button"
                  onClick={this.toggleModalPenceramah}
                >
                  Tutup
                </button>
              </div>
            </ReactModal>

            <ReactModal
              isOpen={this.state.showModalLokasi}
              className="kelas-modal"
              overlayClassName="kelas-modal-overlay"
            >
              <div className="text-center">
                <h3>Pilih Lokasi</h3>
                <input
                  type="text"
                  className="global-rounded-search-primary py-2"
                  placeholder="Cari lokasi di sini.."
                  onChange={this.handleSearchLokasi}
                />
                <hr className="semi-bold-hr mx-5" />
              </div>
              <div className="d-flex justify-content-start flex-wrap">
                {this.state.contentLokasiFilter.map((data) => {
                  return (
                    <div
                      onClick={() => {
                        this.handleClickFilterLokasi(data.id);
                      }}
                      key={data.id}
                      className="filter-custom-width d-flex list-filter"
                    >
                      <div
                        className={
                          data.status === 1
                            ? "filter-check-box-primary filter-check-box-primary-selected mr-2"
                            : "filter-check-box-primary mr-2"
                        }
                      ></div>
                      <div>{data.nama}</div>
                    </div>
                  );
                })}
              </div>

              <div className="d-flex justify-content-end">
                <button
                  className="custom-button-primary custom-button"
                  onClick={this.toggleModalLokasi}
                >
                  Tutup
                </button>
              </div>
            </ReactModal>

            <ReactModal
              isOpen={this.state.showModalBerlangganan}
              className="kelas-modal"
              overlayClassName="kelas-modal-overlay"
            >
              <div className="text-center">
                <h3>Sukses Berlangganan</h3>
                <h1>
                  <FontAwesomeIcon icon="check-circle"></FontAwesomeIcon>
                </h1>
                <p>
                  Anda telah berhasil berlangganan, setiap informasi yang
                  relevan akan dikirim ke email anda
                </p>

                <div className="d-flex justify-content-center">
                  <button
                    className="custom-button-primary custom-button"
                    onClick={() => {
                      this.redirectTo("/");
                    }}
                  >
                    Kembali Ke Beranda
                  </button>

                  <button
                    className="custom-button-info custom-button ml-2"
                    onClick={() => {
                      this.redirectTo("/daftar-jadwal-kajian");
                    }}
                  >
                    Lihat Jadwal Kajian
                  </button>

                  <button
                    className="custom-button-warning custom-button ml-2"
                    onClick={() => {
                      this.redirectTo("/tanya-jawab");
                    }}
                  >
                    Lihat Tanya Jawab
                  </button>
                </div>
              </div>
            </ReactModal>

            <Navigation></Navigation>
            <BreadCumb
              content={[
                {
                  id: 1,
                  url: "/",
                  nama: "Beranda / ",
                },
                {
                  id: 2,
                  url: "/berlangganan",
                  nama: "Berlangganan",
                },
              ]}
            ></BreadCumb>
            <Container className="mb-5">
              <h2 className="text-center mb-4">Form Berlangganan</h2>
              <div className="card-berlangganan">
                <div className="row justify-content-center">
                  <div className="col-4">
                    <div className="primary-bold">
                      Email <span className="text-danger">*</span>
                    </div>
                    <input
                      type="text"
                      className="form-control mb-3"
                      placeholder="Masukan email"
                      value={this.state.inputEmail}
                      onChange={this.changeInputEmail}
                    />
                    <div className="primary-bold">
                      Preferensi Penceramah{" "}
                      <span className="text-danger">*</span>
                    </div>
                    <button
                      onClick={this.toggleModalPenceramah}
                      className="custom-button-outline custom-button-outline-primary mb-3"
                    >
                      PILIH PENCERAMAH
                    </button>
                    <div className="primary-bold">
                      Preferensi Lokasi <span className="text-danger">*</span>
                    </div>
                    <button
                      onClick={this.toggleModalLokasi}
                      className="custom-button-outline custom-button-outline-primary"
                    >
                      PILIH LOKASI
                    </button>
                    <br />
                    <br />
                    <div className="text-danger mb-2">
                      {this.state.warning ? this.state.warningMsg : ""}
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        onClick={() => {
                          if (this.validateInput() === "Sukses") {
                            this.toggleModalBerlangganan();
                          } else {
                            this.toggleWarning(this.validateInput());
                          }
                        }}
                        className="custom-button custom-button-primary"
                      >
                        MULAI BERLANGGANAN
                      </button>
                    </div>
                  </div>
                </div>
                <WajibDiisi></WajibDiisi>
              </div>
            </Container>
          </div>
        </div>
        <div className="d-block d-lg-none">
          <Navigation title="BERLANGGANAN"></Navigation>
          <BreadCumb
            content={[
              {
                id: 1,
                url: "/",
                nama: "Beranda / ",
              },
              {
                id: 2,
                url: "/berlangganan",
                nama: "Berlangganan",
              },
            ]}
          ></BreadCumb>

          <Container>
            <div className="text-semi-bold">Email</div>
            <input
              type="text"
              className="form-control"
              placeholder="Masukan Email di sini..."
            />

            <div className="text-semi-bold mt-2">Preferensi Penceramah</div>
            <button className="custom-button-outline w-100 custom-button-outline-primary py-2">
              Pilih Penceramah
            </button>

            <div className="text-semi-bold mt-2">Preferensi Lokasi</div>
            <button className="custom-button-outline w-100 custom-button-outline-primary py-2">
              Pilih Lokasi
            </button>

            <button className="custom-button custom-button-primary w-100 py-1 mt-4">
              BERLANGGANAN
            </button>
          </Container>

          <br />
          <br />
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(Berlangganan);
