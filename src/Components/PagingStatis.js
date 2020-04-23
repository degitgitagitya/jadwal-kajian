import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class PagingStatis extends Component {
  render() {
    return (
      <div className="daftar-jadwal-kajian-paging mb-1">
        <div className="row justify-content-center">
          <div className="col-4 text-center d-flex justify-content-around align-items-center">
            <FontAwesomeIcon
              icon="chevron-left"
              className="paging-number"
            ></FontAwesomeIcon>
            <div className="paging-number">1</div>
            <FontAwesomeIcon
              icon="chevron-right"
              className="paging-number"
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
    );
  }
}
