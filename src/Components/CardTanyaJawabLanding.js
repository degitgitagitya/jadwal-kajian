import React, { Component } from "react";

import Tanya from "../Assets/tanya1.jpg";
import "./CardTanyaJawabLanding.css";

export default class CardTanyaJawabLanding extends Component {
  render() {
    return (
      <div className="card-tanya-jawab d-flex mb-4">
        <img src={Tanya} alt="kajian" className="card-tanya-image" />
        <div className="card-tanya-detail">
          <div className="card-tanya-judul">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </div>
          <div className="card-tanya-deskripsi">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            similique fugit id, veritatis cumque, voluptates obcaecati dolor
            molestias possimus qui facere fugiat quaerat, dolores
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div className="card-tanya-time">
              {" "}
              <i className="fa fa-clock mr-1"></i> 1 jam yang lalu
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
