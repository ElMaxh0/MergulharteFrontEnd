import React from "react";
import axios from "axios";
import { ContentBoxStyle } from "../../assents/globalStyles/ContentContainer";
import { useLoginUserInfo } from "../../hooks/logueduserInfo ";
import { usePasswordUser } from "../../hooks/passwordLogin";
import { usePersonalName } from "../../hooks/personalName";
import { useLoginStatuns } from "../../hooks/statusLogin";
import { useTokenWebUser } from "../../hooks/tokenLogin";
import { useUserNameUser } from "../../hooks/usernameLogin";
import { apiloguin } from "../../services/api";
import { EmailButton, PasswordButton } from "./styles";
import { ButtonsStyles } from "../../assents/globalStyles/buttons";
import { useUserPage } from "../../hooks/userPage";
import { useMenuIcons } from "../../hooks/menuIcons";
import { getMenuIncons } from "../../services/apifront";
import { FrontToken } from "../../assents/keys/FrontWebToken";


function LoginScreen(){
    const {PasswordUser, setPasswordUser} = usePasswordUser();
    const {UserNameUser, setUserNameUser} = useUserNameUser();
    const {UserPage, setUserPage} = useUserPage()
    const {TokenWebUser, setTokenWebUser} = useTokenWebUser();
    const {LoginUserInfo, setLoginUserInfo} = useLoginUserInfo();
    const {PersonalName, setPersonalName} = usePersonalName();
    const {MenuIcons, setMenuIcons} = useMenuIcons();

    const {LoginStatuns, setLoginStatuns} = useLoginStatuns();
    //const {bgid, setbgid} =useBackground()
    const getCSRFToken = async () => {
        const response = await axios.get('/getCSRFToken');
        axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
     };
        async function login(e) {
            
            try {
              const response = await apiloguin.post('/login', { "email": UserNameUser,
               "password":PasswordUser,
            "frontToken":FrontToken });
              localStorage.setItem('token', response.data.token);
              setLoginUserInfo(response.data.data.user)
              setTokenWebUser(response.data.data.token.original.access_token)
              setPersonalName(response.data.data.user.name)
              setLoginStatuns(1)
              console.log(PersonalName)

            } catch (err) {
              alert('Falha no login, tente novamente');
            }
            getMenuIncons()
          }
    return(
    <div>
        <>
        <div style={{
            height:"60vh",
        }}>
            <div>
                <div> 
                    <h1>Loguin </h1>
                    <p> Voce prescisa estar logado para poder usufluir deste projeto </p>
                </div>
                <div className={"a"} style={{
                    width:"95%",
                    padding:"5%",
                    alignContent:"center",
                    justifyContent:"center",
                }}>
                    <EmailButton type={"email"} autoComplete="off" placeholder={"Seu melhor Email "} onChange={e => setUserNameUser(e.target.value)}/>
                    <PasswordButton type={"password"} autoComplete="off" placeholder={"Sua Melhor Senha"} onChange={e => setPasswordUser(e.target.value)} />
                    <ButtonsStyles align="center" onClick={()=> login(3)} className={"btazul"}> Entrar </ButtonsStyles><br /><br />
                    <ButtonsStyles align="center" onClick={()=> setUserPage(2) } className={"btred"}> Quero me Cadastrar </ButtonsStyles><br /><br />
                </div>
            </div>
        </div>
        </>
    </div>
    )
}


export default function LoguinUi (){
    return(
        <>
        <div>
            <ContentBoxStyle className={'bgimage bg3'}>
                <div className='container pensamento'>
                    <div id='Container'>
                        <LoginScreen />
                    </div>
                </div>
            </ContentBoxStyle>
        </div>
        </>
    )
}