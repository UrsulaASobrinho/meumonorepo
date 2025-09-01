"use client"


import { getCampaign } from "@/app/services/Web3Service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function Donate(){
    const params = useParams();

    const [message, setMessage] = useState("");
    const [campaign, setCampaign] = useState({});

    // Add this helper function at the top of your file
function replacer(key, value) {
    if (typeof value === 'bigint') {
        return value.toString();
    }
    return value;
}
    useEffect(() => {
        setMessage("Buscando campanha....aguarde...");
        getCampaign(params.id)
            .then(result =>{
                setMessage("");
                result.id = params.id;
                setMessage(JSON.stringify(result, replacer));
                setCampaign(result);
            })
            .catch(err => {
                console.error(err);
                setMessage(err.mensagem);
            })
    }, [])

    return(
        <>
        <div className="container">
           <h1 className="display-5 fw-bold teste-doby-emphasis lh-l mb-3">Donate Crypto</h1>
          <p className="lead"> Verifique se esta campanha é a correta antes de finalizar a sua doação.</p>
           <hr/>
           <div className="row flex-lg-row-severse aligns-items-center g-5">
                <div className="col-7">
                    {

                    }
                </div>
                {
                    message
                    ?   <div className="alert alert-success p-3 col-12 mt-5" role="alert">{message}</div>
                    : <></>
                }
           </div>
        </div>
        </>
    )
}