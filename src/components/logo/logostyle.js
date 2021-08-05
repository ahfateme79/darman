import styled from "styled-components";

export const Logo = styled.div`
    width:${props => props.widthlogo === '20%' ? '20%' : '100%'};
    height:auto;
    display:flex;
    justify-content:${props => props.jcontent === 'start' ? 'flex-start' : 'flex-end'};
    align-items:center;
    @media only screen and (max-width:700px){
        width:50%;
        justify-content:${props => props.jcontentcenter === 'center' ? 'center':null};
        margin:0 10px;
    }
   

`
export const LogoTextSec = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    margin-right:10px;
`
export const LogoTextBold = styled.span`
    font-size:18px;
    font-weight:bold;
        @media only screen and (max-width:700px){
        font-size:14px;
    }
            @media only screen and (min-width:700px) and (max-width:1000px){
        font-size:13px;
    }


`
export const LogoTextLight = styled.p`
    line-height:2;
    font-size:13px;
    color:gray;
        @media only screen and (max-width:700px){
        font-size:11px
    }
    @media only screen and (min-width:700px) and (max-width:1000px){
        font-size:10px;
    }

`
export const LogoImg = styled.img`
    width:30px;
`
