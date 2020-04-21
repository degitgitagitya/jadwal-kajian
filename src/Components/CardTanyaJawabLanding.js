import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./CardTanyaJawabLanding.css";

class CardTanyaJawabLanding extends Component {
  render() {
    const { pertanyaan, jawaban, gambar, waktu, id } = this.props.data;
    return (
      <div
        onClick={() => {
          this.props.history.push(`/detail-tanya-jawab?id=${id}`);
        }}
        className="card-tanya-jawab d-flex mb-4"
      >
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
            <div className="card-tanya-action">
              SELENGKAPNYA <i className="fa fa-arrow-right ml-1"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardTanyaJawabLanding);
