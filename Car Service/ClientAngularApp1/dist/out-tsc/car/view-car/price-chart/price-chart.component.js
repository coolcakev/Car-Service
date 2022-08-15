import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { ScaleType } from '@swimlane/ngx-charts';
let PriceChartComponent = class PriceChartComponent {
    constructor() {
        this.price = [];
        this.multi = [
            {
                "name": "Price",
                "series": []
            }
        ];
        this.view = [700, 300];
        // options
        this.legend = true;
        this.showLabels = true;
        this.animations = true;
        this.xAxis = true;
        this.yAxis = true;
        this.showYAxisLabel = true;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.yAxisLabel = 'Population';
        this.timeline = true;
        this.colorScheme = {
            domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
            group: ScaleType.Ordinal,
            name: "Price",
            selectable: true
        };
    }
    ngOnChanges(changes) {
        this.multi[0].series = this.price.map((price) => ({
            name: price.priceDate,
            value: price.price
        }));
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], PriceChartComponent.prototype, "price", void 0);
PriceChartComponent = __decorate([
    Component({
        selector: 'app-price-chart',
        templateUrl: './price-chart.component.html',
        styleUrls: ['./price-chart.component.css']
    })
], PriceChartComponent);
export { PriceChartComponent };
//# sourceMappingURL=price-chart.component.js.map