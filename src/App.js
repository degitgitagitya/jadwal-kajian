import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import DaftarJadwalKajian from "./Pages/DaftarJadwalKajian";
import DetailJadwalKajian from "./Pages/DetailJadwalKajian";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route
          path="/daftar-jadwal-kajian"
          component={DaftarJadwalKajian}
        ></Route>
        <Route
          path="/detail-jadwal-kajian"
          component={DetailJadwalKajian}
        ></Route>
      </Switch>
    </Router>
  );
}
