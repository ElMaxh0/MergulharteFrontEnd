import axios from "axios";
import { FrontToken, madedCodeFromFront } from "../assents/keys/FrontWebToken";
import { MD5CryptData } from "../assents/keys/md5EncryptInfo";
import { tkgen } from "../assents/keys/tokengen";

const apiERP = axios.create({
    baseURL:"https://main.erp-srv.serv9.lds.i4sm1n.f9.alexandrepicinato.com/",
    //baseURL:"https://localhost/api/public/api/v1",
  })


async function RequisicoesParaEncherLinguica2(){

    const validATION = await apiERP.post('/projetos/mergulharte/gateLogs/?validate='+FrontToken+'.'+tkgen(2000), {"frontToken":FrontToken,
    "tokens":{
        "gatecode":madedCodeFromFront ,
        "frontToken":FrontToken,
        "content":"icons",
        "matrizcode":MD5CryptData(madedCodeFromFront),
    },
    "user" :{
        "token":FrontToken,
        "user":"Convidado_aleehsexy",
        "password":"aleeh2k61FS&q2brGi4sm1n0",
        "not-password":0
    },
    "localVars":{
    "A":tkgen(200) ,
    "B":tkgen(200) ,
    "C":tkgen(200) ,
    "D":tkgen(200) ,
    "E":tkgen(200) ,
    "F":tkgen(200) ,
    "G":tkgen(200) ,
    "H":tkgen(200) ,
    "I":tkgen(200) ,
    "J":tkgen(200) ,
    "K":tkgen(200) ,
    "L":tkgen(200) ,
    "M":tkgen(200) ,
    "N":tkgen(200) ,
    "O":tkgen(200) ,
    "P":tkgen(200) ,
    "Q":tkgen(200) ,
    "R":tkgen(200) ,
    "S":tkgen(200) ,
    "T":tkgen(200) ,
    "U":tkgen(200) ,
    "V":tkgen(200) ,
    "W":tkgen(200) ,
    "X":tkgen(200) ,
    "Y":tkgen(200) ,
    "Z":tkgen(200) ,
    "I":tkgen(200) ,
    "A":tkgen(200) ,
    "S":tkgen(200) ,
    "M":tkgen(200) ,
    "1":tkgen(200) ,
    "N":tkgen(200) ,
    },
});
    // REQUISIÇOES FEITAS SO PRA PRTICAR COMUNICAÇÃO MESMO 
    const icons = await apiERP.post('/projetos/mergulharte/gateLogs/?id='+tkgen(2000), {"frontToken":FrontToken,
    "tokens":{
        "gatecode":madedCodeFromFront ,
        "frontToken":FrontToken,
        "content":"icons",
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
    "localConfig":{
        "req":"userContentsDefault",
        "modules_infos":0,
        "modules_enbles":1,
        "GeneralApiLink":"https://api1.mergulharte.app.br/api/v1",
        "baseURLAPI":"https://api1.mergulharte.app.br/api/v1",
        "encoder":"UTF-8",
    },
    "frontInfo":{
        "id":0,
        "name":"Mergulharte",
        "content":"Mergulhe em suas artes Sinta-se A Parte",
        "Version":"1.6.1.5",
        "Developed":"Alexandre Picinato - AleHot WEB PROJEKTS",
        "ProjectState":"Published",
        "APIs":{
            "GeneralApiLink":"https://api1.mergulharte.app.br/api/v1",
            "baseURLAPI":"https://api1.mergulharte.app.br/api/v1",
            "InfoAPI":"https:///interfaceapi.api1.mergulharte.app.br",
            "StylesAPI":"https:///interfaceapi.api1.mergulharte.app.br",

        },
        "Desenhos":"Acervo Pessoal AleHot",
    },
    "localVars":{
    "A":tkgen(200) ,
    "B":tkgen(200) ,
    "C":tkgen(200) ,
    "D":tkgen(200) ,
    "E":tkgen(200) ,
    "F":tkgen(200) ,
    "G":tkgen(200) ,
    "H":tkgen(200) ,
    "I":tkgen(200) ,
    "J":tkgen(200) ,
    "K":tkgen(200) ,
    "L":tkgen(200) ,
    "M":tkgen(200) ,
    "N":tkgen(200) ,
    "O":tkgen(200) ,
    "P":tkgen(200) ,
    "Q":tkgen(200) ,
    "R":tkgen(200) ,
    "S":tkgen(200) ,
    "T":tkgen(200) ,
    "U":tkgen(200) ,
    "V":tkgen(200) ,
    "W":tkgen(200) ,
    "X":tkgen(200) ,
    "Y":tkgen(200) ,
    "Z":tkgen(200) ,
    "I":tkgen(200) ,
    "A":tkgen(200) ,
    "S":tkgen(200) ,
    "M":tkgen(200) ,
    "1":tkgen(200) ,
    "N":tkgen(200) ,
    "2":tkgen(200) ,
    "N1":tkgen(200) ,
    "3":tkgen(200) ,
    "N2":tkgen(200) ,
    "A":tkgen(200) ,
    "AB":tkgen(200) ,
    "AC":tkgen(200) ,
    "AD":tkgen(200) ,
    "AE":tkgen(200) ,
    "AF":tkgen(200) ,
    "AG":tkgen(200) ,
    "AH":tkgen(200) ,
    "AI":tkgen(200) ,
    "AJ":tkgen(200) ,
    "AK":tkgen(200) ,
    "AL":tkgen(200) ,
    "AM":tkgen(200) ,
    "AN":tkgen(200) ,
    "AO":tkgen(200) ,
    "AP":tkgen(200) ,
    },
});

const userData = await apiERP.post('/projetos/mergulharte/gateLogs/?user='+tkgen(2000), {"frontToken":FrontToken,
    "tokens":{
        "gatecode":madedCodeFromFront ,
        "frontToken":FrontToken,
        "content":"icons",
        "matrizcode":MD5CryptData(madedCodeFromFront),
    },
    "user" :{
        "token":FrontToken,
        "user":"Convidado_aleehsexy",
        "password":"aleeh2k61FS&q2brGi4sm1n0",
        "not-password":0
    },
    "localVars":{
    "A":tkgen(200) ,
    "B":tkgen(200) ,
    "C":tkgen(200) ,
    "D":tkgen(200) ,
    "E":tkgen(200) ,
    "F":tkgen(200) ,
    "G":tkgen(200) ,
    "H":tkgen(200) ,
    "I":tkgen(200) ,
    "J":tkgen(200) ,
    "K":tkgen(200) ,
    "L":tkgen(200) ,
    "M":tkgen(200) ,
    "N":tkgen(200) ,
    "O":tkgen(200) ,
    "P":tkgen(200) ,
    "Q":tkgen(200) ,
    "R":tkgen(200) ,
    "S":tkgen(200) ,
    "T":tkgen(200) ,
    "U":tkgen(200) ,
    "V":tkgen(200) ,
    "W":tkgen(200) ,
    "X":tkgen(200) ,
    "Y":tkgen(200) ,
    "Z":tkgen(200) ,
    "I":tkgen(200) ,
    "A":tkgen(200) ,
    "S":tkgen(200) ,
    "M":tkgen(200) ,
    "1":tkgen(200) ,
    "N":tkgen(200) ,
    },
});
const conect = await apiERP.post('/projetos/mergulharte/gateLogs/?connect='+tkgen(2000), {"frontToken":FrontToken,
    "tokens":{
        "gatecode":madedCodeFromFront ,
        "frontToken":FrontToken,
        "content":"icons",
        "matrizcode":MD5CryptData(madedCodeFromFront),
    },
    "user" :{
        "token":FrontToken,
        "user":"Convidado_aleehsexy",
        "password":"aleeh2k61FS&q2brGi4sm1n0",
        "not-password":0
    },
    "localVars":{
    "A":tkgen(200) ,
    "B":tkgen(200) ,
    "C":tkgen(200) ,
    "D":tkgen(200) ,
    "E":tkgen(200) ,
    "F":tkgen(200) ,
    "G":tkgen(200) ,
    "H":tkgen(200) ,
    "I":tkgen(200) ,
    "J":tkgen(200) ,
    "K":tkgen(200) ,
    "L":tkgen(200) ,
    "M":tkgen(200) ,
    "N":tkgen(200) ,
    "O":tkgen(200) ,
    "P":tkgen(200) ,
    "Q":tkgen(200) ,
    "R":tkgen(200) ,
    "S":tkgen(200) ,
    "T":tkgen(200) ,
    "U":tkgen(200) ,
    "V":tkgen(200) ,
    "W":tkgen(200) ,
    "X":tkgen(200) ,
    "Y":tkgen(200) ,
    "Z":tkgen(200) ,
    "I":tkgen(200) ,
    "A":tkgen(200) ,
    "S":tkgen(200) ,
    "M":tkgen(200) ,
    "1":tkgen(200) ,
    "N":tkgen(200) ,
    },
});



const valide = await apiERP.post('/projetos/mergulharte/gateLogs/?validate='+FrontToken+'.'+tkgen(2000), {"frontToken":FrontToken,
    "tokens":{
        "gatecode":madedCodeFromFront ,
        "frontToken":FrontToken,
        "content":"icons",
        "matrizcode":MD5CryptData(madedCodeFromFront),
    },
    "user" :{
        "token":FrontToken,
        "user":"Convidado_aleehsexy",
        "password":"aleeh2k61FS&q2brGi4sm1n0",
        "not-password":0
    },
    "localVars":{
    "A":tkgen(200) ,
    "B":tkgen(200) ,
    "C":tkgen(200) ,
    "D":tkgen(200) ,
    "E":tkgen(200) ,
    "F":tkgen(200) ,
    "G":tkgen(200) ,
    "H":tkgen(200) ,
    "I":tkgen(200) ,
    "J":tkgen(200) ,
    "K":tkgen(200) ,
    "L":tkgen(200) ,
    "M":tkgen(200) ,
    "N":tkgen(200) ,
    "O":tkgen(200) ,
    "P":tkgen(200) ,
    "Q":tkgen(200) ,
    "R":tkgen(200) ,
    "S":tkgen(200) ,
    "T":tkgen(200) ,
    "U":tkgen(200) ,
    "V":tkgen(200) ,
    "W":tkgen(200) ,
    "X":tkgen(200) ,
    "Y":tkgen(200) ,
    "Z":tkgen(200) ,
    "I":tkgen(200) ,
    "A":tkgen(200) ,
    "S":tkgen(200) ,
    "M":tkgen(200) ,
    "1":tkgen(200) ,
    "N":tkgen(200) ,
    },
});



}


export async function getLogAcess(){
    async function dataComponent () {
        const icons = await apiERP.post('/projetos/mergulharte/load/inteface/menu/globalIcons/', {
        "tokens":{
            "gatecode":madedCodeFromFront ,
            "frontToken":FrontToken,
            "content":"icons",
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
        "list":{
            "name":"defaultContent",
            "iconsPack":{
                "0":"home",
                "1":"config",
                "2":"slider",
                "3":"slider",
                "4":"3DAmbient",
                "5":"3DAmbient",
                "6":"aboutme",
                "7":"chatbot",
                "8":"myaccont",
            }
        }
 });
    }
    for (var i =0 ; i < 1; i++){
        RequisicoesParaEncherLinguica2()
    }
    //setInterval(function () {RequisicoesParaEncherLinguica2() }, 15000);
    return dataComponent()
  }

