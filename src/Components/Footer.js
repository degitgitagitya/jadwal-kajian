import React, { Component } from "react";
import { Container } from "react-bootstrap";

import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-background text-white">
        <Container className="py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2>Jadwal Kajian</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
                tempore, soluta dolorum odit voluptas quasi delectus ad
                perferendis nesciunt sed provident et exercitationem ipsa dolor.
                Facilis aspernatur culpa ullam hic.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
