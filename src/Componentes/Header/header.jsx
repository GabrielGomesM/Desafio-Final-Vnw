import logo from "../../assets/img/logo.png";
import search from "../../assets/img/search.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "../../Pages/Inicio/Inicio";
import Doados from "../../Pages/Doados/Doados";
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";
import S from "./header.module.scss";

export default function header() {
  return (
    <BrowserRouter>
      <header>
        <section className={S.BoxLogo}>
          <img src={logo} alt="imagem de um livro" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={S.BoxMenu}>
          <ul>
            <li>
              <Link to="/">Inicío</Link>
            </li>
            <li>
              <Link to="/doados">Livros Doados</Link>
            </li>
            <li>
              <Link to="/queroDoar">Quero Doar</Link>
            </li>
          </ul>
        </nav>
        <div className={S.BoxInput}>
          <input type="text" placeholder="O que você procura?" />
          <img src={search} alt="" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/doados" element={<Doados />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
