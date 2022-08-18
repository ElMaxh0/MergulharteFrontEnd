import react from "react";
import { tkgen } from "../../../assents/keys/tokengen";
import { useImgPackData } from "../../../hooks/ImgPackDataHook";
import { usePackid } from "../../../hooks/packid";
import { useUserPage } from "../../../hooks/userPage";


export function PackIDConfigForm(){
    const {UserPage, setUserPage} = useUserPage()
    const {Packid, setPackid} =usePackid()
    const {ImgPackData, setImgPackData} = useImgPackData();
async function ApiDataPack(){
    var Packid =document.getElementById('PackId').value
    var api=await fetch('https://api1.mergulharte.app.br/api/v1/imgload/'+Packid+'?token='+tkgen(25)+'&fuckfuck='+tkgen(60)).then((resp)=> resp.json());
    setImgPackData(api)
    return api
 }
 function GoToSlider(){
    setPackid(document.getElementById('PackId').value);
    ApiDataPack()
    setUserPage(3);
    return(
        <div></div>
    )
}
    function GoToImersive(){
        setPackid(document.getElementById('PackId').value);
        ApiDataPack()
        setUserPage(5);
        return(
            <div></div>
        )
    }

    function UploadMidea(){
        window.open("https://api1.mergulharte.app.br/upload");
    }
    return(
        <div className="dtdata">
            <div>
                <h1>Pacote Imersivo </h1>
                    <h4 className="subtitle"> A um passo de mergulhar em seus obras </h4>
                </div>
                <div>
                    <form>
                        <p>Insira o codigo do pacote de Imagens </p>
                        <input type="text" name="packid" id="PackId" /> <br />
                        <button align="center" onClick={()=> GoToSlider()} className={"bt btazul"}> Verificar Imagens</button><br />
                        <button align="center" onClick={()=> GoToImersive()} className={"bt btazul"}> Acessar Pack</button><br />
                    </form>
                    <p> Para fins de demonstração utilize o pacote 99 </p>
                    <p>Caso deseje criar seu pacote agora mesmo clique no botao abaixo </p>
                    <button align="center" onClick={()=> UploadMidea()} className={"bt btred"}> Upload de Imagens</button><br />
                </div>
        </div>
    )
}
