import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let BaseService = class BaseService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.host = "https://localhost:44316";
        this.api = `${this.host}/api`;
        this.markApi = `${this.api}/marks`;
        this.modelApi = `${this.api}/models`;
        this.treeApi = `${this.api}/tree`;
        this.carApi = `${this.api}/cars`;
        this.priceApi = `${this.api}/price`;
    }
};
BaseService = __decorate([
    Injectable({ providedIn: 'root' })
], BaseService);
export { BaseService };
//# sourceMappingURL=index.services.js.map