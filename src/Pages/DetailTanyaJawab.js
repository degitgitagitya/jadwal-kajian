import React, { Component } from "react";
import { Container } from "react-bootstrap";
import jsonata from "jsonata";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import Footer from "../Components/Footer";
import KAJIAN from "../Data/Kajian";

import "./DetailTanyaJawab.css";

export default class DetailTanyaJawab extends Component {
  constructor(props) {
    super(props);

    const URLParams = new URLSearchParams(this.props.history.location.search);
    const id = URLParams.get("id");

    let x = jsonata(`tanya[id=${id}]`);
    x = x.evaluate(KAJIAN);

    let y = jsonata(`penceramah[nama="${x.penceramah}"]`);
    y = y.evaluate(KAJIAN);

    this.state = {
      tanyaJawab: x,
      penceramah: y,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const {
      pertanyaan,
      jawaban,
      penceramah,
      gambar,
      waktu,
    } = this.state.tanyaJawab;
    return (
      <div>
        <Navigation title="DETAIL TANYA JAWAB"></Navigation>
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
              url:
                this.props.history.location.pathname +
                this.props.history.location.search,
              nama: "Detail Tanya Jawab",
            },
          ]}
        ></BreadCumb>
        <Container>
          <h2 className="text-center">{pertanyaan}</h2>
          <div className="row justify-content-center mb-3">
            <div className="col-md-4 text-center">
              <img
                src={gambar}
                className="detail-tanya-jawab-image-header"
                alt="tanya-jawab"
              />
            </div>
          </div>
          <div className="detail-tanya-jawab-container">
            <p>{jawaban}</p>
            <div className="d-flex justify-content-end">
              <div className="d-flex">
                <img
                  src={this.state.penceramah.gambar}
                  className="detail-tanya-jawab-penceramah-image"
                  alt=""
                />
              </div>
              <div>
                <span className="detail-tanya-jawab-penceramah-nama">
                  {penceramah}
                </span>
                <br />
                {waktu}
              </div>
            </div>
          </div>
        </Container>

        <br />
        <br />

        <Footer></Footer>
      </div>
    );
  }
}
