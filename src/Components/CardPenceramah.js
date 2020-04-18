import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Penceramah from "../Assets/penceramah1.jpg";

import "./CardPenceramah.css";

export default class CardPenceramah extends Component {
  render() {
    return (
      <div className="card-penceramah">
        <div className="row align-items-center">
          <div className="col-3 text-center">
            <img
              src={Penceramah}
              alt="penceramah"
              className="card-penceramah-image"
            />
          </div>
          <div className="col-9">
            <h3>Nama Penceramah</h3>
            <p>Lorem ipsum</p>

            <p>
              Elit aute exercitation irure minim ex qui. Velit incididunt ipsum
              magna cillum mollit adipisicing cupidatat esse dolore id. Pariatur
              aliquip laborum enim amet dolore proident irure voluptate et
              voluptate aute magna consectetur. Enim officia deserunt et ea
              reprehenderit do velit laborum aliquip consectetur.
            </p>

            <div className="d-flex justify-content-end">
              <button className="custom-button custom-button-primary">
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
    );
  }
}
