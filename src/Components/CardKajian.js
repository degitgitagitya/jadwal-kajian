import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CardKajian.css";
import { withRouter } from "react-router-dom";

class CardKajian extends Component {
  handleClickCardKajian = () => {};

  render() {
    const {
      judul,
      deskripsi,
      kota,
      gambar,
      penceramah,
      tanggal,
    } = this.props.data;
    return (
      <div>
        {/* Dsektop */}
        <div className="d-none d-lg-block">
          <div
            onClick={() => {
              this.props.history.push(
                `/detail-jadwal-kajian?id=${this.props.data.id}`
              );
              if (this.props.fetchContent !== undefined) {
                this.props.fetchContent();
              }
            }}
            className="card-kajian"
          >
            <img src={gambar} alt="kajian" className="card-kajian-image" />
            <div className="card-kajian-detail">
              <div className="card-kajian-lokasi">
                <FontAwesomeIcon icon="user" className="mr-1"></FontAwesomeIcon>{" "}
                {penceramah}
              </div>
              <div className="card-kajian-lokasi">
                <FontAwesomeIcon
                  icon="map-marker-alt"
                  className="mr-1"
                ></FontAwesomeIcon>{" "}
                {kota}
              </div>
              <div className="card-kajian-judul">{judul}</div>
              <div className="card-kajian-deskripsi">
                {deskripsi.substring(0, 50)} ....
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="d-block d-lg-none">
          <div
            onClick={() => {
              this.props.history.push(
                `/detail-jadwal-kajian?id=${this.props.data.id}`
              );
              if (this.props.fetchContent !== undefined) {
                this.props.fetchContent();
              }
            }}
            className="mobile-card-kajian global-shadow"
          >
            <img
              src={gambar}
              className="mobile-card-kajian-image"
              alt="kajian"
            />
            <div className="p-2">
              <div className="text-semi-bold">{judul}</div>
              <div className="secondary-text">
                <FontAwesomeIcon
                  icon="clock"
                  className="mr-1"
                ></FontAwesomeIcon>
                {tanggal}
              </div>
              <div className="secondary-text">
                <FontAwesomeIcon
                  icon="map-marker"
                  className="mr-1"
                ></FontAwesomeIcon>
                {kota}
              </div>
              <div className="secondary-text">
                <FontAwesomeIcon icon="user" className="mr-1"></FontAwesomeIcon>
                {penceramah}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardKajian);
