"use client"

import { useRouter } from "next/navigation";  //pacote de função 
import { useState } from "react";

export default function Home() {

  const {push} = useRouter();  //chama/ativa a fução para troca de form

  const [message, setMessage] = useState("");

  function btnloginClick(){
    setMessage("Conectado a carteira....aguarde....");
    push("/create");
  }

  return (
   <>
   <div className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-6">
          <img src="./Gemini_Generated_Image_nt335ant335ant33.png" className="d-block mx-lg-auto img-fluid" width="700" height="500"></img>
        </div>
        <div className="col-6">
          
          <h1 className="display-5 fw-bold teste-doby-emphasis lh-l mb-3">DonateCrypto</h1>
          <p className="lead"> Sua plataforma decentralizada de doações.</p>
          <p className="lead"> Autentique-se com sua carteira e crie uma campanha.</p>
          <p className="lead"> Para doações, use o link da campanha já existente.</p>
          <div className="d-flex justify-content-start mt-5">
            <button type="button" className="btn btn-primary btn-lg px-4 me-2 col-12" onClick={btnloginClick}>
              <img src="./logo-carteira-met.png" width="64" className="me-2"></img>
              Conectar com a MetaMask
            </button>
          </div>
          {
            message
            ?   <div className="alert alert-success p-3 col-12 mt-5" role="alert">{message}</div>
            : <></>
          }
        
        </div>
      </div>
   </div>

  
   </>
  );
}
