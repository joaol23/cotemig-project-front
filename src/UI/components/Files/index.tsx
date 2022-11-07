import { ContainerAll, FilesContainer, LinkFile, File, ImageFile, RowContainer, SideInfoContainer, InfoContainer, TextFile } from "./style";
import { FileInterface } from "../../../data/@types/FileInterface";
import { ImageService } from "../../../data/services/Images/Images";
import { Button } from "@mui/material"
import MobiledataOffIcon from '@mui/icons-material/MobiledataOff';
import { ColoursService } from '../../../data/services/Colours/Colours';
import { JSXElementConstructor, Key, ReactElement, ReactFragment, ReactPortal, useState } from "react";
import { chunk } from "../../../data/services/Chunk/Chunk";

type FilesProps = {
    files: FileInterface[],
    changeDataFiles: (newValue: FileInterface[]) => void,
}

export function Files({ files, changeDataFiles }: FilesProps) {
    const [switchOrder, changeOrder] = useState<boolean>(true);

    const compare = (a: FileInterface, b: FileInterface) => {
        let comparison = 0;
        if (a.countCities > b.countCities) {
            comparison = (switchOrder ? 1 : -1);
        } else if (a.countCities < b.countCities) {
            comparison = (switchOrder ? -1 : 1);
        }

        return comparison;
    }

    function changeOrderFiles() {
        if (files) {
            changeOrder(!switchOrder);
            let newFiles = [...files].sort(compare);
            changeDataFiles(newFiles);
        }
    }

    const filesElement = chunk(files.map(file => (
        <LinkFile href={'/details-state/' + file.fileState.id} key={file.id}>
            <File>
                <ImageFile src={"images/" + ImageService.getImageName(file.type)} />
                <InfoContainer style={{ backgroundColor: ColoursService.getColourByZone(file.fileState.zone) }}>
                    <SideInfoContainer>
                        <TextFile>{file.fileName}</TextFile>
                        <TextFile>Cidades: {file.countCities}</TextFile>
                    </SideInfoContainer>
                    <TextFile>Capital: {file.fileState.capital}</TextFile>
                </InfoContainer>
            </File>
        </LinkFile>
    )), 4);

    return (
        <ContainerAll>
            <Button variant={'contained'} title="Não ta funcionando :(" color="secondary" onClick={changeOrderFiles} startIcon={<MobiledataOffIcon />}>Cidades</Button>
            <FilesContainer> {filesElement.map((fileElement: any, index: number) => (<RowContainer key={index}>{fileElement}</RowContainer>))} </FilesContainer>
        </ContainerAll>
    )
}