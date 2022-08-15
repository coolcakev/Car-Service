import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SelectDTO } from "src/types/DTOs";
import { BaseService } from "./index.services";

@Injectable({ providedIn: 'root' })
export class PriceService extends BaseService {
    getMaxPrice(): Observable<number> {
        return this.httpClient.get<number>(`${this.priceApi}/maxPrice`)
    }
}