import React, { createContext, useContext, useState } from "react";
export const MenuIconsContext = createContext();
export default function MenuIconsProvider({children}){
    const[MenuIcons, setMenuIcons]= useState(
        [
            {
                "id":1,
                "icon":"https://cdn0.iconfinder.com/data/icons/essentials-solid-glyphs-vol-1/100/House-Home-Property-512.png",
                "conteudo":1
            },
            {
                "id":2,
                "icon":"https://cdn0.iconfinder.com/data/icons/set-app-incredibles/24/Configuration-01-256.png",
                "conteudo":1
            },
            {
                "id":3,
                "icon":"https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-197_photos_images-512.png",
                "conteudo":1
            },
            {
                "id":4,
                "icon":"https://cdn2.iconfinder.com/data/icons/picons-basic-2/57/basic2-197_photos_images-512.png",
                "conteudo":1
            },
            {
                "id":5,
                "icon":"https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_3d_rotation_48px-256.png",
                "conteudo":1
            },
            {
                "id":6,
                "icon":"https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_3d_rotation_48px-256.png",
                "conteudo":1
            },
            {
                "id":7,
                "icon":"https://cdn0.iconfinder.com/data/icons/news-and-magazine/512/about_us-512.png",
                "conteudo":1
            },
            {
                "id":8,
                "icon":"https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami2-01-256.png",
                "conteudo":1
            },
            {
                "id":9,
                "icon":"https://cdn2.iconfinder.com/data/icons/avatars-60/5985/17-Cashier-256.png",
                "conteudo":1
            }
        
        ]
        )
    return <MenuIconsContext.Provider value={{MenuIcons,setMenuIcons}}>{children}</MenuIconsContext.Provider>
}
export function useMenuIcons(){
    const context= useContext(MenuIconsContext)
    const {MenuIcons, setMenuIcons} = context;
    return {MenuIcons, setMenuIcons}

}