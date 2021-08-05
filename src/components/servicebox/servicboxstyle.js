import styled from "styled-components";

export const RightSec = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-top:30px;
             @media only screen and (max-width:700px){
      width:100%;
    }

`
export const Headtopicsec = styled.div`
    width:80%;
    text-align:right;
    margin:20px auto;
    padding-right:30px;
     @media only screen and (max-width:700px){
     padding:0;
     margin:15px;
    }

`
export const Headtopic = styled.h2`
    color:#1894ff;
    border-right:4px solid #00de9a;
    font-size:20px;
    padding-right:12px;
        @media only screen and (max-width:700px){
        font-size:13px;
    }


`
export const Flex = styled.div`
    width:80%;
    height:auto;
    display:flex;
    margin:20px auto;
    flex-wrap:wrap;
    align-items:center;
    justify-content:space-evenly;
         @media only screen and (max-width:700px){
     margin:20px 0;
     width:100%;
    }
`
export const FlexBox = styled.figure`
    width:160px;
    height:160px;
    border-radius:20px;
    box-shadow:0px 0px 30px #e6f3ff;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin:30px 50px;
             @media only screen and (max-width:700px){
      width:120px;
      height:120px;
      margin:20px 15px;
    }
     &:hover{
            box-shadow:0px 0px 20px rgb(129, 129, 235)
        }
        &:hover figcaption{
            color:#1894ff;
        }

`
export const FLexboximg = styled.img`
    width:64px;
    height:62px;
    @media only screen and (max-width:700px){
      width:50px;
      height:50px;
    }

`
export const FlexboxText = styled.figcaption`
    font-size:13px
`
