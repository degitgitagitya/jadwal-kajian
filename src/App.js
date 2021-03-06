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
import Authentication from "./Contexts/Authentication";
import NotFound from "./Pages/NotFound";
import Profile from "./Pages/Profile";
import DetailTanyaJawab from "./Pages/DetailTanyaJawab";
import { ProtectedRoute } from "./Components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Authentication>
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
          <Route
            path="/detail-tanya-jawab"
            component={DetailTanyaJawab}
          ></Route>
          <Route path="/kirim-jadwal" component={KirimJadwal}></Route>
          <Route path="/hubungi" component={Hubungi}></Route>
          <Route path="/masuk" component={Masuk}></Route>
          <Route path="/daftar" component={Daftar}></Route>
          <Route path="/ajukan-pertanyaan" component={AjukanPertanyaan}></Route>
          <Route path="/kirim-saran" component={KirimSaran}></Route>
          <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
          <Route path="*" component={() => <NotFound />} />
        </Switch>
      </Authentication>
    </Router>
  );
}
