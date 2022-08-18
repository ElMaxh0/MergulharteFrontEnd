import React, { createContext, useContext, useState } from "react";
export const TermsContext = createContext();
export default function TermsProvider({children}){
    const[termstate, settermstate]= useState(0);
    return <TermsContext.Provider value={{termstate,settermstate}}>{children}</TermsContext.Provider>
}
export function useTerms(){
    const context= useContext(TermsContext)
    const {termstate, settermstate} = context;
    return {termstate, settermstate}

}