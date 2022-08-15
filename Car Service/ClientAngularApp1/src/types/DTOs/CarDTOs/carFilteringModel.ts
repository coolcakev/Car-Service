import { SortingModel } from "..";

export interface CarFilteringModel extends SortingModel {
    searchTerm: string,
    markId: number,
    modelId: number,
    color: string,
    engine: string,
    startPrice: number,
    endPrice: number,
    priceDate: Date
}
