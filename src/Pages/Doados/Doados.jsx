import S from "./Doados.module.scss";
import Book2 from "../../assets/img/Book2.png";

export default function Doados() {
  return (
    <section className={S.Primeira}>
      <h2> Livros Doados</h2>
      <section className={S.Segunda}>
        <article>
          <img src={Book2} alt="Imagem de Um Livro" />
          <h3>O Protagonista</h3>
          <p>Susanne Andrade</p>
          <p>Ficção</p>
        </article>
      </section>
    </section>
  );
}
