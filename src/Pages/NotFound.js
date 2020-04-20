import React, { Component } from "react";

import "./NotFound.css";
import { withRouter } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops! Nothing was found</h2>
          <p>
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </p>
          <button
            onClick={() => {
              this.props.history.push("/");
            }}
            className="custom-button custom-button-primary"
          >
            <h3>Go To Homepage</h3>
          </button>
          <br />
          <br />
          <a href="https://colorlib.com/wp/free-404-error-page-templates/">
            Template By ColorLib
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(NotFound);
