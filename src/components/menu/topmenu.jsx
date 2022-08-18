import React from "react"
import { ProjectHost } from "../../assents/keys/projectHost"
import { useUserPage } from "../../hooks/userPage"
import { MenuTopoStyles } from "./styles"

export function TopMenu (){
    const {UserPage, setUserPage} = useUserPage()
    return (
        <MenuTopoStyles >
            <div id="imagem" className={"title"}>
                <h1>{ProjectHost}  &copy;</h1>
                </div>
            <ul>
                <li>
                </li>
                <li><a onClick={() => setUserPage(1)}>Inicio</a></li>
                <li><a onClick={() => setUserPage(2)}>Configuraçoes</a></li>
                <li><a onClick={() => setUserPage(3)}>Slider</a></li>
                <li><a onClick={() => setUserPage(4)}>Analise</a></li>
                <li><a onClick={() => setUserPage(5)}>Paredes 3d</a></li>
                <li><a onClick={() => setUserPage(6)}>Paisagem  </a></li>
                <li><a onClick={() => setUserPage(7)}>Chatbot</a></li>
                <li><a onClick={() => setUserPage(8)}>Sobre Mim </a></li>

                <li><a onClick={() => setUserPage(9)}>Minha Conta</a></li>

            </ul>
    </MenuTopoStyles>
    )
}