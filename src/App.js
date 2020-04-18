import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import DaftarJadwalKajian from "./Pages/DaftarJadwalKajian";
import DetailJadwalKajian from "./Pages/DetailJadwalKajian";
import DaftarPenceramah from "./Pages/DaftarPenceramah";
import Berlangganan from "./Pages/Berlangganan";
import DetailPenceramah from "./Pages/DetailPenceramah";

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
        <Route path="/daftar-penceramah" component={DaftarPenceramah}></Route>
        <Route path="/berlangganan" component={Berlangganan}></Route>
        <Route path="/detail-penceramah" component={DetailPenceramah}></Route>
      </Switch>
    </Router>
  );
}
