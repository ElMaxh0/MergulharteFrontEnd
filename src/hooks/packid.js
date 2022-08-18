import React, { createContext, useContext, useState } from "react";
export const PackidContext = createContext();
export default function PackidProvider({children}){
    const[Packid, setPackid]= useState(99);
    return <PackidContext.Provider value={{Packid,setPackid}}>{children}</PackidContext.Provider>
}
export function usePackid(){
    const context= useContext(PackidContext)
    const {Packid, setPackid} = context;
    return {Packid, setPackid}

}