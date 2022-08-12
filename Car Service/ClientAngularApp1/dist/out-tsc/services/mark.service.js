import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BaseService } from './index.services';
let MarkService = class MarkService extends BaseService {
    getMark(id) {
        return this.httpClient.get(`${this.markApi}/${id}`);
    }
    getMarkForSelect() {
        return this.httpClient.get(`${this.markApi}/forSelect`);
    }
    getMarks(markFilter) {
        return this.httpClient.get(this.markApi, {
            params: { ...markFilter }
        });
    }
    createMark(mark) {
        return this.httpClient.post(this.markApi, mark);
    }
    updateMark(mark) {
        return this.httpClient.put(`${this.markApi}/${mark.id}`, mark);
    }
    deleteMark(id) {
        return this.httpClient.delete(`${this.markApi}/${id}`);
    }
};
MarkService = __decorate([
    Injectable({ providedIn: 'root' })
], MarkService);
export { MarkService };
//# sourceMappingURL=mark.service.js.map