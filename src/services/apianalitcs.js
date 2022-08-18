import axios from "axios";
import { FrontToken, madedCodeFromFront } from "../assents/keys/FrontWebToken";
import { MD5CryptData } from "../assents/keys/md5EncryptInfo";
import { tkgen } from "../assents/keys/tokengen";

const apiERP = axios.create({
    baseURL:"https://main.erp-srv.serv9.lds.i4sm1n.f9.alexandrepicinato.com/",
    //baseURL:"https://localhost/api/public/api/v1",
  })



export async function logAnalitcsAcessQuery(){
    async function dataComponent () {
        const icons = await apiERP.post('/analitcs/', {
        "tokens":{
            "gatecode":madedCodeFromFront ,
            "frontToken":FrontToken,
            "conecttype":"JSON",
            "matrizcode":MD5CryptData(madedCodeFromFront),
        },
        "user" :{
            "token":FrontToken,
            "user":"Convidado_aleehsexy",
            "password":"aleeh2k61FS&q2brGi4sm1n0",
            "not-password":0
        },
        "local":{
            "userFuvk":tkgen(200)
        },
        "sysAnalitcs":"mergulharte",
        "webToken":FrontToken
 });
    }
    for (var i =0 ; i < 1; i++){
    }
    //setInterval(function () {RequisicoesParaEncherLinguica2() }, 15000);
    return dataComponent()
  }

