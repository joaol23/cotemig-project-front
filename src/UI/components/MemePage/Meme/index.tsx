import { MemeProps } from '../../../../data/@types/MemesInterface';
import { ContainerMeme, Image } from './style';

type MemeItemProps = {
    meme: MemeProps,
    highLightMeme: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void
}

export function MemeItem({ meme, highLightMeme }: MemeItemProps) {
    return (
        <ContainerMeme data-id={meme.id} onClick={highLightMeme}>
            <Image src={meme.url} style={{ color: 'black' }} />
        </ContainerMeme>
    )
}