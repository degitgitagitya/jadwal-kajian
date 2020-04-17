import React, { Component } from "react";

import Kajian from "../Assets/kajian.jpg";
import "./CardKajian.css";

export default class CardKajian extends Component {
  render() {
    return (
      <div className="card-kajian">
        <img src={Kajian} alt="kajian" className="card-kajian-image" />
        <div className="card-kajian-detail">
          <div className="card-kajian-judul">SIRAH NABAWIYAH</div>
          <div className="card-kajian-deskripsi">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          </div>
        </div>
      </div>
    );
  }
}
