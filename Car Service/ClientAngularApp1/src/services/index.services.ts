import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BaseService {
    private host="https://localhost:44316"
    private api=`${this.host}/api`
    protected markApi=`${this.api}/marks`
    protected modelApi=`${this.api}/models`
    constructor(protected httpClient: HttpClient) { }
    
}