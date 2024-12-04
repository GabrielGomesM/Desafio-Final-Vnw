import S from "./inicio.module.scss";
import balance from "../../assets/img/balance.png";
import read from "../../assets/img/read.png";
import network from "../../assets/img/network.png";
import transform from "../../assets/img/transform.png";

export default function Incio() {
  return (
    <main>
      <section className={S.banner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>

      <section className={S.devoDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
        <section className={S.boxCard}>
          <article>
            <img src={network} alt="Imagem de pessoas fazendo conexões" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </article>
          <article>
            <img src={read} alt="Imagem de alguem lendo" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src={transform} alt="" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </article>
          <article>
            <img src={balance} alt="Imagem de uma balança" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado.
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
