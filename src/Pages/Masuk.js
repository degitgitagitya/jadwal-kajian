import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { AuthContext } from "../Contexts/Authentication";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";
import WajibDiisi from "../Components/WajibDiisi";

import "./Masuk.css";

export default class Masuk extends Component {
  static contextType = AuthContext;

  state = {
    inputEmail: "",
    inputPassword: "",
    showModal: false,
    warning: false,
    warningMsg: "",
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

  auth = () => {
    if (
      this.state.inputPassword === this.context.data.password &&
      this.state.inputEmail === this.context.data.email
    ) {
      this.redirectTo("/profil");
    } else {
      this.toggleWarning("Email / Password Salah");
    }
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
    if (this.state.inputEmail === "") {
      return "Mohon isi Email";
    } else if (this.state.inputPassword === "") {
      return "Mohon isi Kata Sandi";
    } else {
      return "Sukses";
    }
  };

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Masuk"></BreadCumb>
        <Container className="mb-5">
          <h2 className="text-center mb-4">Masuk</h2>
          <div className="card-berlangganan">
            <div className="row justify-content-center">
              <div className="col-4">
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
                    MASUK
                  </button>
                </div>

                <div className="d-flex justify-content-center mt-2">
                  <div>Belum memiliki akun?</div>
                </div>

                <div className="d-flex justify-content-center mt-2">
                  <button
                    onClick={() => {
                      this.props.history.push("/daftar");
                    }}
                    className="custom-button-outline custom-button-outline-primary"
                  >
                    DAFTAR
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
