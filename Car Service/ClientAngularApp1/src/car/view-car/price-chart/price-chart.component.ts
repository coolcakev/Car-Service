import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { ChartItem } from 'src/types/ChartTypes';
import { PriceChart } from 'src/types/ChartTypes/priceChart';
import { PriceDTO } from 'src/types/DTOs/PriceDTOs/PriceDTO';


@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit, OnChanges {

  @Input() price: PriceDTO[] = []
  multi: PriceChart[] = [
    {
      "name": "Price",
      "series": [

      ]
    }
  ];
  view: [number, number] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme: Color = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
    group: ScaleType.Ordinal,
    name: "Price",
    selectable: true
  };

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.multi[0].series = this.price.map((price): ChartItem<Date, number> => ({
      name: price.priceDate,
      value: price.price
    }))
  
  }
  ngOnInit(): void {
   
  }
}
