import React from 'react';
import { render } from 'react-dom';
import {data} from '../../services/apichat'
import './assets/css/styles.css'
import './assets/css/scroll.css'
import { MsgBot, MsgUser } from './styles';

//Control Vars
let escolhas = []
let teste=0;
let totaldeperguntas = data["Total-Perguntas"];
//SourceBot
let teste1 =0
function pergunta (teste1){
    console.log(teste1,);
    const perguntacorpoimg = (
        <div>
          <div class="boxdamensagem recebida client">
            <div class="recebidoa"></div>
            <MsgBot>
            <p>{data["perguntas"][teste1]["duvida"]}</p>
            <div className={"opcoesimg"}>
              <center>
            <img  onClick={() => resposta(0, teste1,1)}className={"escolha"} src={data["perguntas"][teste1]["opcoes"][0]}></img>
            <img  onClick={() => resposta(1, teste1,1)}className={"escolha"} src={data["perguntas"][teste1]["opcoes"][1]}></img>
            <img  onClick={() => resposta(2, teste1,1)}className={"escolha"} src={data["perguntas"][teste1]["opcoes"][2]}></img>
            </center>
          </div>
          </MsgBot>
          </div><div id={"resposta"+teste1}></div></div>);

    const perguntacorposelect = (
                <div>
                  <div class="boxdamensagem recebida client">
                    <div class="recebidoa"></div>
                    <MsgBot>
                    <p>{data["perguntas"][teste1]["duvida"]}</p>
                      <option  onClick={() => resposta(0, teste1 ,2)}className={"escolhaop"}>{data["perguntas"][teste1]["opcoes"][0]}</option><br></br>
                      <option  onClick={() => resposta(1, teste1 ,2)}className={"escolhaop"}>{data["perguntas"][teste1]["opcoes"][1]}</option><br></br>
                      <option  onClick={() => resposta(2, teste1, 2)}className={"escolhaop"}>{data["perguntas"][teste1]["opcoes"][2]}</option><br></br>
                  </MsgBot>
                  </div><div id={"resposta"+teste1}></div></div>);
              const processing  = (
                <div>
                  <div class="boxdamensagem recebida client">
                    <div class="recebidoa"></div>
                    <MsgBot>
                    <p>{"Aguarde Processando Uma Resposta"}</p>
                  </MsgBot>
                  </div><div id={"resposta"+teste1}></div></div>);
          if((data["perguntas"][teste1]["type"]) == 1){
            render(processing, document.getElementById('newquest'+teste1))
            setTimeout(
              function() {
                render(perguntacorpoimg, document.getElementById('newquest'+teste1))
              },
              1200
          );
          }
        else if((data["perguntas"][teste1]["type"])== 2){
          render(processing, document.getElementById('newquest'+teste1))
          setTimeout(
            function() {
              render(perguntacorposelect, document.getElementById('newquest'+teste1))
            },
            1200
        );
          }
          setTimeout(
            function() {
              scroll((teste*4))
            }
            .bind(this),
            1400
        );
          
}
function resposta (datass,teste0,datatipo){
    console.log("CallBack Function newquest"+teste0)
    console.log('CallBack Function resposta'+teste0)
    const respostacorpoimg= (
        <div>
        <div class="boxdamensagem enviada client">
        <div class="enviada"></div><MsgUser id={teste}>
          <img class="escolha" src={data["perguntas"][teste]["opcoes"][datass]}></img>
        </MsgUser>
      </div>
      <div id={"newquest"+(teste0+1)}></div>
      </div>
    );
    const respostacorpotxt= (
      <div>
      <div class="boxdamensagem enviada client">
      <div class="enviada"></div><MsgUser id={teste}>
        <p>{data["perguntas"][teste]["opcoes"][datass]}</p>
      </MsgUser>
    </div>
    <div id={"newquest"+(teste0+1)}></div>
    </div>
  );
  const sending = (
    <div>
    <div class="boxdamensagem enviada client">
    <div class="enviada"></div><MsgUser id={teste}>
      <p>{"Processando Resposta "}</p>
    </MsgUser>
  </div>
  <div id={"newquest"+(teste0+1)}></div>
  </div>
);

    
    
    
    var totalrespondida=escolhas.length
    

    if (teste0 == teste){
      if(datatipo == 1){
        render (sending , document.getElementById('resposta'+teste0))
        setTimeout(
          function() {
            render (respostacorpoimg , document.getElementById('resposta'+teste0))
            nextQuest();
          },
          1200
      );
        
      }
      else if (datatipo == 2){
        render (sending , document.getElementById('resposta'+teste0))
        setTimeout(
          function() {
            render (respostacorpotxt , document.getElementById('resposta'+teste0))
            nextQuest();
          },
          1200
      );
       
      }
function nextQuest (){
  
  escolhas.push((datass));
  console.log(escolhas)
  console.log("RESPOSTA GRAVADA:"+datass)
  console.log("VOCE SELECIONOU A OPCAO:"+datass)
  teste0++
  teste++
  if(teste0 == (totaldeperguntas-1)){
    name(escolhas, teste0);
  }
  else{
    scroll((teste0))
    setTimeout(
      function() {
        pergunta(teste0, datass);
        scroll((teste0*4))
      }
      .bind(this),
      900
  );
    
  }
  }
  
}
else{
  console.log("Voce Nao pode Gravar mais de uma vez a mesma Resposta !")
  console.log("VOCE SELECIONOU A OPCAO:"+datass)
  selecaoinvalida(teste0);
}
}
function name(escolhas,teste0){
    let datanome = prompt("Como podemos lhe chamar ?");
    console.log(teste0);
    const perguntacorpo = (
        <div>
          <div class="boxdamensagem recebida client">
            <div class="recebido"></div>
            <MsgUser id={"FormCheck"}>
              <div>
                <p> Ola {datanome} suas respostas do formulario foram </p>
                <p>{escolhas.join(',')}</p>
            <option  onClick={() => enviadados(escolhas, escolhas)}className={"escolhaop"}>Guardar Dados</option><br></br>
          </div>
          </MsgUser>
          </div>
          <div id={"resposta"+teste0}></div></div>);
          scroll(teste0)
          render(perguntacorpo, document.getElementById('newquest'+teste0))

}
function selecaoinvalida(teste0){
const respostainvalida= (
  <div>
  <div class="boxdamensagem enviada client">
  <div class="recebido"></div><div class="tetasdamensagemenviada">
    <p>Resposta Invalida . Voce Nao Pode Selecionar duas vezes a mesma opção </p>
  </div>
</div>
<div id={"newquest"+(teste0)}></div>
</div>);
}
function enviadados(){
  const perguntacorpo = (
    <div>
      <div class="boxdamensagem recebida client">
        <div class="recebido"></div>
        <div class="tetasdamensagemrecebida" >
        <p>
          Internal Error
          [185.27.134.99]MySQL said:     
          #1146 - Table 'projetotestechatbot' doesn't exist 


          <option  onClick={() => next()}className={"escolhaop"}>Voltar A Tela Principal</option><br></br>
        </p>
      </div>
      </div></div>);
      escreversrc("Falha Interna Tente Novamente Mais Tarde", "estado")
render(perguntacorpo, document.getElementById('newquest0'))

  console.log("Failed to add data on MySqly Database [sql188.infinityfree.net]")
}
function escreversrc(conteudo, nomedadiv) {
  var letra = conteudo.split('').reverse();
  var escrever = setInterval(function() {
    if (!letra.length) return clearInterval(escrever);
    var letras = letra.pop();
    nomedadiv.innerHTML += letras;
  }, 100);
}
function scroll(scrolt){
  //window.scroll(0, (scrolt*400))
  document.getElementById('chatbotmaster').scroll(0, (scrolt*400));
}
function next(){
  window.location.reload();
} 
function moreSpace (data){
  document.getElementById("chatbotmaster").style.width(data)
}
export{
    pergunta,
    resposta,
    teste,

}