import { Container, LinksMenu, ImageMenu, ContainerInfo, TitleMenu } from './style'
import { useEffect, useState } from 'react';
import { LinkMenu } from '../data/@types/MenuInterface'
import { Header } from '../UI/components/Header';
import { api } from '../data/services/api';

type homeProps = {
    linksMenu: LinkMenu[]
}

export default function Home({ linksMenu }: homeProps) {
    const [links, setDatalinks] = useState<LinkMenu[]>(linksMenu);
    return (
        <>
            <Container>
                {
                    !links ? '' : links.map((link) => (
                        <a href={'/' + link.path} key={link.id} style={{ textDecoration: 'none', borderRadius: "25px", color: "white", width: '50%', border: '2px solid black', margin: '25px 0' }}>
                            <LinksMenu>
                                <ImageMenu src={link.image} />
                                <ContainerInfo>
                                    <TitleMenu>{link.title}</TitleMenu>
                                </ContainerInfo>
                            </LinksMenu>
                        </a>
                    ))
                }
            </Container>
        </>
    );
}

export async function getStaticProps() {
    const linksMenu = ((await api.get('menu')).data).data

    return {
        props: {
            linksMenu
        },
    }
}