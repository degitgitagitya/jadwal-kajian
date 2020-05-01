// Komponen untuk menyimpan variable global

import React, { createContext, Component } from "react";

export const AuthContext = createContext();

export default class Authentication extends Component {
  state = {
    isAuth: false,
    data: [],
    modalWarning: false,
  };

  changeModalWarningToFalse = () => {
    this.setState({
      modalWarning: false,
    });
  };

  changeAuthToFalse = () => {
    this.setState({
      isAuth: false,
      data: [],
    });
  };

  changeAuthToTrue = (data) => {
    this.setState({
      isAuth: true,
      data: data,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          changeAuthToFalse: this.changeAuthToFalse,
          changeAuthToTrue: this.changeAuthToTrue,
          changeModalWarningToFalse: this.changeModalWarningToFalse,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
