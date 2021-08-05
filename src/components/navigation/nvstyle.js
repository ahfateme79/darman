import styled from "styled-components";
import { Buttons } from "../buttons/button";
import { Link } from "react-router-dom";

export const Nvigation = styled.nav`
    width:100%;
    height:80px;
    display:flex;
    justify-content:space-between;
    align-items:center;
        @media only screen and (max-width:700px){
        position:fixed;
        top:0;
        left:0;
        right:0;
        z-index:3;
        background-color:#fff;
    }
    ${Buttons}{
        @media only screen and (max-width:700px){
               display:none;
        }
         @media only screen and (min-width:700px) and (max-width:1000px){
      margin-left:20px;
    }
    }

`
export const Closeopen = styled.button`
    width:25px;
    height:25px;
    border:none;
    background-color:transparent;
    display:none;
    cursor: pointer;
    transform:translate(-20vw,0);
    @media only screen and (max-width:700px){
        display:block;
        }

`
export const Closeopenicon = styled.img`
    width:100%;
    height:100%;
`

export const BtnSec = styled.div`
    width:20%;
    height:auto;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`
export const Menu = styled.div`
    width:60%;
    height:auto;
        @media only screen and (max-width:700px){
       position:absolute;
       width:100%;
       top:79px;
       background-color:#fff;
       height:70vh;
       box-shadow:2px 2px 5px #e6f3ff;
        display:${props => props.dispaly === 'flex' ? 'flex' : 'none'};
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    ${Buttons}{
        display:none;
        @media only screen and (max-width:700px){
        display:block;
        position:absolute;
        right:12vw;
        bottom:20px;}
    }


`
export const MenuList = styled.ul`
    width:100%;
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    @media only screen and (max-width:700px){
        flex-direction:column;
        width:90%;
        align-items:flex-end;
        justify-content:center;
        justify-content:flex-end;
        border-bottom:1px solid #e6f3ff;
        height:60%;
    }

`
export const MenuListItems = styled.li`
    margin:0 20px;
    &:nth-child(5){
        display:none;
        @media only screen and (max-width:700px){
        display:block;
    }
    }
    &:nth-child(6){
        display:none;
        @media only screen and (max-width:700px){
        display:block
        ;
    }
    }
    @media only screen and (max-width:700px){
        margin:20px 6%;
    }


`
export const Links = styled(Link)`
        color:black;
        padding-bottom:10px;
            @media only screen and (max-width:700px){
                padding-right:10px;
                color:gray;
            }

        &:hover{
            color:blue;
            border-bottom:3px solid blue;
                @media only screen and (max-width:700px){
                    border-bottom:none;
                    border-right:3px solid blue;
                }

        }
    @media only screen and (min-width:700px) and (max-width:1000px){
       font-size:.8rem; 
    }

`
