import { City } from "../../../data/@types/FileInterface";
import React from "react";
import { api } from "../../../data/services/api";
import { Container, ContainerHeader, ContainerRows, EachHeader, EachItem } from "./style";

type TableProps = {
    data: any[];
    namesHeader?: any;
}

export default function Table({ data, namesHeader }: TableProps) {

    if (data.length === 0) {
        return <></>;
    }

    const keysData = Object.keys(data[0])

    const widthHeader = Math.round(100 / keysData.length);

    return (
        <Container>
            <ContainerHeader>
                {
                    keysData.map((key, index) => (
                        <EachHeader key={index} style={{ width: widthHeader + "%" }}>
                            {namesHeader ? namesHeader[key as keyof typeof namesHeader] : key}
                        </EachHeader>
                    ))
                }
            </ContainerHeader>
            {data.map(eachData => (
                <ContainerRows key={eachData.id}>
                    {
                        keysData.map((key, index) => (
                            <EachItem key={index} style={{ width: widthHeader + "%" }}>{eachData[key]}</EachItem>
                        ))
                    }
                </ContainerRows>
            ))}
        </Container>
    )
}