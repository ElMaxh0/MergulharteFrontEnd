import React from "react";
import styled from "styled-components";
import { IconesMenuStyles, IconImgMenuStyles, MenuBar, MenuScrollStyles } from "../../assents/globalStyles/menu";
import { useMenuIcons } from "../../hooks/menuIcons";
import { useUserPage } from "../../hooks/userPage";
export default function Menu(){
    const {UserPage, setUserPage} = useUserPage()
    const {MenuIcons, setMenuIcons} = useMenuIcons();
    const MenuContainer =styled.div `
        display:flex;
        w"id"th:100%;
        transform:scale(0.99);
        padding:1%
        justify-content:center;
        & :nth-child(${UserPage}){
            background:rgb(29, 102 ,237);
            border-radius: 25px;
        }
        & :hover{
            transform:scale(1.3);
        }`
    var counter =0;
    return(
        <>
        <MenuScrollStyles>
            <div>
                <div>
                    <MenuBar>
                        <MenuContainer>
                        {
                            MenuIcons.map( data =>
                            <>
                            <IconesMenuStyles  style={{
                                    if (UserPage = data.id) {
                                        return" background-color:blue;"
                                    }
                                }
                                }>
                                <IconImgMenuStyles src={data.icon} onClick={() => setUserPage(data.id)} id={data.id}/>
                            </IconesMenuStyles>
                            </>)
                        }
                        </MenuContainer>
                    </MenuBar>
                </div>
            </div>
        </MenuScrollStyles>
        </>
    )
}