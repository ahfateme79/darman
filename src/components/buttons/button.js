import styled from "styled-components";


export const Buttons = styled.button`
    width:170px;
    height:52px;
    background-color:${props => props.btnColor === 'primary' ? '#1894ff' : '#e6f3ff'};
    color:${props => props.textColor === 'transparent' ? 'white' : '#1894ff'};
    border:${props => props.btnBoredr === 'none' ? 'none' : '2px solid #1894ff'};
    border-radius:10px;
    font-size:16px;
    font-weight:bold;
    &:hover{
            background-color:${props => props.btnColor === 'primary' ? '#e6f3ff' : '#1894ff'};
            color:${props => props.textColor === 'transparent' ? '#1894ff' : 'white'};
    }
`
