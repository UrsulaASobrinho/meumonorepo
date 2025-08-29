"use client"
import { useState } from "react";

export default function Create() {

   const [message, setMessage] = useState("");

  return (
   <>
   <div className="container">
    <h1 className="display-5 fw-bodtext-body-emphasis lh-1 mb-3 mt-5"> Donate Crypto</h1>
    <p>Preencha os campos para incluir sua campanha na plataforma.</p>
    <p> Ao término do cadastro, você recebrá o link para divulgá-lo e recener as doações.</p>
    <hr className="mb-4"></hr>
    <div className="col-6">
      <div className="form-floating mb3">
        <input type="text" id="title" className="form-control"></input>
        <label htmlFor="title">Título</label>
      </div>
       <div className="form-floating mb3">
       <textarea id="description" className="form-control"/>
        <label htmlFor="description">Descrição</label>
      </div>
       <div className="form-floating mb3">
        <input type="text" id="videoUrl" className="form-control"></input>
        <label htmlFor="videoUrl">Url do vídeo</label>
      </div>
       <div className="form-floating mb3">
        <input type="text" id="imageUrl" className="form-control"></input>
        <label htmlFor="imageUrl">Url da imagem</label>
      </div>
      <div className="col-12 mb-3">
        <button type="button" className="btn btn-primary col-12 mb-3">Salvar</button>
      </div>
   
       {
            message
            ?   <div className="alert alert-success p-3 col-12 mt-5" role="alert">{message}</div>
            : <></>
          }
        

    </div>
   </div>

  
   </>
  );
}
