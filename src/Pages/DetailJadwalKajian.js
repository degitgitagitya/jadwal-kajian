import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import ListKajian from "../Components/ListKajian";

import Kajian from "../Assets/kajian.jpg";
import Penceramah from "../Assets/penceramah1.jpg";

import "./DetailJadwalKajian.css";

export default class DetailJadwalKajian extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Jadwal Kajian / Detail Kajian"></BreadCumb>
        <br />
        <Container>
          <div className="row">
            <div className="col-3">
              <div className="detail-jadwal-kajian-card-primary global-shadow">
                <img
                  src={Kajian}
                  className="detail-jadwal-kajian-card-primary-image"
                  alt="kajian"
                />

                <div className="mt-3 primary-bold">Waktu</div>
                <p className="secondary-text">
                  Occaecat id ad tempor dolor qui.
                </p>

                <div className="mt-3 primary-bold">Tempat</div>
                <p className="secondary-text">
                  Occaecat id ad tempor dolor qui.
                </p>
              </div>
            </div>
            <div className="col-9">
              <h3>Sirah Nabawiyah</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur ullam esse deserunt delectus enim ut dicta natus
                quibusdam, suscipit molestiae iure, quam quae! Id iusto rerum
                repudiandae velit, eligendi molestiae?
              </p>

              <div className="detail-jadwal-kajian-card-secondary global-shadow">
                <div className="d-flex justify-content-around align-items-center">
                  <div className="detail-jadwal-kajian-penceramah-container text-center">
                    <img
                      src={Penceramah}
                      className="detail-jadwal-kajian-penceramah-image-container"
                      alt=""
                    />
                    <h3>Nama Penceramah</h3>
                    <p>Culpa velit magna.</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon>
                    <div>
                      Duis ad ex sint do magna tempor excepteur reprehenderit
                      non irure.
                    </div>
                    <div className="d-flex justify-content-end">
                      <FontAwesomeIcon icon="quote-right"></FontAwesomeIcon>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <br />
        <ListKajian title="Kajian Terkait"></ListKajian>
      </div>
    );
  }
}
