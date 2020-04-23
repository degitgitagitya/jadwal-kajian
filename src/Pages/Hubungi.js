import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";
import JadwalSaran from "../Components/JadwalSaran";
import WajibDiisi from "../Components/WajibDiisi";

import "./Hubungi.css";

class Hubungi extends Component {
  state = {
    inputJudul: "",
    inputPesan: "",
    showModal: false,
    warning: false,
    warningMsg: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onChangeInputJudul = (event) => {
    this.setState({
      inputJudul: event.target.value,
    });
  };

  onChangeInputPesan = (event) => {
    this.setState({
      inputPesan: event.target.value,
    });
  };

  redirectTo = (url) => {
    this.props.history.push(url);
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  toggleWarning = (msg) => {
    this.setState({
      warning: true,
      warningMsg: msg,
    });
  };

  validateInput = () => {
    if (this.state.inputJudul === "") {
      return "Mohon isi Judul Pesan";
    } else if (this.state.inputPesan === "") {
      return "Mohon isi Pesan";
    } else {
      return "Sukses";
    }
  };

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.showModal}
          className="kelas-modal"
          overlayClassName="kelas-modal-overlay"
        >
          <div className="text-center">
            <h3>Sukses Mengirim Pesan</h3>
            <h1>
              <FontAwesomeIcon icon="check-circle"></FontAwesomeIcon>
            </h1>
            <p>
              Terimakasih telah mengirim pesan untuk kami <br />
              Kami akan berusaha untuk menanggapi pesan tersebut
            </p>

            <div className="d-flex flex-wrap justify-content-center">
              <button
                className="custom-button-primary custom-button modal-max-width mr-md-2 mt-2 mt-md-0"
                onClick={() => {
                  this.redirectTo("/");
                }}
              >
                Kembali Ke Beranda
              </button>

              <button
                className="custom-button-info custom-button modal-max-width mr-md-2 mt-2 mt-md-0"
                onClick={() => {
                  this.redirectTo("/daftar-jadwal-kajian");
                }}
              >
                Lihat Jadwal Kajian
              </button>

              <button
                className="custom-button-warning custom-button modal-max-width mt-2 mt-md-0"
                onClick={() => {
                  this.redirectTo("/tanya-jawab");
                }}
              >
                Lihat Tanya Jawab
              </button>
            </div>
          </div>
        </ReactModal>
        <Navigation title="HUBUNGI"></Navigation>
        <BreadCumb
          content={[
            {
              id: 1,
              url: "/",
              nama: "Beranda / ",
            },
            {
              id: 2,
              url: "/hubungi",
              nama: "Hubungi",
            },
          ]}
        ></BreadCumb>

        {/* Desktop */}

        <div className="d-none d-lg-block">
          <Container className="mb-5">
            <h2 className="text-center mb-4">Hubungi Kami </h2>
            <div className="card-berlangganan">
              <div className="row justify-content-center">
                <div className="col-4">
                  <div className="primary-bold">
                    Judul <span className="text-danger">*</span>
                  </div>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Ketik judul pesan di sini.."
                    value={this.state.inputJudul}
                    onChange={this.onChangeInputJudul}
                  />
                  <div className="primary-bold">
                    Pesan <span className="text-danger">*</span>
                  </div>
                  <textarea
                    placeholder="Ketik pesan di sini.."
                    name="pesan"
                    id="pesan"
                    className="form-control"
                    rows="8"
                    onChange={this.onChangeInputPesan}
                    value={this.state.inputPesan}
                  />
                  <br />
                  <div className="text-danger mb-2">
                    {this.state.warning ? this.state.warningMsg : ""}
                  </div>
                  <br />
                  <div
                    onClick={() => {
                      if (this.validateInput() === "Sukses") {
                        this.toggleModal();
                      } else {
                        this.toggleWarning(this.validateInput());
                      }
                    }}
                    className="d-flex justify-content-center"
                  >
                    <button className="custom-button custom-button-primary">
                      KIRIM PESAN
                    </button>
                  </div>
                </div>
              </div>
              <WajibDiisi></WajibDiisi>
            </div>
          </Container>
        </div>

        {/* Mobile */}

        <div className="d-block d-lg-none">
          <Container>
            <div className="row justify-content-center">
              <div className="col-12">
                <div className="primary-bold">
                  Judul <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Ketik judul pesan di sini.."
                  value={this.state.inputJudul}
                  onChange={this.onChangeInputJudul}
                />
                <div className="primary-bold">
                  Pesan <span className="text-danger">*</span>
                </div>
                <textarea
                  placeholder="Ketik pesan di sini.."
                  name="pesan"
                  id="pesan"
                  className="form-control"
                  rows="8"
                  onChange={this.onChangeInputPesan}
                  value={this.state.inputPesan}
                />
                <br />
                <div className="text-danger mb-2">
                  {this.state.warning ? this.state.warningMsg : ""}
                </div>
                <WajibDiisi></WajibDiisi>
                <div
                  onClick={() => {
                    if (this.validateInput() === "Sukses") {
                      this.toggleModal();
                    } else {
                      this.toggleWarning(this.validateInput());
                    }
                  }}
                  className="d-flex justify-content-center"
                >
                  <button className="custom-button custom-button-primary w-100">
                    KIRIM PESAN
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>

        <br />
        <br />

        <Container>
          <div className="row">
            <div className="col-md-6">
              <h3 className="text-center">Lokasi</h3>
              <div className="d-flex justify-content-start align-items-center">
                <h3>
                  <FontAwesomeIcon
                    className="text-muted mr-3"
                    icon="map-marker-alt"
                  ></FontAwesomeIcon>
                </h3>
                <div>
                  Pusat Terpadu Transtudio, Jl. Gatot Subroto No.289,
                  Cibangkong, Batununggal, Bandung City, West Java 40273
                </div>
              </div>
            </div>
            <div className="col-md-6">
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

export default withRouter(Hubungi);
