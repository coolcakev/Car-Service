import { ChartItem } from ".";

export interface PriceChart {
    name: string;
    series: ChartItem<Date,number>[]
}