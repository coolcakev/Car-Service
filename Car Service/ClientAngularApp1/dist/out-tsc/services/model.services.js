import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { BaseService } from "./index.services";
let ModelService = class ModelService extends BaseService {
    getModel(id) {
        return this.httpClient.get(`${this.modelApi}/${id}`);
    }
    getModels(modelFilter) {
        return this.httpClient.get(this.modelApi, {
            params: { ...modelFilter }
        });
    }
    createModel(model) {
        return this.httpClient.post(this.modelApi, model);
    }
    updateModel(model) {
        return this.httpClient.put(`${this.modelApi}/${model.id}`, model);
    }
    deleteModel(id) {
        return this.httpClient.delete(`${this.modelApi}/${id}`);
    }
};
ModelService = __decorate([
    Injectable({ providedIn: 'root' })
], ModelService);
export { ModelService };
//# sourceMappingURL=model.services.js.map