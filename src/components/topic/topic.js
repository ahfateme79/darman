import styled from "styled-components";

export const Texts = styled.div`
    width:${props => props.width === '100%' ? '100%' : '70%'};
    height:auto;
    text-align:right;
      @media only screen and (max-width:700px){
       width:100%;
       padding:40px;
    }

`
export const Topic = styled.h2`
    color:#1894ff;
    padding-right:12px;
    border-right:4px solid #00de9a;
    font-size:20px;
        @media only screen and (max-width:700px){
      font-size:15px;
    }


`
export const TopicPara = styled.p`
   padding-left:${props => props.padding === '35%' ? '35%' : '0'};
    line-height:2;
    text-align:right;
    margin:20px 0;
    font-size:14px;
    font-weight:lighter;
        @media only screen and (max-width:700px){
      padding-left:0;
          font-size:11.8px;
    }

`