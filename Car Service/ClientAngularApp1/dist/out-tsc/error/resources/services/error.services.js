import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
let ErrorService = class ErrorService {
    getErrorMessage(error, message) {
        if (error !== null && error.message !== undefined) {
            return error.message.substring(0, 200);
        }
        return message;
    }
};
ErrorService = __decorate([
    Injectable({
        providedIn: "root",
    })
], ErrorService);
export { ErrorService };
//# sourceMappingURL=error.services.js.map