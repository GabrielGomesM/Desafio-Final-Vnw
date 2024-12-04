import Facebook from "../../assets/img/Facebook.png";
import Instagram from "../../assets/img/Instagram.png";
import Linkedin from "../../assets/img/Linkedin.png";
import Twitter from "../../assets/img/Twitter.png";
import Youtube from "../../assets/img/Youtube.png";
import S from "./footer.module.scss";
export default function footer() {
  return (
    <footer>
      <section className={S.Section1}>
        <h3>4002-8922</h3>
        <nav>
          <a href="">
            <img src={Facebook} alt="Logo do Facebook" />
          </a>
          <a href="">
            <img src={Twitter} alt="Logo do Twitter" />
          </a>
          <a href="">
            <img src={Youtube} alt="Logo do Youtube" />
          </a>
          <a href="">
            <img src={Linkedin} alt="Logo do Linkedin" />
          </a>
          <a href="">
            <img src={Instagram} alt="Logo do Instagram" />
          </a>
        </nav>
      </section>
      <section className={S.Section2}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
