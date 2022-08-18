import { ButtonsStyles } from "../../assents/globalStyles/buttons";
import { ProjectHost } from "../../assents/keys/projectHost";
import { useBackground } from "../../hooks/background";
import { usePersonalName } from "../../hooks/personalName";
import { useUserPage } from "../../hooks/userPage";

export function Home(){
    const {PersonalName, setPersonalName} = usePersonalName();
    const {bgid, setbgid} =useBackground()
    const {UserPage, setUserPage} = useUserPage()

    return(
        <div>
            <h1 className={"center"}>{ProjectHost}</h1>
            <h2 className={"subtitle center"}>Mergulhe em Artes </h2>
            <div className="description">
                Mergulhe em suas artes Sinta-se Parte 
                </div>
            <div className="description2">
                Fornescendo expriencias para voce se sentir dentro de suas imagens
            </div>
                <ButtonsStyles align="center" onClick={()=> setUserPage(2)} className={"btazul"}> Acessar O Projeto  </ButtonsStyles><br /><br />
                <p>Usuario Conectado : {PersonalName}</p>
        </div>
    )
}