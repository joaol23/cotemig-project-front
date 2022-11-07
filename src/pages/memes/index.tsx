import { useEffect, useRef, useState } from 'react';
import { Container, ContainerFull, InputMeme, ModalBody } from './style';
import { MemeProps, CaptionTextMeme } from '../../data/@types/MemesInterface';
import { Button, FormControl, InputLabel, MenuItem, Modal, Select } from '@mui/material';
import { api } from '../../data/services/api';
import { URL_MEMES } from '../../data/config/memes';
import { MemeItem } from '../../UI/components/MemePage/Meme';
import { MemeFull } from '../../UI/components/MemePage/MemeFull';
import { ChromePicker } from 'react-color';
// import { toast } from 'react-toastify';

const scrollToRef = (ref: any) => !ref ? '' : window.scrollTo(0, ref.current.offsetTop)

type MemesProps = {
    memesItems: MemeProps[]
}

export default function Memes({ memesItems }: MemesProps) {
    const [memes, setDataMemes] = useState<MemeProps[]>(memesItems)
    const [meme, setDataMeme] = useState<MemeProps>()
    const [captionFake, setCaptionFake] = useState<CaptionTextMeme>({
        id: 0,
        text: '',
        idImage: 0,
        position: {
            x: 0,
            y: 0
        },
        color: 'white',
        fontSize: 0
    })
    const [captionTextMeme, setCaptionTextMeme] = useState<CaptionTextMeme[]>();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const myRef = useRef(null)

    const highLightMeme = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        const idMeme = event.currentTarget.getAttribute('data-id');
        getCaptions(idMeme);
        let memeChoosed = memes.find(meme => meme.id === idMeme);
        setDataMeme(memeChoosed);
        scrollToRef(myRef);
    }

    const getCaptions = async (idMeme: string | null) => {
        if (idMeme == '' || !idMeme) { return; }

        const data = await fetch(`/api/text-meme/${idMeme}`);

        if ([200, 201, 304].includes(data.status)) {
            const memesText = (await data.json()).texts;
            setCaptionTextMeme(memesText)
            return;
        }
        const errorMessage = (await data.json()).error;
        console.error(errorMessage)
        return;
    }

    const createCaptionMeme = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
        if (!meme) return;
        setOpenModal(true)
        const positionRect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - positionRect.left;
        const y = event.clientY - positionRect.top;
        setCaptionFake({ ...captionFake, position: { x: x, y: y }, idImage: Number(meme.id) });
    }

    const insertCaptionMeme = async () => {
        const data = await fetch(`/api/inserir-text-meme`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data: captionFake })
        });
        if ([200, 201].includes(data.status)) {
            const dataText = await data.json();
            setCaptionTextMeme([...(captionTextMeme || []), dataText.text]);
            return;
        }
    }

    const makeCaptionMeme = () => {
        if (!meme) { return; }
        insertCaptionMeme();
        setOpenModal(false)
    }

    let options = [];

    for (let i = 1; i <= 24; i++) {
        options.push(<MenuItem key={i} value={i}>{i} px</MenuItem>);
    }

    return (
        <>
            <Container>
                <ContainerFull ref={myRef}>
                    {
                        !meme ? '' : <MemeFull meme={meme} createCaptionMeme={createCaptionMeme} captionText={captionTextMeme} />
                    }
                </ContainerFull>
                {
                    memes.map(meme => (<MemeItem key={meme.id} meme={meme} highLightMeme={highLightMeme} />))
                }
            </Container>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <ModalBody>
                    <h2>Crie sua legenda:</h2>
                    <InputMeme placeholder={"Texto da legenda..."} onChange={event => setCaptionFake({ ...captionFake, text: (event.target.value) })} type="text" defaultValue={''} name="legendMeme" />
                    <>
                        <ChromePicker color={captionFake.color} onChangeComplete={color => setCaptionFake({ ...captionFake, color: color.hex })} />
                        <FormControl fullWidth style={{ marginTop: "20px" }}>
                            <InputLabel id="demo-simple-select-label">Font-size</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Font-size"
                                defaultValue={0}
                                onChange={event => setCaptionFake({ ...captionFake, fontSize: (event.target.value as number) })}
                            >
                                <MenuItem value={0}>Escolha um tamanho para a legenda</MenuItem>
                                {
                                    options.map(option => option)
                                }
                            </Select>
                        </FormControl>
                    </>
                    <Button onClick={makeCaptionMeme} style={{ margin: '10px 0' }} variant="contained" color="success">criar</Button>
                </ModalBody>
            </Modal>
        </>
    );
}

export async function getStaticProps() {
    const memesItems = (await api.get<{ data: { memes: MemeProps[] } }>(URL_MEMES)).data.data.memes;

    return {
        props: {
            memesItems
        },
    }
}