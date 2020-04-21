import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";
import WajibDiisi from "../Components/WajibDiisi";

import "./KirimJadwal.css";
import "./Berlangganan.css";

class KirimJadwal extends Component {
  state = {
    inputNamaPengirim: "",
    inputNoTelfonPengirim: "",
    inputNamaPenceramah: "",
    inputNoPenceramah: "",
    inputLokasi: "",
    inputWaktu: "",
    inputInformasiLainnya: "",
    showModal: false,
    warning: false,
    warningMsg: "",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onChangeNamaPengirim = (event) => {
    this.setState({
      inputNamaPengirim: event.target.value,
    });
  };

  onChangeNoTelfonPengirim = (event) => {
    this.setState({
      inputNoTelfonPengirim: event.target.value,
    });
  };

  onChangeNamaPenceramah = (event) => {
    this.setState({
      inputNamaPenceramah: event.target.value,
    });
  };

  onChangeNoPenceramah = (event) => {
    this.setState({
      inputNoPenceramah: event.target.value,
    });
  };

  onChangeLokasi = (event) => {
    this.setState({
      inputLokasi: event.target.value,
    });
  };

  onChangeWaktu = (event) => {
    this.setState({
      inputWaktu: event.target.value,
    });
  };

  onChangeInformasiLainnya = (event) => {
    this.setState({
      inputInformasiLainnya: event.target.value,
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
    if (this.state.inputNamaPengirim === "") {
      return "Mohon isi Nama Pengirim";
    } else if (this.state.inputNoTelfonPengirim === "") {
      return "Mohon isi Nomor Telepon Pengirim";
    } else if (this.state.inputNamaPenceramah === "") {
      return "Mohon isi Nama Penceramah";
    } else if (this.state.inputNoPenceramah === "") {
      return "Mohon isi Nomor Telepon Pihak Penceramah";
    } else if (this.state.inputLokasi === "") {
      return "Mohon isi Lokasi Kajian";
    } else if (this.state.inputWaktu === "") {
      return "Mohon isi Waktu Kajian";
    } else {
      return "Sukses";
    }
  };

  render() {
    console.log(this.state.inputWaktu);
    return (
      <div>
        <ReactModal
          isOpen={this.state.showModal}
          className="kelas-modal"
          overlayClassName="kelas-modal-overlay"
        >
          <div className="text-center">
            <h3>Sukses Mengirim Jadwal</h3>
            <h1>
              <FontAwesomeIcon icon="check-circle"></FontAwesomeIcon>
            </h1>
            <p>
              Terimakasih telah mengirim jadwal kajian <br />
              Kami akan melakukan validasi untuk jadwal tersebut
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
              url: "/hubungi",
              nama: "Hubungi / ",
            },
            {
              id: 3,
              url:
                this.props.history.location.pathname +
                this.props.history.location.search,
              nama: "Kirim Jadwal",
            },
          ]}
        ></BreadCumb>

        <Container className="mb-5">
          <h2 className="text-center mb-4">Kirim Jadwal</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="primary-bold">
                  Nama Pengirim <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nama Pengirim"
                  value={this.state.inputNamaPengirim}
                  onChange={this.onChangeNamaPengirim}
                />

                <div className="primary-bold">
                  Nama Penceramah <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nama Penceramah"
                  value={this.state.inputNamaPenceramah}
                  onChange={this.onChangeNamaPenceramah}
                />

                <div className="primary-bold">
                  Lokasi <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Lokasi"
                  value={this.state.inputLokasi}
                  onChange={this.onChangeLokasi}
                />
              </div>
              <div className="col-4">
                <div className="primary-bold">
                  Nomor Telepon Pengirim <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nomor Telepon Pengirim"
                  value={this.state.inputNoTelfonPengirim}
                  onChange={this.onChangeNoTelfonPengirim}
                />

                <div className="primary-bold">
                  Nomor Telepon Pihak Penceramah{" "}
                  <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nomor Telepon Pihak Penceramah"
                  value={this.state.inputNoPenceramah}
                  onChange={this.onChangeNoPenceramah}
                />

                <div className="primary-bold">
                  Waktu <span className="text-danger">*</span>
                </div>
                <input
                  type="date"
                  className="form-control mb-3"
                  placeholder="Waktu"
                  value={this.state.inputWaktu}
                  onChange={this.onChangeWaktu}
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-8">
                <div className="primary-bold">Informasi Lainnya </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Informasi Lainnya"
                  value={this.state.inputInformasiLainnya}
                  onChange={this.onChangeInformasiLainnya}
                />
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-8">
                <div className="text-danger mb-2">
                  {this.state.warning ? this.state.warningMsg : ""}
                </div>
              </div>
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
                KIRIM JADWAL
              </button>
            </div>
            <WajibDiisi></WajibDiisi>
          </div>
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(KirimJadwal);
