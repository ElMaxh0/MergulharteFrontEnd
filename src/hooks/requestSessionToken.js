import React, { createContext, useContext, useState } from "react";
export const TokenRequestContext = createContext();
export default function TokenRequestProvider({children}){
    const[TokenRequestid, setTokenRequestid]= useState(2);
    return <TokenRequestContext.Provider value={{TokenRequestid,setTokenRequestid}}>{children}</TokenRequestContext.Provider>
}
export function useTokenRequest(){
    const context= useContext(TokenRequestContext)
    const {TokenRequestid, setTokenRequestid} = context;
    return {TokenRequestid, setTokenRequestid}

}