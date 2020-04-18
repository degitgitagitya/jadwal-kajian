import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import ListKajian from "../Components/ListKajian";
import Footer from "../Components/Footer";

import Penceramah from "../Assets/penceramah1.jpg";

import "./DetailPenceramah.css";

export default class DetailPenceramah extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Home / Daftar Penceramah / Detail Penceramah"></BreadCumb>
        <Container>
          <div className="detail-penceramah-content">
            <div className="d-flex justify-content-center text-center">
              <div>
                <img
                  src={Penceramah}
                  alt="penceramah"
                  className="detail-penceramah-image my-2"
                />
                <h3>Nama Penceramah</h3>
                <div>Lorem ipsum</div>
                <hr className="bold-hr" />
              </div>
            </div>
            <div className="detail-penceramah-card-deskripsi global-shadow">
              <h3>Deskripsi</h3>
              <p>
                Fugiat ipsum veniam nostrud eu do pariatur cupidatat qui cillum
                ex reprehenderit tempor occaecat tempor. Ipsum qui aliqua et
                consequat id commodo dolore elit cupidatat id sint. Amet aute
                excepteur incididunt nulla elit elit commodo. Sit magna cillum
                non in veniam eiusmod sint sunt. Ullamco duis est culpa ullamco
                nostrud dolore sunt incididunt commodo mollit in consequat do
              </p>
            </div>
          </div>
        </Container>
        <br />
        <ListKajian title="Kajian Dari Penceramah"></ListKajian>
        <br />
        <br />
        <Footer></Footer>
      </div>
    );
  }
}
