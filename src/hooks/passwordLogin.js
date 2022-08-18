import React, { createContext, useContext, useState } from "react";
export const PasswordUserContext = createContext();
export default function PasswordUserProvider({children}){
    const[PasswordUser, setPasswordUser]= useState();
    return <PasswordUserContext.Provider value={{PasswordUser,setPasswordUser}}>{children}</PasswordUserContext.Provider>
}
export function usePasswordUser(){
    const context= useContext(PasswordUserContext)
    const {PasswordUser, setPasswordUser} = context;
    return {PasswordUser, setPasswordUser}

}