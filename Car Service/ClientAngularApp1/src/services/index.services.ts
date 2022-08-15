import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BaseService {
    private host="https://localhost:44316"
    private api=`${this.host}/api`
    protected markApi=`${this.api}/marks`
    protected modelApi=`${this.api}/models`
    protected treeApi=`${this.api}/tree`
    protected carApi=`${this.api}/cars`
    protected priceApi=`${this.api}/price`
    constructor(protected httpClient: HttpClient) { }
    
}