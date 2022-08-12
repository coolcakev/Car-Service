export interface SortingModel extends PaginationModel{
    name: string;
    sortOrder:SortDirection;
}
export type SortDirection = 'asc' | 'desc' | '';

export interface PaginationModel{
    page: number;
    count:number;
}
export interface DTOWithTotal<T>{
    dtoObjects:T[],
    total:number;
}
export interface SelectDTO{
    id:number;
    name:string;
}