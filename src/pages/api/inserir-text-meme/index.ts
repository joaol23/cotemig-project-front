import type { NextApiRequest, NextApiResponse } from 'next'
import { api } from '../../../data/services/api'

type Response = {
    [key: string]: string | Object | null
}

type ObjectResponse = {
    [key: string]: Object
}

type ResponseAPI = {
    [key: string]: ObjectResponse,
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Response>
) {
    try {
        const { data } = req.body;
        const postReturn = (await api.post<ResponseAPI>(`memes-text`, data)).data;

        const response: Response = {
            error: null,
            text: postReturn.data,
        }
        res.status(200).json(response);
    } catch (error: any) {
        res.status(error.response.status).json({
            error: error.response.data.msg,
            id: null
        });
    }
}
