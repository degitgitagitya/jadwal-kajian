import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../Contexts/Authentication";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";
import WajibDiisi from "../Components/WajibDiisi";

class Daftar extends Component {
  static contextType = AuthContext;

  state = {
    inputNama: "",
    inputEmail: "",
    inputPassword: "",
    inputConfirmPassword: "",
    showModal: false,
    warning: false,
    warningMsg: "",
  };

  onChangeNama = (event) => {
    this.setState({
      inputNama: event.target.value,
    });
  };

  onChangeEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    });
  };

  onChangePassword = (event) => {
    this.setState({
      inputPassword: event.target.value,
    });
  };

  onChangeConfirmPassword = (event) => {
    this.setState({
      inputConfirmPassword: event.target.value,
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
    if (this.state.inputNama === "") {
      return "Mohon isi Nama";
    } else if (this.state.inputEmail === "") {
      return "Mohon isi Email";
    } else if (this.state.inputPassword === "") {
      return "Mohon isi Kata Sandi";
    } else if (this.state.inputConfirmPassword === "") {
      return "Mohon isi Konfirmasi Kata Sandi";
    } else {
      return "Sukses";
    }
  };

  auth = () => {
    let data = {
      nama: this.state.inputNama,
      email: this.state.inputEmail,
      password: this.state.inputPassword,
    };
    this.context.changeAuthToTrue(data);
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
            <h3>Sukses Untuk Mendaftarkan Akun</h3>
            <h1>
              <FontAwesomeIcon icon="check-circle"></FontAwesomeIcon>
            </h1>
            <p>Terimakasih telah daftar akun</p>

            <div className="d-flex justify-content-center">
              <button
                className="custom-button-primary custom-button"
                onClick={() => {
                  this.redirectTo("/masuk");
                }}
              >
                Login
              </button>
            </div>
          </div>
        </ReactModal>
        <Navigation></Navigation>
        <BreadCumb content="Home / Daftar"></BreadCumb>
        <Container className="mb-5">
          <h2 className="text-center mb-4">Daftar</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
                <div className="primary-bold">
                  Nama <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Nama"
                  value={this.state.inputNama}
                  onChange={this.onChangeNama}
                />
                <div className="primary-bold">
                  Email <span className="text-danger">*</span>
                </div>
                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Email"
                  value={this.state.inputEmail}
                  onChange={this.onChangeEmail}
                />
                <div className="primary-bold">
                  Kata Sandi <span className="text-danger">*</span>
                </div>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Kata Sandi"
                  value={this.state.inputPassword}
                  onChange={this.onChangePassword}
                />
                <div className="primary-bold">
                  Konfirmasi Kata Sandi <span className="text-danger">*</span>
                </div>
                <input
                  type="password"
                  className="form-control mb-3"
                  placeholder="Konfirmasi Kata Sandi"
                  value={this.state.inputConfirmPassword}
                  onChange={this.onChangeConfirmPassword}
                />
                <div className="text-danger mb-2">
                  {this.state.warning ? this.state.warningMsg : ""}
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    onClick={() => {
                      if (this.validateInput() === "Sukses") {
                        this.auth();
                        this.toggleModal();
                      } else {
                        this.toggleWarning(this.validateInput());
                      }
                    }}
                    className="custom-button custom-button-primary"
                  >
                    DAFTAR
                  </button>
                </div>

                <div className="d-flex justify-content-center mt-2">
                  <div>Sudah memiliki akun?</div>
                </div>

                <div className="d-flex justify-content-center mt-2">
                  <button
                    onClick={() => {
                      this.props.history.push("/masuk");
                    }}
                    className="custom-button-outline custom-button-outline-primary"
                  >
                    MASUK
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

export default withRouter(Daftar);
