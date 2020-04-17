import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../Assets/logo.png";

import "./Navigation.css";

const NAVBAR_CONTENT = [
  {
    no: "1",
    nama: "JADWAL KAJIAN",
    link: "",
  },
  {
    no: "2",
    nama: "PENCERAMAH",
    link: "",
  },
  {
    no: "3",
    nama: "BERLANGGANAN",
    link: "",
  },
  {
    no: "4",
    nama: "TANYA JAWAB",
    link: "",
  },
  {
    no: "5",
    nama: "KIRIM JADWAL",
    link: "",
  },
  {
    no: "6",
    nama: "HUBUNGI",
    link: "",
  },
];

const NavContent = (props) => {
  return (
    <Nav.Link className="mr-3 navigation-content" href={props.data.link}>
      {props.data.nama}
    </Nav.Link>
  );
};

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation-background">
        <Container>
          <Navbar bg="transparent" expand="lg">
            <Navbar.Brand href="#home">
              <img
                src={Logo}
                className="navigation-logo global-shadow"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {NAVBAR_CONTENT.map((data) => {
                  return <NavContent key={data.no} data={data}></NavContent>;
                })}
                <button className="custom-button-outline custom-button-outline-white mx-3">
                  MASUK
                </button>
                <button className="custom-button custom-button-primary">
                  DAFTAR
                </button>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
        <Container className="navigation-search-bar text-center">
          <h1 className="mt-3">Cari Jadwal Kajian di Sini</h1>
          <p>Cari berdasarkan lokasi, ustaz atau judul</p>
          <div className="row justify-content-center">
            <div className="col-6">
              <input
                type="text"
                className="global-rounded-search mr-3"
                placeholder="Cari di sini..."
              />
              <button className="global-border-radius custom-button custom-button-primary">
                <i className="fa fa-search mr-2"></i> CARI
              </button>
            </div>
          </div>

          <br />
          <br />
        </Container>
      </div>
    );
  }
}
