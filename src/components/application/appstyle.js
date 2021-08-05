import styled from "styled-components";


export const Mobileappsec = styled.section`
    width:100%;
    min-height:70vh;
    display:flex;
    align-items:center;
    background-color:#0098ff;
    flex-wrap:wrap;
     @media only screen and (max-width:700px){
        justify-content:center;
        min-height:50vh;
    }

`
export const Mobileapp = styled.div`
    width:50%;
    overflow:hidden;
    display:flex;
    justify-content:center;
    align-items:flex-end;
       @media only screen and (max-width:700px){
       width:100%;
        order:2;
    }

`
export const Mobileappimg = styled.img`
    width:310px;
    height:627px;
    transform:translateY(45px);
         @media only screen and (max-width:700px){
      width:229px;
      height:465px;
    }

`
export const Formsec = styled.div`
    width:50%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
          @media only screen and (max-width:700px){
       width:100%;
       order:1;    
    }

`
export const Donapptext = styled.div`
    margin:20px 0;
    width:70%;
    text-align:right;

`
export const Donapptextbld = styled.h2`
    color:#fff;
    line-height:2;
     @media only screen and (max-width:700px){
      font-size:16px;
    }
`
export const Donapptextlight = styled.p`
    color:#fff;
    font-size:13px;
    line-height:2;
    margin:20px 0;
         @media only screen and (max-width:700px){
      font-size:12px;
    }

`
export const Donappssec = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    margin:30px 0;
    justify-content:center;
`
export const Donapps = styled.a`
    margin:12px;
    width:180px;
    height:55px;
    @media only screen and (max-width:1000px){
       &:last-child{
           display:none;
       }
    }


`
export const Appimg = styled.img`
    width:100%;
    height:100%
`
