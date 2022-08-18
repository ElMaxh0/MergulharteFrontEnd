import React, { createContext, useContext, useState } from "react";
export const ImgPackDataContext = createContext();
export default function ImgPackDataProvider({children}){
    const[ImgPackData, setImgPackData]= useState(
        [
            {
                id: 1,
                image: "https://storage.mergulharte.app.br/storage/imguploadedfilesapp/99/aj4q18huaQdgHBxxUBhEJJcDi539ho69bGJDdePq7.png",
                serverid: "1",
                url: "99",
            },
            {
                id: 2,
                image: "https://storage.mergulharte.app.br/storage/imguploadedfilesapp/99/a5VDhPvtxidKhRz0PHDfULO0twB2xBRmaBV0EBrZp.png",
                serverid: "2",
                url: "99",
            },
            {
                id: 3,
                image: "https://storage.mergulharte.app.br/storage/imguploadedfilesapp/99/a9oFTMVA2llzeJWTIVZePw2LUZ43m4Df8zZwlOCcu.png",
                serverid: "3",
                url: "99",
            },
            {
                id: 4,
                image: "https://storage.mergulharte.app.br/storage/imguploadedfilesapp/99/aStfxrLKcZ3qbYryyA3ecCmsN2IERR6i69nhfk27c.png",
                serverid: "4",
                url: "99",
            },
        ])
    return <ImgPackDataContext.Provider value={{ImgPackData,setImgPackData}}>{children}</ImgPackDataContext.Provider>
}
export function useImgPackData(){
    const context= useContext(ImgPackDataContext)
    const {ImgPackData, setImgPackData} = context;
    return {ImgPackData, setImgPackData}

}