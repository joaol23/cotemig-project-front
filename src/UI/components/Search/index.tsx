import { Search, TextFilter, FilterContainer, SearchContainer } from "./style";
import { TextService } from '../../../data/services/Text/Text';
import { FileInterface } from "../../../data/@types/FileInterface";

type SearchProps = {
    textTitle: string,
    data: any[],
    onChange: (newData: any[]) => void,
    options?: Array<string> | (Array<string | Array<string>>) | Array<Array<string>>
}

export function SearchComponent({ textTitle, onChange, data, options }: SearchProps) {

    function filterArray(event: React.FormEvent<HTMLInputElement>) {
        let valueCurrent = TextService.removeAccent(event.currentTarget.value.toUpperCase());
        if (valueCurrent !== '') {
            let newData = data.filter((data: any) => makeCheckSearch(data, valueCurrent));
            onChange(newData);
            return;
        }
        onChange(data);
    }

    const makeCheckSearch = (data: any, search: string): boolean => {
        let check = false, checks = [];
        if (options) {
            for (const option of options) {
                checks.push(checkEachItemFilter(data, search, option));
            }
            check = checks.some(eachCheck => eachCheck === true);
        }
        return check;
    }

    const checkEachItemFilter = (data: any, search: string, option: string | Array<string>): boolean => {
        if (Array.isArray(option)) {
            let choosenData = data;
            option.forEach(eachOption => {
                choosenData = choosenData[eachOption]
            })
            return TextService.removeAccent(choosenData.toUpperCase()).includes(search)
        }
        return TextService.removeAccent(data[option].toUpperCase()).includes(search);
    }

    return (
        <SearchContainer>
            <>
                <TextFilter>{textTitle}</TextFilter>
            </>
            <FilterContainer>
                <TextFilter>Filtre por:</TextFilter>
                <Search type="text" onChange={filterArray} />
            </FilterContainer>
        </SearchContainer>
    )
}