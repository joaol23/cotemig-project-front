import { styled } from "@mui/material";

export const ImageFull = styled('img')`
    max-width: 100%;
    height: 100%;
    max-height: 500px;
    position: relative;
    box-shadow: 2px 2px 5px gray;
`

export const ContainerImage = styled('div')`
    max-width: 100%;
    height: 100%;
    max-height: 500px;
    position: relative;    
`

export const CaptionMeme = styled('div')`
    position: absolute;

    &:hover {
        border: solid 1px;
        padding: 2px;
        cursor: pointer;
    }
`