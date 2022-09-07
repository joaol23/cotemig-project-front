import { City } from "../../../data/@types/FileInterface";
import React, { useState } from "react";
import { api } from "../../../data/services/api";
import { Container } from "./style";
import Table from "../../../UI/components/Table";
import { SearchComponent } from "../../../UI/components/Search";

type DetailsPageProps = {
    detailsFile: City[];
}

export default function DetailsPage({ detailsFile }: DetailsPageProps) {
    const [fileDetails, setFileDetails] = useState<City[]>(detailsFile)
    const [fileDetailsData, setFileDetailsData] = useState<City[]>(detailsFile)

    function changeValueFile(newValue: City[]): void {
        setFileDetails(newValue);
    }
    return (
        <Container>
            <SearchComponent textTitle={"Visualize as cidades por aqui"} onChange={changeValueFile} data={fileDetailsData} options={['name', 'id']} />
            <Table data={fileDetails} namesHeader={{ id: "Id", name: "Nome", state_id: "Estado" }} />
        </Container>
    )
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { id: '3' } }],
        fallback: 'blocking',
    }
}

export async function getStaticProps(context: { params: { id: string } }) {
    const { id } = context.params;
    const detailsFile = ((await api.get<{ data: City[] }>(`arquivos-estado?id=${id}`)).data).data

    return {
        props: {
            detailsFile
        },
    }
}