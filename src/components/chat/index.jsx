
import React from 'react';
import { render } from 'react-dom';
import { BotContainer, BoxChat, ChatbotBoxSpace } from './styles'
import { pergunta, teste } from './chat.jsx'
function Bot (){
    setTimeout(
        function() {
          pergunta(teste, 0);
        },
        1900
    );
return(           
  <BotContainer>
      <BoxChat id={"boxchat"}>
          <ChatbotBoxSpace id={"chatbotmaster"}>
          <div id={"newquest0"} />  
          </ChatbotBoxSpace>
      </BoxChat>
  </BotContainer>
)
}
export {
    Bot
}
