import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsonata from "jsonata";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import ListKajian from "../Components/ListKajian";

import KAJIAN from "../Data/Kajian";

import "./DetailJadwalKajian.css";
import Footer from "../Components/Footer";
import { withRouter } from "react-router-dom";

class DetailJadwalKajian extends Component {
  constructor(props) {
    super(props);

    const URLParams = new URLSearchParams(props.history.location.search);
    const id = URLParams.get("id");

    const expresson = jsonata(`kajian[id=${id}]`);
    const result = expresson.evaluate(KAJIAN);

    const x = jsonata(`penceramah[nama="${result.penceramah}"]`);
    const res = x.evaluate(KAJIAN);

    const y = jsonata(`kajian[[0..6]]`);
    const res2 = y.evaluate(KAJIAN);

    this.state = {
      detailKajian: result,
      penceramah: res,
      listKajian: res2,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  fetchContent = () => {
    const URLParams = new URLSearchParams(this.props.history.location.search);
    const id = URLParams.get("id");

    const expresson = jsonata(`kajian[id=${id}]`);
    const result = expresson.evaluate(KAJIAN);

    const x = jsonata(`penceramah[nama="${result.penceramah}"]`);
    const res = x.evaluate(KAJIAN);

    const y = jsonata(`kajian[[0..6]]`);
    const res2 = y.evaluate(KAJIAN);

    this.setState({
      detailKajian: result,
      penceramah: res,
      listKajian: res2,
    });
  };

  onClickPenceramah = (id) => {
    this.props.history.push(`/detail-penceramah?id=${id}`);
  };

  render() {
    const {
      judul,
      deskripsi,
      kota,
      tempat,
      tanggal,
      waktu,
      penceramah,
      gambar,
    } = this.state.detailKajian;
    return (
      <div>
        <Navigation title="DETAIL JAWDAL KAJIAN"></Navigation>
        <BreadCumb
          content={[
            {
              id: 1,
              url: "/",
              nama: "Beranda / ",
            },
            {
              id: 2,
              url: "/daftar-jadwal-kajian",
              nama: "Jadwal Kajian / ",
            },
            {
              id: 3,
              url:
                this.props.history.location.pathname +
                this.props.history.location.search,
              nama: "Detail Kajian",
            },
          ]}
        ></BreadCumb>
        {/* Desktop */}
        <div className="d-none d-lg-block">
          <div>
            <br />
            <Container>
              <div className="row">
                <div className="col-3">
                  <div className="detail-jadwal-kajian-card-primary global-shadow">
                    <img
                      src={gambar}
                      className="detail-jadwal-kajian-card-primary-image"
                      alt="kajian"
                    />

                    <div className="mt-3 primary-bold">Waktu</div>
                    <p>
                      <FontAwesomeIcon
                        icon="clock"
                        className="mr-2"
                      ></FontAwesomeIcon>
                      {"Pukul : "}
                      <strong>
                        {waktu} <br />
                      </strong>
                      <FontAwesomeIcon
                        icon="calendar-alt"
                        className="mr-2"
                      ></FontAwesomeIcon>
                      {"Tanggal : "}
                      <strong>
                        {tanggal} <br />
                      </strong>
                    </p>

                    <div className="mt-3 primary-bold">Tempat</div>
                    <p>
                      <FontAwesomeIcon
                        icon="map-marker-alt"
                        className="mr-2"
                      ></FontAwesomeIcon>
                      {tempat}, {kota}
                    </p>
                  </div>
                </div>
                <div className="col-9">
                  <h2>{judul}</h2>
                  <p>{deskripsi}</p>

                  <div
                    onClick={() => {
                      this.onClickPenceramah(this.state.penceramah.id);
                    }}
                    className="detail-jadwal-kajian-card-secondary global-shadow"
                  >
                    <div className="row align-items-center">
                      <div className="col-4 text-center">
                        <img
                          src={this.state.penceramah.gambar}
                          className="detail-jadwal-kajian-penceramah-image-container"
                          alt="penceramah"
                        />

                        <h3 className="mt-2">{penceramah}</h3>
                        <p>Penceramah</p>
                      </div>
                      <div className="col-8">
                        <FontAwesomeIcon icon="quote-left"></FontAwesomeIcon>
                        <div>
                          {this.state.penceramah.deskripsi.substring(0, 150)}{" "}
                          ...
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
            <ListKajian
              fetchContent={this.fetchContent}
              title="Kajian Lainnya"
              data={this.state.listKajian}
              jumlahKajian={5}
              lainnya={"/daftar-jadwal-kajian"}
            ></ListKajian>
          </div>
        </div>
        {/* Mobile */}
        <div className="d-block d-lg-none">
          <Container>
            <h2 className="mb-3">{judul}</h2>
            <hr />
            <div>
              <div
                style={{ backgroundColor: "white", padding: "2rem" }}
                className="global-shadow"
              >
                <div className="row">
                  <div className="col-8">
                    <div>
                      <FontAwesomeIcon
                        icon="clock"
                        className="mr-2"
                      ></FontAwesomeIcon>
                      Waktu: {waktu}
                    </div>
                    <div>
                      <FontAwesomeIcon
                        icon="map-marker"
                        className="mr-2"
                      ></FontAwesomeIcon>
                      Tempat: {tempat}, {kota}
                    </div>
                    <div
                      onClick={() => {
                        this.onClickPenceramah(this.state.penceramah.id);
                      }}
                    >
                      <FontAwesomeIcon
                        icon="user"
                        className="mr-2"
                      ></FontAwesomeIcon>
                      Penceramah: {penceramah}
                    </div>
                  </div>
                  <div className="col-4">
                    <img
                      onClick={() => {
                        this.onClickPenceramah(this.state.penceramah.id);
                      }}
                      src={this.state.penceramah.gambar}
                      className="mobile-detail-jadwal-kajian-penceramah-image-container"
                      alt="penceramah"
                    />
                  </div>
                </div>
              </div>
              <hr />
              <div
                style={{ backgroundColor: "white", padding: "2rem" }}
                className="global-shadow"
              >
                <h3>Deskripsi</h3>
                <p>{deskripsi}</p>
              </div>

              <hr />
              <ListKajian
                fetchContent={this.fetchContent}
                title="Kajian Lainnya"
                data={this.state.listKajian}
                jumlahKajian={5}
                lainnya={"/daftar-jadwal-kajian"}
              ></ListKajian>
            </div>

            <br />
            <br />
            <br />
          </Container>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}

export default withRouter(DetailJadwalKajian);
