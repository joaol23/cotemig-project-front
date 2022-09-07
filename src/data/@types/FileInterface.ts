export interface FileInterface {
    id: number,
    fileName: string,
    fileState: State,
    countCities: number,
    type: string
}

interface State {
    id: string,
    initials: string,
    name: string,
    capital: string,
    zone: string,
}

export type City = {
    id: string,
    name: string,
    state_id: number
}