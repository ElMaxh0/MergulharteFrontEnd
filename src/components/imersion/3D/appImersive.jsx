import React, { useState } from "react";
import { tkgen } from "../../../assents/keys/tokengen";
import { useAltura } from "../../../hooks/altura";
import { useComprimento } from "../../../hooks/comprimento";
import { useImgPackData } from "../../../hooks/ImgPackDataHook";
import { useLargura } from "../../../hooks/largura";
import { usePackid } from "../../../hooks/packid";
import RoomImersive from "./ImersiveRoom";


export default function ImersiveRoom(){
const {larguraid, setlarguraid} = useLargura();
const {Alturaid, setAlturaid} = useAltura();
const {comprimentoid, setcomprimentoid} = useComprimento();
const {ImgPackData, setImgPackData} = useImgPackData();
const {Packid, setPackid} =usePackid()
async function ApiDataPack(){
    var Packid =document.getElementById('ImgUrl').value
    var api=await fetch('https://mergulharte.app.br/api/v1/imgload/'+Packid+'?token='+tkgen(25)+'&fuckfuck='+tkgen(60)).then((resp)=> resp.json());
    setImgPackData(api)
    return api
 }
function UpdateMergulharte (){
    setcomprimentoid(Number(document.getElementById('DataCompr').value))
    setAlturaid(Number(document.getElementById('DataAlt').value))
    setlarguraid(Number(document.getElementById('DataLarg').value))
    return(
        <div></div>
    )
}
return(
    <div>
        <div className={"containerData "}>
            <div>
                <div>
                    <div style={{
                        width:"100%",
                    }}>
                        <RoomImersive /> </div>
                    </div>
                    <div>
                    <div className={"controlers "}>
                        <h3> Configuraçoes do Ambiente Imersivo  </h3>
                            <div className={"general"}>
                                <h4>Altura  </h4>
                                <input id={"DataAlt"}></input><p>Metros </p>
                                <h4>Largura  </h4>
                                <input id={"DataLarg"}></input><p>Metros </p>
                                <h4>Profundidade </h4>
                                <input id={"DataCompr"}></input><p>Metros </p>
                            </div>
                            <button align="center" onClick={()=> UpdateMergulharte()} className={"bt btgreen"}>Atualizar Atributos </button><br /><br /><br />
                        </div>
                    </div>
                </div>
                <h3>Testar com outro pacote de imagens </h3>
                <p>Insira o codigo do pacote de conteudo para testar </p>
                <input type="text" name="ImgUrl" id="ImgUrl" /> <br /><br /><br />
                <button align="center" onClick={()=> ApiDataPack()} className={"bt btgold"}>Usar este Pacote  </button><br /><br /><br />
        </div>
    </div>
)
}

