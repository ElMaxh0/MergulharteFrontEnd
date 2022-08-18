import React, { createContext, useContext, useState } from "react";
export const ImgUrlContext = createContext();
export default function ImgUrlProvider({children}){
    const[ImgUrl, setImgUrl]= useState("https://storage.mergulharte.app.br/storage/imguploadedfilesapp/99/aiSi3KoSYg3SppOPqjeLodiGu6PCZll79PbDJlt8f.png");
    return <ImgUrlContext.Provider value={{ImgUrl,setImgUrl}}>{children}</ImgUrlContext.Provider>
}
export function useImgUrl(){
    const context= useContext(ImgUrlContext)
    const {ImgUrl, setImgUrl} = context;
    return {ImgUrl, setImgUrl}

}