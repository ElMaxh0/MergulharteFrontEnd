import React from "react";
import { useLoginUserInfo } from "../../hooks/logueduserInfo ";
import "./styles.css"

function AccountInfo(){
    const {LoginUserInfo, setLoginUserInfo} = useLoginUserInfo();
    return(
        <>
        <div style={{
            height:"100%",overflow:"hidden"
        }}>
            <div>
                <div>
                    <div className="imgusercontainer">
                        <img className={"userimage"} src={"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/4-Writer-256.png"} />
                    </div>
                    <div className={"userinfo"}>
                        <div>
                            <h1>{LoginUserInfo.name}</h1>
                            <h4>{LoginUserInfo.date_birth}</h4>
                        </div>
                        <div style={{
                                textAlign:"left"
                            }}>
                                <h2>Dados de Contato </h2>
                                <hr />
                                <p> Matricula no sistema {LoginUserInfo.phone}</p>
                                <p>Email : {LoginUserInfo.email}</p>
                            </div>
                        <div style={{
                            float:"left",
                        }}>
                            <>
                            <div style={{
                                textAlign:"left"
                            }}>

                            </div>
                            <div style={{
                                textAlign:"left"
                            }}>
                                <h2>Atividades Extras </h2>
                                <hr />
                                <p> Algum Serviço Legal</p>
                                <p>Algum Hobbie Legal </p>
                            </div>
                            <div style={{
                                textAlign:"left"
                            }}>

                            </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export{
    AccountInfo
}