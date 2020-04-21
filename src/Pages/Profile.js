import React, { Component } from "react";
import { AuthContext } from "../Contexts/Authentication";
import { Container } from "react-bootstrap";

import Navigation from "../Components/Navigation";
import BreadCumb from "../Components/BreadCumb";

export default class Profile extends Component {
  static contextType = AuthContext;

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <BreadCumb content="Beranda / Profil"></BreadCumb>
        <Container>
          <div className="row justify-content-center">
            <div className="col-4 text-center card global-shadow p-2">
              <h3>Profil</h3>
              <p>{this.context.data.nama}</p>
              <p>{this.context.data.email}</p>
              <h3>Pertanyaan Anda</h3>

              <hr />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
