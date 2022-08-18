import React from "react"
import { useUserPage } from "../../hooks/userPage"

export default function AboutMe(){
    const {UserPage, setUserPage} = useUserPage()
    return(
        <div className="dtdata">
            <div>
            <h1>Quem Sou Eu </h1>
            <h2>AleHot ¯\_( ͡° ͜ʖ ͡°)_/¯</h2>
            <br/>
            <br/>
            <p> Ola sou um jovem que possui 17 anos na epoca de lançamento desta versao , desde mais novo fui guiado por desafios e pela ideia de aprendisagem continua , em virtude disto consgui elaborar  est projeto .
                Atualmente uso programação como um hobbie devido a nao estar situado de maneira integral no mercado ainda.
            </p>
            <br/>
            <br/>
            <button align="center" onClick={()=> setUserPage(2)} className={"bt btred"}> Voltar </button>
            </div>
        </div>
    )
}