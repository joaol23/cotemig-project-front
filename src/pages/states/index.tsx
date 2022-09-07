import React, { useState } from 'react';
import { Files } from "../../UI/components/Files";
import { SearchComponent } from "../../UI/components/Search";
import { FileInterface } from "../../data/@types/FileInterface";
import { Container } from './style';
import { api } from '../../data/services/api';


type FilesPageProps = {
  statesFiles: FileInterface[]
}

export default function FilesPage({ statesFiles }: FilesPageProps) {
  const [files, setDataFiles] = useState<FileInterface[]>(statesFiles);
  const [filesDataBase, setDatafilesDataBase] = React.useState<FileInterface[]>(statesFiles);

  function changeValueFiles(newValue: FileInterface[]): void {
    setDataFiles(newValue);
  }

  return (
    <Container>
      <SearchComponent textTitle={"Visualize os arquivos por aqui"} onChange={changeValueFiles} data={filesDataBase} options={['fileName', ['fileState', 'initials'], ['fileState', 'name'], ['fileState', 'capital'], ['fileState', 'zone']]} />
      <Files changeDataFiles={changeValueFiles} files={files} />
    </Container>
  );
}


export async function getStaticProps() {
  const statesFiles = ((await api.get('arquivos-estado')).data).data

  return {
    props: {
      statesFiles
    },
  }
}