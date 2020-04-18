import React, { Component } from "react";
import { Container } from "react-bootstrap";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";
import CardKajian from "../Components/CardKajian";
import Footer from "../Components/Footer";

import "./DaftarJadwalKajian.css";

export default class DaftarJadwalKajian extends Component {
  render() {
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
                  <option value="1">A - Z</option>
                  <option value="2">Z - A</option>
                  <option value="3">Terbaru</option>
                  <option value="4">Terlama</option>
                </select>
              </div>
              <h3>12 Maret 2020</h3>
              <hr className="semi-bold-hr" />
              <div className="d-flex flex-wrap">
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
              </div>
              <h3>11 Maret 2020</h3>
              <hr className="semi-bold-hr" />
              <div className="d-flex flex-wrap">
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
                </div>
                <div className="mb-4 mr-4">
                  <CardKajian></CardKajian>
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
            </div>
          </div>
        </Container>
        <Footer></Footer>
      </div>
    );
  }
}
