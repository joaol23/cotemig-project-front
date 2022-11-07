import { styled } from "@mui/material";

export const HeaderContainer = styled('div')`
    width: 100%;
    height: 110px;
    box-shadow: 2px 2px 2px rgb(230, 230, 230);
`

export const LogoContainer = styled('div')`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme }) => theme.breakpoints.down('sm')}{      
        justify-content: flex-start;
    }
`

export const Logo = styled('img')`
    width: 150px;
    height: 100%;
    object-fit: cover;
`

export const ButtonComeBack = styled('button')`
    position: absolute;
    right: 0;
    padding: 0;
    width: 50px;
    height: 50px;
    border: none;
    background-color: #6b2b89;
    border-radius: 50%;
    margin-right: 20px;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
        width: 55px;
        height: 55px;
    }

    img { 
        height: 100%;
        max-width: 100%;
    }
`