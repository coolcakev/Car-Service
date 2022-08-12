import { SortingModel } from "..";

export interface ModelFilteringModel extends SortingModel{
    searchTerm: string;
    markId: number;
}