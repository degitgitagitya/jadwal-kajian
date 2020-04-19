import React, { Component } from "react";
import { Container } from "react-bootstrap";
import jsonata from "jsonata";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import CardKajian from "../Components/CardKajian";
import Footer from "../Components/Footer";

import KAJIAN from "../Data/Kajian";

import "./DaftarJadwalKajian.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DaftarJadwalKajian extends Component {
  constructor(props) {
    super(props);

    const awal = 0;
    const akhir = 4;

    const x = jsonata(
      "kajian^(>tanggal){`tanggal`: $.{'id': id, 'gambar': gambar, 'judul': judul, 'deskripsi': deskripsi, 'kota': kota}}[[" +
        awal +
        ".." +
        akhir +
        "]]"
    );
    const res = x.evaluate(KAJIAN);

    let y = jsonata("kajian");
    y = y.evaluate(KAJIAN);
    y = y.length;
    y = Math.ceil(y / (akhir + 1));

    let paging = [];

    for (let i = 0; i < y; i++) {
      paging.push({
        no: i + 1,
      });
    }

    this.state = {
      jumlahPerPage: akhir + 1,
      listJadwalKajian: res,
      totalPage: paging,
      batasAwal: awal,
      batasAkhir: akhir,
      halaman: 1,
    };
  }

  handleFetchPaging = (page) => {
    let temp = page;
    page = this.state.jumlahPerPage * page;
    let a = page - this.state.jumlahPerPage;
    let b = page;

    const x = jsonata(
      "kajian^(>tanggal){`tanggal`: $.{'id': id, 'gambar': gambar, 'judul': judul, 'deskripsi': deskripsi, 'kota': kota}}[[" +
        a +
        ".." +
        b +
        "]]"
    );
    const res = x.evaluate(KAJIAN);

    this.setState({
      batasAwal: a,
      batasAkhir: b,
      halaman: temp,
      listJadwalKajian: res,
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content={"Home / Jadwal Kajian"}></BreadCumb>
        <Container>
          <div className="row">
            <div className="width-30">
              <div className="daftar-jadwal-kajian-filter text-white">
                <div>Pilih Penceramah</div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Ustaz A</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Ustaz A</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Ustaz A</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Ustaz A</div>
                  </div>
                  <button className="form-control mt-2 custom-button-outline custom-button-outline-white">
                    SELENGKAPNYA
                  </button>
                </div>
                <hr className="line-filter" />

                <div>Pilih Waktu</div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Hari ini</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Besok</div>
                  </div>
                  <div>
                    atau pilih jangka waktu <br /> Dari:
                  </div>
                  <input type="date" className="filter-rounded-search" />
                  Sampai:
                  <input type="date" className="filter-rounded-search" />
                </div>
                <hr className="line-filter" />

                <div>Pilih Lokasi</div>
                <div className="d-flex flex-column">
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Bandung</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Jakarta</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Bekasi</div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="filter-check-box mr-2"></div>
                    <div>Depok</div>
                  </div>
                  <button className="form-control mt-2 custom-button-outline custom-button-outline-white">
                    SELENGKAPNYA
                  </button>
                </div>
                <hr className="line-filter" />
              </div>
            </div>
            <div className="width-70">
              <div className="d-flex justify-content-between">
                <div>
                  <h3>Hasil Pencarian</h3>
                  <p>Pencarian dengan kata kunci</p>
                </div>
                <select
                  name="urutkan"
                  className="form-control-sm daftar-jawal-kajian-sort"
                  id="urutkan"
                  defaultValue="0"
                >
                  <option disabled value="0">
                    Urutkan Berdasarkan
                  </option>
                  <option value="1">Terbaru</option>
                  <option value="2">Terlama</option>
                </select>
              </div>

              {Object.keys(this.state.listJadwalKajian).map((key, index) => {
                const x = new Date(key);
                let y = `${x.getDate()} ${x.toLocaleString("default", {
                  month: "long",
                })} ${x.getFullYear()}`;
                return (
                  <div key={index}>
                    <h3>{y}</h3>
                    <hr className="semi-bold-hr" />
                    <div className="d-flex flex-wrap">
                      {Array.isArray(this.state.listJadwalKajian[key]) ? (
                        this.state.listJadwalKajian[key].map((data) => {
                          return (
                            <div key={data.id} className="mb-4 mr-4">
                              <CardKajian data={data}></CardKajian>
                            </div>
                          );
                        })
                      ) : (
                        <div className="mb-4 mr-4">
                          <CardKajian
                            data={this.state.listJadwalKajian[key]}
                          ></CardKajian>
                        </div>
                      )}
                      {}
                    </div>
                  </div>
                );
              })}

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
                      className={
                        this.state.halaman !== 1 ? "paging-number" : ""
                      }
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
                        if (
                          this.state.halaman !== this.state.totalPage.length
                        ) {
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
            </div>
          </div>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}
