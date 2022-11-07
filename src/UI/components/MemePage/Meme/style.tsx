import { styled } from "@mui/material";

export const ContainerMeme = styled('div')`
    width: 20%;
    height: 100px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    ${({ theme }) => theme.breakpoints.down('md')}{                    
        width: 33%;
    }

    ${({ theme }) => theme.breakpoints.down('sm')}{                    
        width: 50%;
    }
`

export const Image = styled('img')`
    width: 50%;
    height: 100%;
    box-shadow: 2px 2px 5px gray;
    transition: 0.5s;
    border: solid;
    border-radius: 5px;
    cursor: pointer;    

    &:hover {
        opacity: 0.5;
    }
`