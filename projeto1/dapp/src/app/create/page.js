"use client"
import { useState } from "react";
import { addCampaign } from "./services/Web3Service";
import { getLastCampaignId } from "../services/Web3Service";

export default function Create() {

   const [message, setMessage] = useState("");
   const [campaign, setCampaign] = useState({
    title: "",
    description: "",
    videoUrl: "",
    imageUrl: ""
   });
    
   //funao generica
   function onInputChange(evt){
    //pega tudo que anterior no campo   e altera
    setCampaign(prevState => ({...prevState, [evt.target.id]: evt.target.value}));
   }

   function btnSaveClick(){
      //setMessage(JSON.stringify(campaign));
      setMessage("Salvando a campanha....aguarde...");
      addCampaign(campaign)
      //.then(tx => setMessage(JSON,stringify[tx]))
      .then(tx => getLastCampaignId())
      .then(id => setMessage('Campanha foi salva com o ID ${id}. Em alguns minutos ela estará pronta para receber doações, use esse link para divulgá-la: http://localhost:3001/donate/${id}'))
      .catch(err => {
          console.error(err);
          setMessage(err.message);
      })
   }
  return (
   <>
   <div className="container">
    <h1 className="display-5 fw-bodtext-body-emphasis lh-1 mb-3 mt-5"> Donate Crypto</h1>
    <p>Preencha os campos para incluir sua campanha na plataforma.</p>
    <p> Ao término do cadastro, você recebrá o link para divulgá-lo e recener as doações.</p>
    <hr className="mb-4"></hr>
    <div className="col-6">
      <div className="form-floating mb3">
        <input type="text" id="title" className="form-control" onChange={onInputChange} value={campaign.title || ""}></input>
        <label htmlFor="title">Título</label>
      </div>
       <div className="form-floating mb3">
       <textarea id="description" className="form-control" onChange={onInputChange} value={campaign.description || ""}/>
        <label htmlFor="description">Descrição</label>
      </div>
       <div className="form-floating mb3">
        <input type="text" id="videoUrl" className="form-control" onChange={onInputChange} value={campaign.videoUrl || ""}></input>
        <label htmlFor="videoUrl">Url do vídeo</label>
      </div>
       <div className="form-floating mb3">
        <input type="text" id="imageUrl" className="form-control" onChange={onInputChange} value={campaign.imageUrl || ""}></input>
        <label htmlFor="imageUrl">Url da imagem</label>
      </div>
      <div className="col-12 mb-3">
        <button type="button" className="btn btn-primary col-12 mb-3" onClick={btnSaveClick}>Salvar</button>
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
