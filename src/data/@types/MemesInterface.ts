export interface MemeProps {
    id: string,
    name: string,
    url: string,
    width: number,
    height: number,
    box_count: number,
}

export interface CaptionTextMeme {
    id: number,
    text: string,
    idImage: number,
    position: positionText,
    color: string,
    fontSize: number,
}

type positionText = {
    x: number,
    y: number
}
