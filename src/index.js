import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserPageProvider from './hooks/userPage';
import "./assents/css/backgrounds.css"
import "./assents/css/buttons.css"
import "./assents/css/global.css"
import "./assents/css/scroll.css"
import "./assents/css/loadingContent.css"
import { render } from 'react-dom';
import ImgPackDataProvider from './hooks/ImgPackDataHook';
import AlturaProvider from './hooks/altura';
import LarguraProvider from './hooks/largura';
import ComprimentoProvider from './hooks/comprimento';
import BackgroundProvider from './hooks/background';
import PackidProvider from './hooks/packid';
import UserNameUserProvider from './hooks/usernameLogin';
import PasswordUserProvider from './hooks/passwordLogin';
import DatNascProvider from './hooks/datanascLogin';
import CadNameProvider from './hooks/cadName';
import LoginUserInfoProvider from './hooks/logueduserInfo ';
import LoginStatunsProvider from './hooks/statusLogin';
import PersonalNameProvider from './hooks/personalName';
import PhoneCadProvider from './hooks/phoneCad';
import TokenWebUserProvider from './hooks/tokenLogin';
import MenuIconsProvider from './hooks/menuIcons';
import TokenRequestProvider from './hooks/requestSessionToken';
import { getMenuIncons } from "./services/apifront";


//const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <React.StrictMode>
    <TokenRequestProvider>
      <UserNameUserProvider>
        <PasswordUserProvider>
          <DatNascProvider>
            <CadNameProvider>
              <LoginUserInfoProvider>
                <LoginStatunsProvider>
                  <PersonalNameProvider>
                    <PhoneCadProvider>
                      <TokenWebUserProvider>
                        <UserPageProvider>
                          <MenuIconsProvider>
                            <BackgroundProvider>
                              <PackidProvider>
                                <ImgPackDataProvider>
                                  <AlturaProvider>
                                    <LarguraProvider>
                                      <ComprimentoProvider>
                                        <App />
                                      </ComprimentoProvider>
                                    </LarguraProvider>
                                  </AlturaProvider>
                                </ImgPackDataProvider>
                              </PackidProvider>
                            </BackgroundProvider>
                          </MenuIconsProvider>
                        </UserPageProvider>
                      </TokenWebUserProvider>
                    </PhoneCadProvider>
                  </PersonalNameProvider>
                </LoginStatunsProvider>
              </LoginUserInfoProvider>
            </CadNameProvider>
          </DatNascProvider>
        </PasswordUserProvider>
      </UserNameUserProvider>
    </TokenRequestProvider>
  </React.StrictMode>
, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
getMenuIncons();