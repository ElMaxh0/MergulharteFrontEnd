import React from "react";
import styledComponents from "styled-components";
import styled from "styled-components";

const MenuBar = styled.nav `
background: rgba(255,252,255,1);
width:100%;
justify-content:space-around;
padding:1.65rem;
font-size:1.6rem;
display:flex;
align-items: center;

& :nth-child(2){
    font-size:2.5rem;
}
`
const MenuScrollStyles = styled.div `
width:100%;


& > div {
    overflow-x :scroll;
}
`
const IconesMenuStyles= styled.div `
width:100%;
height: 100%;


`
const IconImgMenuStyles = styled.img `
width:100%;

`

export{
    MenuBar,
    IconesMenuStyles,
    IconImgMenuStyles,
    MenuScrollStyles,
}