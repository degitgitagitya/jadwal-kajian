import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./CardTanyaJawabLanding.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class CardTanyaJawabLanding extends Component {
  render() {
    const { pertanyaan, jawaban, gambar, waktu, id } = this.props.data;
    return (
      <div>
        {/* Desktop */}

        <div className="d-none d-lg-block ">
          <div className="card-tanya-jawab d-flex mb-4">
            <img src={gambar} alt="kajian" className="card-tanya-image" />
            <div className="card-tanya-detail">
              <div className="card-tanya-judul">{pertanyaan}</div>
              <div className="card-tanya-deskripsi">
                {jawaban.substring(0, 200)}
              </div>
              <div className="d-flex justify-content-between mt-4">
                <div className="card-tanya-time">
                  {" "}
                  <i className="fa fa-clock mr-1"></i> {waktu}
                </div>
                <div
                  onClick={() => {
                    this.props.history.push(`/detail-tanya-jawab?id=${id}`);
                  }}
                  className="card-tanya-action span-clickable"
                >
                  SELENGKAPNYA <i className="fa fa-arrow-right ml-1"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile */}

        <div className="d-block d-lg-none">
          <div className="d-flex flex-column">
            <div className="mobile-card-tanya-jawab">
              <div className="d-flex">
                <img
                  src={gambar}
                  alt="kajian"
                  className="mobile-card-tanya-image flex-shrink-0"
                />
                <div className="p-2 d-flex flex-column">
                  <div className="text-bold">{pertanyaan}</div>
                  <div>{jawaban.substring(0, 30)} ...</div>

                  <button
                    onClick={() => {
                      this.props.history.push(`/detail-tanya-jawab?id=${id}`);
                    }}
                    className="mt-auto w-100 custom-button custom-button-primary"
                  >
                    Selengkapnya
                    <FontAwesomeIcon
                      icon="arrow-right"
                      className="ml-2"
                    ></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardTanyaJawabLanding);
