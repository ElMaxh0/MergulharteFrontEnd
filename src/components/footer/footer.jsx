import { FooterStyles } from "../../assents/globalStyles/footerStyles";
import React from "react";
import { ProjectHost } from "../../assents/keys/projectHost";

function Footer(){
    return(
        <FooterStyles>
            <div id={'Copirights footer '} >
                <h4>© Copyright 2020 AleHot Projekts - All Rights Reserved</h4>
                <h4>{ProjectHost} is a AleHot Projekt </h4>
                <h4> Maded by 123alehot.net.br</h4>
                <h4> Developed in <a href={"/wellcome"}>Laravel</a></h4>
                <h4> Hosted by Hostgator  </h4>
            </div>
        </FooterStyles>
    )
}
export{
    Footer
}