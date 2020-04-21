import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsonata from "jsonata";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import CardPenceramah from "../Components/CardPenceramah";
import Footer from "../Components/Footer";

import KAJIAN from "../Data/Kajian";

import "./DaftarPenceramah.css";

export default class DaftarPenceramah extends Component {
  constructor(props) {
    super(props);

    const awal = 0;
    const akhir = 9;

    let x = jsonata("penceramah^(<nama)[[" + awal + ".." + akhir + "]]");
    x = x.evaluate(KAJIAN);

    let y = jsonata("penceramah^(<nama)");
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
      listPenceramah: x,
      listPenceramahUnmodified: unmodified,
      jumlahPerPage: akhir + 1,
      totalPage: paging,
      batasAwal: awal,
      batasAkhir: akhir,
      halaman: 1,
      sort: "<",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleFetchPaging = (page) => {
    let temp = page;
    page = this.state.jumlahPerPage * page;
    let a = page - this.state.jumlahPerPage;
    let b = page - 1;

    let x = jsonata(
      "penceramah^(" + this.state.sort + "nama)[[" + a + ".." + b + "]]"
    );

    const res = x.evaluate(KAJIAN);

    window.scrollTo(0, 0);

    this.setState({
      batasAwal: a,
      batasAkhir: b,
      halaman: temp,
      listPenceramah: res,
    });
  };

  onChangeSort = (event) => {
    let y = this.state.sort;
    let x = jsonata(
      "penceramah^(<nama)[[" +
        this.state.batasAwal +
        ".." +
        this.state.batasAkhir +
        "]]"
    );

    if (event.target.value === "2") {
      x = jsonata(
        "penceramah^(>nama)[[" +
          this.state.batasAwal +
          ".." +
          this.state.batasAkhir +
          "]]"
      );
      y = ">";
    }

    x = x.evaluate(KAJIAN);

    this.setState({
      listPenceramah: x,
      sort: y,
    });
  };

  cariPenceramah = (event) => {
    let x = this.state.listPenceramahUnmodified;
    let arrayX = [];

    x.forEach((data) => {
      if (data.nama.toLowerCase().includes(event.target.value) === true) {
        arrayX.push(data);
      }
    });

    if (event.target.value === "") {
      this.handleFetchPaging(this.state.halaman);
    } else {
      this.setState({
        listPenceramah: arrayX,
      });
    }
  };

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
              url: "/daftar-penceramah",
              nama: "Daftar Penceramah",
            },
          ]}
        ></BreadCumb>

        <Container>
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
              <option value="1">A - Z</option>
              <option value="2">Z - A</option>
            </select>

            <input
              type="text"
              className="daftar-penceramah-search px-3"
              placeholder="Cari penceramah.."
              onChange={this.cariPenceramah}
            />
          </div>
        </Container>

        <br />

        <Container>
          {Array.isArray(this.state.listPenceramah) ? (
            this.state.listPenceramah.map((data) => {
              return (
                <CardPenceramah key={data.id} data={data}></CardPenceramah>
              );
            })
          ) : (
            <CardPenceramah data={this.state.listPenceramah}></CardPenceramah>
          )}

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
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}
