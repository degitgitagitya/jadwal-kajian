import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactModal from "react-modal";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";
import WajibDiisi from "../Components/WajibDiisi";

class AjukanPertanyaan extends Component {
  state = {
    inputJudul: "",
    inputPertanyaan: "",
    showModal: false,
    warning: false,
    warningMsg: "",
  };

  onChangeJudul = (event) => {
    this.setState({
      inputJudul: event.target.value,
    });
  };

  onChangePertanyaan = (event) => {
    this.setState({
      inputPertanyaan: event.target.value,
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
    } else if (this.state.inputPertanyaan === "") {
      return "Mohon isi Pertanyaan";
    } else {
      return "Sukses";
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.showModal}
          className="kelas-modal"
          overlayClassName="kelas-modal-overlay"
        >
          <div className="text-center">
            <h3>Sukses Mengajukan Pertanyaan</h3>
            <h1>
              <FontAwesomeIcon icon="check-circle"></FontAwesomeIcon>
            </h1>
            <p>
              Terimakasih telah mengirim saran untuk kami <br />
              Kami akan berusaha untuk meningkatkan kualitas kami
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
              url: "/tanya-jawab",
              nama: "Tanya Jawab / ",
            },
            {
              id: 3,
              url: "/ajukan-pertanyaan",
              nama: "Ajukan Pertanyaan",
            },
          ]}
        ></BreadCumb>
        <Container className="mb-5">
          <h2 className="text-center mb-4">Ajukan Pertanyaan</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="primary-bold">
                  Judul <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Judul"
                  value={this.state.inputJudul}
                  onChange={this.onChangeJudul}
                />
                <div className="primary-bold">
                  Pertanyaan <span className="text-danger">*</span>
                </div>
                <textarea
                  placeholder="Ketik pertanyaan di sini.."
                  name="pertanyaan"
                  id="pertanyaan"
                  className="form-control"
                  rows="8"
                  value={this.state.inputPertanyaan}
                  onChange={this.onChangePertanyaan}
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
                    KIRIM PERTANYAAN
                  </button>
                </div>
              </div>
            </div>
            <WajibDiisi></WajibDiisi>
          </div>
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(AjukanPertanyaan);
