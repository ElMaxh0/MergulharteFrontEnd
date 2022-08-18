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
import { EmailButton, PasswordButton, UsernameButton } from "./styles";
import { ButtonsStyles } from "../../assents/globalStyles/buttons";
import { useCadName } from "../../hooks/cadName";
import { useDatNasc } from "../../hooks/datanascLogin";
import { tkgenum } from "../../assents/keys/tokengen";
import { useUserPage } from "../../hooks/userPage";


function CadScreen(){
    const {DatNasc, setDatNasc} = useDatNasc();
    const {PasswordUser, setPasswordUser} = usePasswordUser();
    const {UserNameUser, setUserNameUser} = useUserNameUser();
    const {TokenWebUser, setTokenWebUser} = useTokenWebUser();
    const {UserPage, setUserPage} = useUserPage()
    const {CadName, setCadName} = useCadName();
    //const {bgid, setbgid} =useBackground()
    const getCSRFToken = async () => {
        const response = await axios.get('/getCSRFToken');
        axios.defaults.headers.post['X-CSRF-Token'] = response.data.CSRFToken;
     };
        async function cad(e) {

            try {
              const response = await apiloguin.post('/cadastro', { "name": CadName, "password":PasswordUser, "email":UserNameUser, "date_birth":DatNasc ,"phone":tkgenum(71) });
              console.log(response.data.token)
              localStorage.setItem('token', response.data.token);
              UserPage(1)
            } catch (err) {
              alert('Falha no login, tente novamente');
            }
          }
    return(
    <div>
        <>
        <div style={{
            height:"60vh",
        }}>
            <div>
                <div> 
                    <h1>Cadastro</h1>
                    <p> Que bom lhe ver por aqui , estou ansioso para que conheça meu projeto =D</p>
                </div>
                <div style={{
                    width:"95%",
                    padding:"5%",
                    alignContent:"center",
                    justifyContent:"center",
                }}>
                    <UsernameButton type={"email"} autoComplete="off" placeholder={"Seu melhor Nome "} onChange={e => setCadName(e.target.value)}/>
                    <EmailButton type={"email"} autoComplete="off" placeholder={"Seu melhor Email "} onChange={e => setUserNameUser(e.target.value)}/>
                    <PasswordButton type={"password"} autoComplete="off" placeholder={"Sua Melhor Senha"} onChange={e => setPasswordUser(e.target.value)} />
                    <p>Data de Nascimento : </p><input type={"date"} autoComplete="off" onChange={e => setDatNasc(e.target.value)} />
                    <ButtonsStyles align="center" onClick={()=> cad(3)} className={"btazul"}> Cadastrar </ButtonsStyles><br /><br />
                    <ButtonsStyles align="center" onClick={()=> setUserPage(1)} className={"btazul"}> Loguin</ButtonsStyles><br /><br />

                </div>
            </div>
        </div>
        </>
    </div>
    )
}


export default function RegistrerUi(){
    return(
        <>
        <div>
            <ContentBoxStyle className={'bgimage bg3'}>
                <div className='container pensamento'>
                    <div id='Container'>
                        <CadScreen />
                    </div>
                </div>
            </ContentBoxStyle>
        </div>
        </>
    )
}