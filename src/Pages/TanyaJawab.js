import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import CardTanyaJawabLanding from "../Components/CardTanyaJawabLanding";
import Footer from "../Components/Footer";

import "./TanyaJawab.css";
import "./DaftarPenceramah.css";

export default class TanyaJawab extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Tanya Jawab"></BreadCumb>

        <br />

        <Container>
          <div className="d-flex justify-content-between">
            <button
              onClick={() => {
                this.props.history.push("/ajukan-pertanyaan");
              }}
              className="custom-button custom-button-primary"
            >
              AJUKAN PERTANYAAN
            </button>
            <div className="d-flex justify-content-end">
              <select
                name="urutkan"
                className="form-control-sm daftar-jawal-kajian-sort mr-3"
                id="urutkan"
                defaultValue="0"
              >
                <option disabled value="0">
                  Urutkan Berdasarkan
                </option>
                <option value="1">A - Z</option>
                <option value="2">Z - A</option>
                <option value="3">Terbaru</option>
                <option value="4">Terlama</option>
              </select>

              <input
                type="text"
                className="daftar-penceramah-search px-3"
                placeholder="Cari Pertanyaan.."
              />
              <button className="daftar-penceramah-search-button">
                <FontAwesomeIcon
                  className="text-white"
                  icon="search"
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </Container>
        <br />
        <Container>
          <div className="d-flex justify-content-between flex-wrap">
            <div className="tanya-jawab-card-container">
              <CardTanyaJawabLanding></CardTanyaJawabLanding>
            </div>
            <div className="tanya-jawab-card-container">
              <CardTanyaJawabLanding></CardTanyaJawabLanding>
            </div>
            <div className="tanya-jawab-card-container">
              <CardTanyaJawabLanding></CardTanyaJawabLanding>
            </div>
            <div className="tanya-jawab-card-container">
              <CardTanyaJawabLanding></CardTanyaJawabLanding>
            </div>
            <div className="tanya-jawab-card-container">
              <CardTanyaJawabLanding></CardTanyaJawabLanding>
            </div>
            <div className="tanya-jawab-card-container">
              <CardTanyaJawabLanding></CardTanyaJawabLanding>
            </div>
            <div className="tanya-jawab-card-container">
              <CardTanyaJawabLanding></CardTanyaJawabLanding>
            </div>
          </div>

          <div className="daftar-jadwal-kajian-paging mb-5">
            <div className="row justify-content-center">
              <div className="col-4 text-center d-flex justify-content-around align-items-center">
                <i className="fas fa-chevron-left"></i>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <i className="fas fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}
