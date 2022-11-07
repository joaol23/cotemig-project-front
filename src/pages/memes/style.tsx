import { styled } from "@mui/material";

export const Container = styled('div')`
    margin: 15px auto;
    width: 100%;
    max-width: 1280px;
`;

export const ContainerFull = styled('div')`
    width: 100%;
    margin: 25px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ModalBody = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40%;
    padding: 20px;
    border-radius: 15px;
    background-color: lightgrey;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${({ theme }) => theme.breakpoints.down('md')}{      
        width: 80%;
    }
`

export const InputMeme = styled('input')`
    width: 80%;
    border: 1px solid black;
    border-radius: 15px;
    padding: 10px;
    margin: 10px 0;
`