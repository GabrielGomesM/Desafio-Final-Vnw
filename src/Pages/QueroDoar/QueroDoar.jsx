import S from "./queroDoar.module.scss";
import Book from "../../assets/img/Book.png";

import axios from 'axios'
import {useState} from 'react'

export default function QueroDoar() {


     const [titulo,setTitulo] = useState("")
     const [categoria,setCategiria] = useState("")
     const [autor,setAutor] = useState("")
     const [imagem_url,setImagem] = useState("")


     const enviarDados = async() =>{

     const urlApi = "https://desafio2-osjd.onrender.com/doar"
     

     const dadosEnviar = {
          titulo,
          categoria,
          autor,
          imagem_url
     }


       await axios.post(urlApi,dadosEnviar)
       alert("Livro Enviado!")
         
       setTitulos("")
       setCategiria("")
       setAutor("")
       setImagem("")
     }





     const capturaTitulo = (e) =>{
      setTitulo(e.target.value)
      console.log(e.target.value)
     }

     const capturaCategoria = (e)=>{
      setCategiria(e.target.value)
     }

     const capturaAutor = (e)=>{
      setAutor(e.target.value)
     }

     const capturaImagem = (e)=>{
      setImagem(e.target.value)
     }







  return (
    <section className={S.section1}>
      <section className={S.section2}>
        <h2>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <img src={Book} alt="Imagem de um livro" />
            <h3>Informações do Livro</h3>
          </div>
          <input type="text" placeholder="Titulo " onChange={capturaTitulo} value={titulo}/>
          <input type="text" placeholder="Categoria" onChange={capturaCategoria

          }  value={categoria}/> 
          <input type="text" placeholder="Autor" onChange={capturaAutor} value={autor} />
          <input type="text" placeholder="Link da Imagem" onChange={capturaImagem} value={imagem_url}/>
          <input className={S.Doar} onClick={enviarDados} type="submit" value="Doar" />
        </form>
      </section>
    </section>
  );
}
