import { SelectDTO } from "..";
import { PriceDTO } from "../PriceDTOs/PriceDTO";

export interface ViewCarDTO {
    name: string,
    mark: SelectDTO,
    model: SelectDTO,
    color: string,
    engine: string,
    price: PriceDTO[]
}