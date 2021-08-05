import styled from "styled-components";
import { Buttons } from "../buttons/button";

export const Form=styled.form`
    width:70%;
    height:70px;
    display:flex;
    align-items:center;
    background-color:#f9f9f9;
    border-radius:10px;
    justify-content:center;
    margin:10px 0;
         @media only screen and (max-width:700px){
      width:80%;
      height:50px;
    }
    ${Buttons}{
        @media only screen and (max-width:1000px){
        width:84px;
        height:38px;
        font-size:12px;
        }
    }

`
export const Input=styled.input`
    width:60%;
    padding:0 15px;
    border:none;
    outline:none;
    background-color:transparent;
    text-align:right;
`