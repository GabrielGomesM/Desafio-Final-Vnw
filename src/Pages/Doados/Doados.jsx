import S from "./Doados.module.scss";
import Book2 from "../../assets/img/Book2.png";
import axios from  'axios'  
import { useState,useEffect } from "react";

export default function Doados() {


const [livros,setLivros] = useState([])
 
const getLivros = async () => {
  const response = await axios.get("https://desafio2-osjd.onrender.com/livros")
  setLivros(response.data)

}
useEffect(()=>{
  getLivros()
},[]        
)

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
        {livros.map((item)=>(
              <article key={item.id}>

                <img src={item.imagem_url} alt="" />
                <h3>{item.titulo}</h3>
                <p>{item.categoria}</p>
                <p>{item.autor}</p>
              </article>

        ))}
      </section>
    </section>
  );
}
