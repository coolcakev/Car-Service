import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { BaseService } from "./index.services";
let PriceService = class PriceService extends BaseService {
    getMaxPrice() {
        return this.httpClient.get(`${this.priceApi}/maxPrice`);
    }
};
PriceService = __decorate([
    Injectable({ providedIn: 'root' })
], PriceService);
export { PriceService };
//# sourceMappingURL=price.services.js.map