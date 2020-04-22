import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { AuthContext } from "../Contexts/Authentication";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import ReactModal from "react-modal";
import { Spring } from "react-spring/renderprops";

import Logo from "../Assets/logo.png";

import "./Navigation.css";

ReactModal.setAppElement("#root");

const NAVBAR_CONTENT = [
  {
    no: "1",
    nama: "JADWAL KAJIAN",
    link: "/daftar-jadwal-kajian",
    icon: "calendar-alt",
  },
  {
    no: "2",
    nama: "PENCERAMAH",
    link: "/daftar-penceramah",
    icon: "users",
  },
  {
    no: "3",
    nama: "BERLANGGANAN",
    link: "/berlangganan",
    icon: "comment-alt",
  },
  {
    no: "4",
    nama: "TANYA JAWAB",
    link: "/tanya-jawab",
    icon: "bell",
  },
  {
    no: "5",
    nama: "KIRIM JADWAL",
    link: "/kirim-jadwal",
    icon: "paper-plane",
  },
  {
    no: "6",
    nama: "HUBUNGI",
    link: "/hubungi",
    icon: "phone",
  },
];

const NavContent = (props) => {
  return (
    <Nav.Link
      className="mr-3 navigation-content"
      onClick={() => {
        props.history.push(props.data.link);
      }}
    >
      {props.data.nama}
    </Nav.Link>
  );
};

class Navigation extends Component {
  static contextType = AuthContext;

  state = {
    cariJadwal: "",
    expand: true,
    showModal: false,
  };

  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  onChangeCariJadwal = (event) => {
    this.setState({
      cariJadwal: event.target.value,
    });
  };

  toggleExpand = () => {
    this.setState({
      expand: !this.state.expand,
    });
  };

  componentDidMount() {
    let x = window.location.pathname;
    if (x !== "/" && x !== "/daftar-jadwal-kajian") {
      this.setState({
        expand: false,
      });
    }
  }

  searchNavigation = () => {
    this.handleCloseModal();
    this.props.history.push(
      `/daftar-jadwal-kajian?cari=${this.state.cariJadwal}`
    );

    if (this.props.reFetch !== undefined) {
      this.props.reFetch();
    }
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.searchNavigation();
    }
  };

  redirectTo = (url) => {
    this.handleCloseModal();
    this.props.history.push(url);
  };

  render() {
    return (
      <div>
        <div className="d-none d-lg-block">
          <div className="navigation-background ">
            <Container>
              <Navbar bg="transparent" expand="lg">
                <Navbar.Brand
                  onClick={() => {
                    this.props.history.push("/");
                  }}
                >
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
                      return (
                        <NavContent
                          key={data.no}
                          data={data}
                          history={this.props.history}
                        ></NavContent>
                      );
                    })}
                    {this.context.isAuth ? (
                      <div>
                        <button
                          onClick={() => {
                            this.props.history.push("/profile");
                          }}
                          className="custom-button custom-button-info mx-3"
                        >
                          PROFIL
                        </button>
                        <button
                          onClick={() => {
                            this.context.changeAuthToFalse();
                          }}
                          className="custom-button custom-button-danger"
                        >
                          KELUAR
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={() => {
                            this.props.history.push("/masuk");
                          }}
                          className="custom-button-outline custom-button-outline-white mx-3"
                        >
                          MASUK
                        </button>
                        <button
                          onClick={() => {
                            this.props.history.push("/daftar");
                          }}
                          className="custom-button custom-button-primary"
                        >
                          DAFTAR
                        </button>
                      </div>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Container>

            {this.state.expand ? (
              <Container className="navigation-search-bar text-center">
                <h1 className="mt-3">Cari Jadwal Kajian di Sini</h1>
                <p>Cari berdasarkan lokasi, ustaz atau judul</p>
                <div className="row justify-content-center">
                  <div className="col-6">
                    <input
                      type="text"
                      className="global-rounded-search mr-3"
                      placeholder="Cari di sini..."
                      value={this.state.cariJadwal}
                      onChange={this.onChangeCariJadwal}
                      onKeyPress={this.handleKeyPress}
                    />
                    <button
                      onClick={this.searchNavigation}
                      className="global-border-radius custom-button custom-button-primary"
                    >
                      <i className="fa fa-search mr-2"></i> CARI
                    </button>
                  </div>
                </div>
                <br />
              </Container>
            ) : (
              ""
            )}

            {this.state.expand ? (
              <div className="d-flex justify-content-center">
                <h2>
                  <FontAwesomeIcon
                    onClick={this.toggleExpand}
                    className="navbar-icon-action-expand"
                    icon="chevron-up"
                  />
                </h2>
              </div>
            ) : (
              ""
            )}
          </div>

          {this.state.expand === false ? (
            <div className="d-flex justify-content-center">
              <h2>
                <FontAwesomeIcon
                  onClick={this.toggleExpand}
                  className="navbar-icon-action-expand"
                  icon="chevron-down"
                />
              </h2>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* Mobile */}

        <div className="d-block d-lg-none">
          <ReactModal
            isOpen={this.state.showModal}
            className="kelas-modal-mobile"
            overlayClassName="kelas-modal-overlay-mobile"
          >
            <Spring
              from={{ opacity: 0, marginLeft: -500 }}
              to={{ opacity: 1, marginLeft: 0 }}
            >
              {(props) => (
                <div style={props}>
                  <div className="mobile-navigation-header">
                    <div className="d-flex align-items-center justify-content-between">
                      <img
                        onClick={() => {
                          this.redirectTo("/");
                        }}
                        src={Logo}
                        className="mobile-navigation-header-logo"
                        alt="logo"
                      />

                      <FontAwesomeIcon
                        onClick={this.handleCloseModal}
                        className="text-white"
                        icon="bars"
                      ></FontAwesomeIcon>
                    </div>
                  </div>
                  <div className="mobile-navigation-content">
                    <div
                      onClick={() => {
                        this.redirectTo("/");
                      }}
                      className="d-flex align-items-center text-white mb-3"
                    >
                      <div className="mobile-icon-container">
                        <FontAwesomeIcon icon="home"></FontAwesomeIcon>
                      </div>
                      <div className="text-semi-bold">BERANDA</div>
                    </div>

                    {NAVBAR_CONTENT.map((data) => {
                      return (
                        <div
                          key={data.no}
                          className="d-flex align-items-center text-white mb-3"
                          onClick={() => {
                            this.redirectTo(data.link);
                          }}
                        >
                          <div className="mobile-icon-container">
                            <FontAwesomeIcon icon={data.icon}></FontAwesomeIcon>
                          </div>
                          <div className="text-semi-bold">{data.nama}</div>
                        </div>
                      );
                    })}

                    <div
                      onClick={() => {
                        this.redirectTo("/masuk");
                      }}
                      className="d-flex align-items-center text-white mb-3"
                    >
                      <div className="mobile-icon-container">
                        <FontAwesomeIcon icon="arrow-right"></FontAwesomeIcon>
                      </div>
                      <div className="text-semi-bold">MASUK</div>
                    </div>

                    <div
                      onClick={() => {
                        this.redirectTo("/daftar");
                      }}
                      className="d-flex align-items-center text-white mb-3"
                    >
                      <div className="mobile-icon-container">
                        <FontAwesomeIcon icon="plus"></FontAwesomeIcon>
                      </div>
                      <div className="text-semi-bold">DAFTAR</div>
                    </div>
                  </div>

                  <div className="mobile-navigation-search">
                    <input
                      type="text"
                      placeholder="Cari berdasarkan ustaz, lokasi atau judul.."
                      className="mobile-navigation-input form-control mb-2"
                      value={this.state.cariJadwal}
                      onChange={this.onChangeCariJadwal}
                      onKeyPress={this.handleKeyPress}
                    />
                    <button className="custom-button w-100 custom-button-primary">
                      CARI JADWAL KAJIAN
                      <FontAwesomeIcon
                        icon="search"
                        className="ml-2"
                      ></FontAwesomeIcon>
                    </button>
                  </div>
                </div>
              )}
            </Spring>
          </ReactModal>
          <Container className="my-3">
            <div className="d-flex align-items-center justify-content-between">
              <FontAwesomeIcon
                onClick={this.handleShowModal}
                icon="bars"
              ></FontAwesomeIcon>
              <div className="mobile-title-page">{this.props.title}</div>
              <FontAwesomeIcon
                onClick={this.handleShowModal}
                icon="search"
              ></FontAwesomeIcon>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default withRouter(Navigation);
