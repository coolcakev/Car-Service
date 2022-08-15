import { SelectDTO } from "..";

export interface CarDTO {
    id: number,
    name: string,
    mark: SelectDTO,
    model: SelectDTO,
    color: string,
    engine: string,
    startPrice: number,
    endPrice: number
}