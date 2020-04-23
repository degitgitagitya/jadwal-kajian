import React, { Component } from "react";
import { Container } from "react-bootstrap";
import jsonata from "jsonata";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import ListKajian from "../Components/ListKajian";
import Footer from "../Components/Footer";

import KAJIAN from "../Data/Kajian";

import "./DetailPenceramah.css";

export default class DetailPenceramah extends Component {
  constructor(props) {
    super(props);

    const URLParams = new URLSearchParams(props.history.location.search);
    const id = URLParams.get("id");

    let x = jsonata(`penceramah[id=${id}]`);
    x = x.evaluate(KAJIAN);

    let y = jsonata(`kajian[penceramah="${x.nama}"]`);
    y = y.evaluate(KAJIAN);

    let array = [];

    if (Array.isArray(y) === false) {
      array.push(y);
      y = array;
    }

    let jumlahKajian = y.length;

    if (y.length > 5) {
      jumlahKajian = 5;
    }

    this.state = {
      detailPenceramah: x,
      listKajian: y,
      jumlahKajian: jumlahKajian,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { nama, deskripsi, gambar } = this.state.detailPenceramah;
    return (
      <div>
        <Navigation title="DETAIL PENCERAMAH"></Navigation>
        <BreadCumb
          content={[
            {
              id: 1,
              url: "/",
              nama: "Beranda / ",
            },
            {
              id: 2,
              url: "/daftar-penceramah",
              nama: "Penceramah / ",
            },
            {
              id: 3,
              url:
                this.props.history.location.pathname +
                this.props.history.location.search,
              nama: "Detail Penceramah",
            },
          ]}
        ></BreadCumb>
        <Container>
          <div className="detail-penceramah-content">
            <div className="d-flex justify-content-center text-center">
              <div>
                <img
                  src={gambar}
                  alt="penceramah"
                  className="detail-penceramah-image my-2"
                />
                <h3>{nama}</h3>
                <div>Penceramah</div>
                <hr className="bold-hr" />
              </div>
            </div>
            <div className="detail-penceramah-card-deskripsi global-shadow">
              <h3>Deskripsi</h3>
              <p>{deskripsi}</p>
            </div>
          </div>
        </Container>
        <br />
        {/* <ListKajian title="Kajian Dari Penceramah"></ListKajian> */}
        <ListKajian
          title="Kajian Dari Penceramah"
          data={this.state.listKajian}
          jumlahKajian={this.state.jumlahKajian}
          lainnya={`/daftar-jadwal-kajian?penceramah=${nama}`}
        ></ListKajian>
        <br />
        <br />
        <Footer></Footer>
      </div>
    );
  }
}
