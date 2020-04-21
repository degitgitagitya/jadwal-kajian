import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsonata from "jsonata";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import CardTanyaJawabLanding from "../Components/CardTanyaJawabLanding";
import Footer from "../Components/Footer";

import KAJIAN from "../Data/Kajian";

import "./TanyaJawab.css";
import "./DaftarPenceramah.css";

export default class TanyaJawab extends Component {
  constructor(props) {
    super(props);

    const awal = 0;
    const akhir = 9;

    const URLParams = new URLSearchParams(props.history.location.search);
    let cari = URLParams.get("cari");

    if (cari === null) {
      cari = "";
    }

    let x = jsonata(`tanya^(>waktu)[[${awal}..${akhir}]]`);
    x = x.evaluate(KAJIAN);

    let y = jsonata(`tanya^(>waktu)`);
    y = y.evaluate(KAJIAN);
    let unmodified = y;
    y = y.length;
    y = Math.ceil(y / (akhir + 1));

    let paging = [];

    for (let i = 0; i < y; i++) {
      paging.push({
        no: i + 1,
      });
    }

    this.state = {
      listTanyaJawab: x,
      listTanyaJawabUnmodified: unmodified,
      jumlahPerPage: akhir + 1,
      totalPage: paging,
      batasAwal: awal,
      batasAkhir: akhir,
      halaman: 1,
      sort: ">",
      inputPertanyaan: cari,
    };
  }

  handleFetchPaging = (page) => {
    let temp = page;
    page = this.state.jumlahPerPage * page;
    let a = page - this.state.jumlahPerPage;
    let b = page - 1;

    let x = jsonata(`tanya^(${this.state.sort}waktu)[[${a}..${b}]]`);

    const res = x.evaluate(KAJIAN);

    window.scrollTo(0, 0);

    this.setState({
      batasAwal: a,
      batasAkhir: b,
      halaman: temp,
      listTanyaJawab: res,
    });
  };

  onChangeSort = (event) => {
    let y = this.state.sort;
    let x = jsonata(
      `tanya^(>waktu)[[${this.state.batasAwal}..${this.state.batasAkhir}]]`
    );

    if (event.target.value === "2") {
      x = jsonata(
        `tanya^(<waktu)[[${this.state.batasAwal}..${this.state.batasAkhir}]]`
      );
      y = ">";
    }

    x = x.evaluate(KAJIAN);

    this.setState({
      listTanyaJawab: x,
      sort: y,
    });
  };

  cariPertanyaan = (event) => {
    let x = this.state.listTanyaJawabUnmodified;
    let arrayX = [];

    x.forEach((data) => {
      if (data.pertanyaan.toLowerCase().includes(event.target.value) === true) {
        arrayX.push(data);
      }
    });

    if (event.target.value === "") {
      this.setState({
        inputPertanyaan: event.target.value,
      });
      this.handleFetchPaging(this.state.halaman);
    } else {
      this.setState({
        listTanyaJawab: arrayX,
        inputPertanyaan: event.target.value,
      });
    }
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    let x = this.state.listTanyaJawabUnmodified;
    let arrayX = [];

    x.forEach((data) => {
      if (
        data.pertanyaan.toLowerCase().includes(this.state.inputPertanyaan) ===
        true
      ) {
        arrayX.push(data);
      }
    });

    if (this.state.inputPertanyaan === "") {
      this.setState({
        inputPertanyaan: this.state.inputPertanyaan,
      });
      this.handleFetchPaging(this.state.halaman);
    } else {
      this.setState({
        listTanyaJawab: arrayX,
        inputPertanyaan: this.state.inputPertanyaan,
      });
    }
  }

  render() {
    return (
      <div>
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
              url:
                this.props.history.location.pathname +
                this.props.history.location.search,
              nama: "Tanya Jawab",
            },
          ]}
        ></BreadCumb>

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
                onChange={this.onChangeSort}
              >
                <option disabled value="0">
                  Urutkan Berdasarkan
                </option>
                <option value="1">Terbaru</option>
                <option value="2">Terlama</option>
              </select>

              <input
                type="text"
                className="daftar-penceramah-search px-3"
                placeholder="Cari Pertanyaan.."
                onChange={this.cariPertanyaan}
                value={this.state.inputPertanyaan}
              />
            </div>
          </div>
        </Container>
        <br />
        <Container>
          <div className="d-flex justify-content-between flex-wrap">
            {Array.isArray(this.state.listTanyaJawab) ? (
              this.state.listTanyaJawab.map((data) => {
                return (
                  <div key={data.id} className="tanya-jawab-card-container">
                    <CardTanyaJawabLanding data={data}></CardTanyaJawabLanding>
                  </div>
                );
              })
            ) : (
              <div className="tanya-jawab-card-container">
                <CardTanyaJawabLanding
                  data={this.state.listTanyaJawab}
                ></CardTanyaJawabLanding>
              </div>
            )}
          </div>

          {this.state.listTanyaJawab.length === 0 ? (
            <h3 className="text-center my-5">
              Mohon maaf, tanya jawab tidak ditemukan <br />
              Silahkan untuk mencari pertanyaan lain atau ajukan pertanyaan baru
            </h3>
          ) : (
            <div className="daftar-jadwal-kajian-paging mb-5">
              <div className="row justify-content-center">
                <div className="col-4 text-center d-flex justify-content-around align-items-center">
                  <FontAwesomeIcon
                    icon="chevron-left"
                    onClick={() => {
                      if (this.state.halaman !== 1) {
                        this.handleFetchPaging(this.state.halaman - 1);
                      }
                    }}
                    className={this.state.halaman !== 1 ? "paging-number" : ""}
                  ></FontAwesomeIcon>
                  {this.state.totalPage.map((data) => {
                    return (
                      <div
                        onClick={() => {
                          this.handleFetchPaging(data.no);
                        }}
                        key={data.no}
                        className={
                          data.no === this.state.halaman
                            ? "paging-number paging-number-selected"
                            : "paging-number"
                        }
                      >
                        {data.no}
                      </div>
                    );
                  })}
                  <FontAwesomeIcon
                    icon="chevron-right"
                    onClick={() => {
                      if (this.state.halaman !== this.state.totalPage.length) {
                        this.handleFetchPaging(this.state.halaman + 1);
                      }
                    }}
                    className={
                      this.state.halaman !== this.state.totalPage.length
                        ? "paging-number"
                        : ""
                    }
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
          )}
        </Container>

        <Footer></Footer>
      </div>
    );
  }
}
