import S from "./queroDoar.module.scss";
import Book from "../../assets/img/Book.png";

export default function QueroDoar() {
  return (
    <section className={S.section1}>
      <section className={S.section2}>
        <h2>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </h2>
        <form action="">
          <div>
            <img src={Book} alt="Imagem de um livro" />
            <h3>Informações do Livro</h3>
          </div>
          <input type="text" placeholder="Titulo " />
          <input type="text" placeholder="Categoria" />
          <input type="text" placeholder="Autor" />
          <input type="text" placeholder="Link da Imagem" />
          <input className={S.Doar} type="submit" value="Doar" />
        </form>
      </section>
    </section>
  );
}
