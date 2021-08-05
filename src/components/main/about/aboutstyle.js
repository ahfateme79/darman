import styled from "styled-components";
// import { Texts } from "../../topic/topic";

export const Aboutstyle = styled.section`
    width:100%;
    min-height:90vh;
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    @media only screen and (min-width:700px) and (max-width:1000px){
        width:90%;
        margin:0 auto;
        }
`

export const ExplainAbout = styled.div`
    width:60%;
    height: auto;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
      @media only screen and (max-width:700px){
       width:100%;
       align-items:center;
       order:2;
    }

`
export const BoxesSec=styled.div`
    width:60%;
    height:auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    @media only screen and (max-width:700px){
      display:none;
    }


`
export const Boxes=styled.figure`
    width:80px;   
    margin:25px 0; 
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    @media only screen and (min-width:700px) and (max-width:1000px){
        width:100px;
        margin:10px 0;
        }
`
export const BoxMOdel=styled.a`
    width:100%;
    height:80px;
    border-radius:10px;
    box-shadow:0px 0px 30px #e6f3ff;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        background-color:#e6f3ff;
        box-shadow:0px 0px 40px #1894ff;
    }
`
export const BoxImg=styled.img`
    width:36px;
    height:36px;
`
export const BoxText=styled.figcaption`
    margin:10px 0;
    font-size:12px;
`
export const VideoSec=styled.div`
    width:40%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
      @media only screen and (max-width:700px){
       width:100%;
       order:1;
              justify-content:center;
        
    }
`

export const Video=styled.div`
    width:356.67px;
    height:356.67px;
    border-radius:40px;
    background-color:#e6f3ff;
    display:flex;
    justify-content:center;
    align-items:flex-start;
    margin:0 10%;
    overflow:hidden;
    position: relative;
    padding-top:45px;
          @media only screen and (max-width:700px){
       height:280px;
    }

`
export const Poster=styled.img`
    width:196.196px;
    height:390.94px;
    @media only screen and (max-width:700px){
       width:150px;
       height:300px
    }

`
export const PlayVideo=styled.a`
    width:113px;
    height:113px;
    position:absolute;
    top:50%;
    transform:translateY(-50%);
`
export const Play=styled.img`
    width:100%;
    height:100%;
`
