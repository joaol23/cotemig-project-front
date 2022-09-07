import { styled } from "@mui/material";

export const TextFilter = styled('div')`
    text-align: center;
    font-size: 25pt;
    color: #6b2b89;
    font-weight: 700;
`;

export const SearchContainer = styled('div')`
    width: 100%;
    margin: 20px 0;
`

export const FilterContainer = styled('div')`
    font-size: 16pt;
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const Search = styled('input')`
    height: 40px;
    width: 200px;
    border-radius: 10px;
    margin-left: 8px;
    border: 1px solid #464646;
    outline: none;
    padding-left: 10px;
    font-size: 12pt;
`;