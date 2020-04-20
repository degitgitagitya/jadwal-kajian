import React, { Component } from "react";
import { Container } from "react-bootstrap";
import jsonata from "jsonata";
import ReactModal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import CardKajian from "../Components/CardKajian";
import Footer from "../Components/Footer";

import KAJIAN from "../Data/Kajian";

import "./DaftarJadwalKajian.css";

export default class DaftarJadwalKajian extends Component {
  constructor(props) {
    super(props);

    const awal = 0;
    const akhir = 9;

    const x = jsonata(
      "kajian^(>tanggal){`tanggal`: $.{'id': id, 'gambar': gambar, 'judul': judul, 'deskripsi': deskripsi, 'kota': kota, 'penceramah' : penceramah}}[[" +
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

    let a = jsonata(`penceramah^(<nama)`);
    a = a.evaluate(KAJIAN);

    let arrayA = [];

    a.forEach((data) => {
      let temp = {
        id: data.id,
        nama: data.nama,
        status: -1,
      };

      arrayA.push(temp);
    });

    this.state = {
      listJadwalKajian: res,
      jumlahPerPage: akhir + 1,
      totalPage: paging,
      batasAwal: awal,
      batasAkhir: akhir,
      halaman: 1,
      sort: ">",
      penceramahSelected: [],
      listPenceramah: arrayA,
      penceramahSelectedString: "",
      showModal: false,
      listPenceramahFilter: [],
    };
  }

  handleOpenModal = () => {
    this.setState({
      showModal: true,
      listPenceramahFilter: this.state.listPenceramah,
    });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleFetchPaging = (page) => {
    let temp = page;
    page = this.state.jumlahPerPage * page;
    let a = page - this.state.jumlahPerPage;
    let b = page - 1;

    const x = jsonata(
      "kajian[" +
        this.state.penceramahSelectedString +
        "]^(" +
        this.state.sort +
        "tanggal){`tanggal`: $.{'id': id, 'gambar': gambar, 'judul': judul, 'deskripsi': deskripsi, 'kota': kota, 'penceramah' : penceramah}}[[" +
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

  onChangeSort = (event) => {
    let y = this.state.sort;
    let x = jsonata(
      "kajian[" +
        this.state.penceramahSelectedString +
        "]^(>tanggal){`tanggal`: $.{'id': id, 'gambar': gambar, 'judul': judul, 'deskripsi': deskripsi, 'kota': kota, 'penceramah' : penceramah}}[[" +
        this.state.batasAwal +
        ".." +
        this.state.batasAkhir +
        "]]"
    );

    if (event.target.value === "2") {
      x = jsonata(
        "kajian[" +
          this.state.penceramahSelectedString +
          "]^(<tanggal){`tanggal`: $.{'id': id, 'gambar': gambar, 'judul': judul, 'deskripsi': deskripsi, 'kota': kota, 'penceramah' : penceramah}}[[" +
          this.state.batasAwal +
          ".." +
          this.state.batasAkhir +
          "]]"
      );
      y = "<";
    }

    x = x.evaluate(KAJIAN);

    this.setState({
      listJadwalKajian: x,
      sort: y,
    });
  };

  handleClickFilterPenceramah = (id) => {
    let x = this.state.listPenceramah;
    let target;

    x.forEach((data) => {
      if (data.id === id) {
        target = data;
      }
    });

    target.status = target.status * -1;

    let y = this.state.penceramahSelected;

    if (target.status === 1) {
      y.push(target.nama);
    } else {
      let z = [];

      y.forEach((data) => {
        if (data !== target.nama) {
          z.push(data);
        }
      });

      y = z;
    }

    let stringY = this.arrayToString(y);

    let query = jsonata(
      "kajian[" +
        stringY +
        "]^(" +
        this.state.sort +
        "tanggal){`tanggal`: $.{'id': id, 'gambar': gambar, 'judul': judul, 'deskripsi': deskripsi, 'kota': kota, 'penceramah' : penceramah}}[[" +
        this.state.batasAwal +
        ".." +
        this.state.batasAkhir +
        "]]"
    );
    query = query.evaluate(KAJIAN);

    this.setState({
      listPenceramah: x,
      penceramahSelected: y,
      penceramahSelectedString: stringY,
      listJadwalKajian: query,
    });
  };

  arrayToString = (arr) => {
    let string = "";

    arr.forEach((data, index) => {
      if (index !== 0) {
        string = string + " or [penceramah='" + data + "']";
      } else {
        string = string + "[penceramah='" + data + "']";
      }
    });

    return string;
  };

  handleSearchPenceramah = (event) => {
    let x = this.state.listPenceramah;
    let newX = [];

    x.forEach((data) => {
      if (data.nama.toLowerCase().includes(event.target.value) === true) {
        newX.push(data);
      }
    });

    this.setState({
      listPenceramahFilter: newX,
    });
  };

  render() {
    return (
      <div>
        <ReactModal
          isOpen={this.state.showModal}
          className="kelas-modal"
          overlayClassName="kelas-modal-overlay"
        >
          <div className="text-center">
            <h3>Pilih Penceramah</h3>
            <input
              type="text"
              className="global-rounded-search-primary py-2"
              placeholder="Cari nama penceramah di sini.."
              onChange={this.handleSearchPenceramah}
            />
            <hr className="semi-bold-hr mx-5" />
          </div>
          <div className="d-flex justify-content-start flex-wrap">
            {this.state.listPenceramahFilter.map((data) => {
              return (
                <div
                  onClick={() => {
                    this.handleClickFilterPenceramah(data.id);
                  }}
                  key={data.id}
                  className="filter-custom-width d-flex list-filter"
                >
                  <div
                    className={
                      data.status === 1
                        ? "filter-check-box-primary filter-check-box-primary-selected mr-2"
                        : "filter-check-box-primary mr-2"
                    }
                  ></div>
                  <div>{data.nama}</div>
                </div>
              );
            })}
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="custom-button-primary custom-button"
              onClick={this.handleCloseModal}
            >
              Tutup
            </button>
          </div>
        </ReactModal>

        <Navigation></Navigation>
        <BreadCumb content={"Home / Jadwal Kajian"}></BreadCumb>
        <Container>
          <div className="row">
            <div className="width-30">
              <div className="daftar-jadwal-kajian-filter text-white">
                <div>Pilih Penceramah</div>
                <div className="d-flex flex-column">
                  {this.state.listPenceramah.slice(0, 4).map((data) => {
                    return (
                      <div
                        onClick={() => {
                          this.handleClickFilterPenceramah(data.id);
                        }}
                        key={data.id}
                        className="d-flex align-items-center list-filter"
                      >
                        <div
                          className={
                            data.status === 1
                              ? "filter-check-box filter-check-box-selected mr-2"
                              : "filter-check-box mr-2"
                          }
                        ></div>
                        <div>{data.nama}</div>
                      </div>
                    );
                  })}
                  <button
                    onClick={this.handleOpenModal}
                    className="form-control mt-2 custom-button-outline custom-button-outline-white"
                  >
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
                  onChange={this.onChangeSort}
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
