import { styled } from "@mui/material";

export const Container = styled('div')`
    width: 100%;
    border: 1px solid;
    border-radius: 15px;
    box-shadow: 2px 2px 3px gray;    
`

export const ContainerHeader = styled('div')`    
    display: flex;      
    justify-content: center;
    align-items: center;    
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    width:100%;
    background-color: #C0BDF7;
    padding: ${({ theme }) => theme.spacing(1)} 0;
    border-bottom: 1px solid;
`

export const ContainerRows = styled('div')`
    width:100%;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(1)} 0;
    border-bottom: 1px solid;
    border-color: #E8E7F3;
`

export const EachHeader = styled('div')`
    text-align: center;
    font-size: 28px;
`

export const EachItem = styled('div')`
    width:33%;
    text-align: center;
    font-size: 20px;
`