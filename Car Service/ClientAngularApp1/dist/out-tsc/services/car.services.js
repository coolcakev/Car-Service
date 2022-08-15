import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { BaseService } from "./index.services";
let CarService = class CarService extends BaseService {
    getCar(id) {
        return this.httpClient.get(`${this.carApi}/${id}`);
    }
    getColors() {
        return this.httpClient.get(`${this.carApi}/colors`);
    }
    getEngineCapacities() {
        return this.httpClient.get(`${this.carApi}/engine`);
    }
    getCarForSelect() {
        return this.httpClient.get(`${this.carApi}/forSelect`);
    }
    getCars(carFilter) {
        const newCarFilter = {
            ...carFilter,
            priceDate: carFilter.priceDate.toDateString()
        };
        return this.httpClient.get(this.carApi, {
            params: { ...newCarFilter }
        });
    }
    createCar(car) {
        return this.httpClient.post(this.carApi, car);
    }
    updateCar(car) {
        return this.httpClient.put(`${this.carApi}/${car.id}`, car);
    }
    deleteCar(id) {
        return this.httpClient.delete(`${this.carApi}/${id}`);
    }
};
CarService = __decorate([
    Injectable({ providedIn: 'root' })
], CarService);
export { CarService };
//# sourceMappingURL=car.services.js.map