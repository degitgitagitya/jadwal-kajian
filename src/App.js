import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import DaftarJadwalKajian from "./Pages/DaftarJadwalKajian";
import DetailJadwalKajian from "./Pages/DetailJadwalKajian";
import DaftarPenceramah from "./Pages/DaftarPenceramah";
import Berlangganan from "./Pages/Berlangganan";
import DetailPenceramah from "./Pages/DetailPenceramah";
import TanyaJawab from "./Pages/TanyaJawab";
import KirimJadwal from "./Pages/KirimJadwal";
import Hubungi from "./Pages/Hubungi";
import Masuk from "./Pages/Masuk";
import Daftar from "./Pages/Daftar";
import AjukanPertanyaan from "./Pages/AjukanPertanyaan";
import KirimSaran from "./Pages/KirimSaran";

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
        <Route path="/tanya-jawab" component={TanyaJawab}></Route>
        <Route path="/kirim-jadwal" component={KirimJadwal}></Route>
        <Route path="/hubungi" component={Hubungi}></Route>
        <Route path="/masuk" component={Masuk}></Route>
        <Route path="/daftar" component={Daftar}></Route>
        <Route path="/ajukan-pertanyaan" component={AjukanPertanyaan}></Route>
        <Route path="/kirim-saran" component={KirimSaran}></Route>
      </Switch>
    </Router>
  );
}
