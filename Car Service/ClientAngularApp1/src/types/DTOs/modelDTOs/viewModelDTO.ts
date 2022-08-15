import { SelectDTO } from "..";

export interface ViewModelDTO{
    name: string;
    mark: SelectDTO;
    cars: SelectDTO[];
}