import { CaptionTextMeme, MemeProps } from '../../../../data/@types/MemesInterface';
import { ContainerImage, ImageFull, CaptionMeme } from './style';

type MemeFullProps = {
    meme: MemeProps,
    createCaptionMeme: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void,
    captionText?: CaptionTextMeme[]
}

export function MemeFull({ meme, createCaptionMeme, captionText }: MemeFullProps) {
    return (
        <>
            <h2 style={{ color: 'black' }}>{meme.name}</h2>
            <ContainerImage>
                <ImageFull onClick={createCaptionMeme} src={meme.url} />
                {
                    captionText && captionText.length > 0 ? captionText.map(caption => (
                        <CaptionMeme key={caption.id} style={{ color: caption.color, fontSize: caption.fontSize, top: caption.position.y, left: caption.position.x }}>{caption.text}</CaptionMeme>
                    )) : ''
                }
            </ContainerImage>
        </>
    )
}