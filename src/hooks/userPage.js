import React, { createContext, useContext, useState } from "react";
export const UserPageContext = createContext();
export default function UserPageProvider({children}){
    const[UserPage, setUserPage]= useState(1);
    return <UserPageContext.Provider value={{UserPage,setUserPage}}>{children}</UserPageContext.Provider>
}
export function useUserPage(){
    const context= useContext(UserPageContext)
    const {UserPage, setUserPage} = context;
    return {UserPage, setUserPage}

}