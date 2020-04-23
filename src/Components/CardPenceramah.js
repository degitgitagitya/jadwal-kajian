import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./CardPenceramah.css";
import { withRouter } from "react-router-dom";

class CardPenceramah extends Component {
  handleSelengkapnya = () => {
    this.props.history.push(`/detail-penceramah?id=${this.props.data.id}`);
  };

  render() {
    const { nama, deskripsi, gambar } = this.props.data;
    return (
      <div>
        {/* Desktop */}
        <div className="d-none d-lg-block">
          <div className="card-penceramah global-shadow">
            <div className="row align-items-center">
              <div className="col-3 text-center">
                <img
                  src={gambar}
                  alt="penceramah"
                  className="card-penceramah-image"
                />
              </div>
              <div className="col-9">
                <h3>{nama}</h3>
                <p>Penceramah</p>

                <p>{deskripsi.substring(0, 250)} ....</p>

                <div className="d-flex justify-content-end">
                  <button
                    onClick={this.handleSelengkapnya}
                    className="custom-button custom-button-primary"
                  >
                    SELENGKAPNYA
                    <FontAwesomeIcon
                      icon="arrow-right"
                      className="ml-3"
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile */}
        <div className="d-block d-lg-none">
          <div className="mobile-card-penceramah global-shadow d-flex align-items-center flex-column bd-highlight">
            <div>
              <img
                src={gambar}
                alt="penceramah"
                className="mobile-card-penceramah-image"
              />
            </div>

            <div>
              <div className="text-semi-bold mt-2">{nama}</div>
            </div>

            <div className="mb-auto ">
              <div className="secondary-text text-center">
                {deskripsi.substring(0, 100)}
              </div>
            </div>

            <button
              onClick={this.handleSelengkapnya}
              className="custom-button custom-button-primary w-100"
            >
              SELENGKAPNYA
              <FontAwesomeIcon
                icon="arrow-right"
                className="ml-2"
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardPenceramah);
