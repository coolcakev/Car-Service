import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { BaseService } from "./index.services";
let TreeService = class TreeService extends BaseService {
    getCarTreeNode(nodeinfo) {
        return this.httpClient.get(`${this.treeApi}/car`, {
            params: { ...nodeinfo }
        });
    }
};
TreeService = __decorate([
    Injectable({ providedIn: 'root' })
], TreeService);
export { TreeService };
//# sourceMappingURL=tree.services.js.map