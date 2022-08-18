import React from "react";
import { usePackid } from "../../../hooks/packid";
import { useUserPage } from "../../../hooks/userPage";



export function SliderApp(){
    const {UserPage, setUserPage} = useUserPage()

    const {Packid, setPackid} =usePackid()
    return(
        <div>
            <div className={"containerData "}>
            <div>
                <div>
                    <h1>Previa</h1>
                    <iframe src={"/app/live?packid="+Packid} id="SliderApp" className="demostracaoapp" name="AppSlider" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" allowfullscreen=""></iframe>            </div>
                </div>
                <button align="center" onClick={()=> fullview_slider()} className={"bt btgreen"}> Acessar em tela cheia </button><br /><br />
                <br />
                <button align="center" onClick={()=> setUserPage(2)} className={"bt btred"}> Voltar ao Inicio  </button><br /><br />

            </div>
        </div>
    )
}
function fullview_slider(){
    var linkload = document.getElementById('SliderApp').src.toString();
    window.open(linkload)
}
