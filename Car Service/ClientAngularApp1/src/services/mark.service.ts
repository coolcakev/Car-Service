import { Injectable } from '@angular/core';
import { MarkFilteringModel } from 'src/types/DTOs/markDTOs/markFilteringModel';
import { Observable } from 'rxjs';
import { MarkDTO } from 'src/types/DTOs/markDTOs/markDTO';
import { BaseService } from './index.services';
import { CreateMarkDTO } from 'src/types/DTOs/markDTOs/createMarkDTO';
import { UpdateMarkDTO } from 'src/types/DTOs/markDTOs/updateMarkDTO';
import { ViewMarkDTO } from 'src/types/DTOs/markDTOs/viewMarkDTO';
import { DTOWithTotal, SelectDTO } from 'src/types/DTOs';

@Injectable({ providedIn: 'root' })
export class MarkService extends BaseService {

  getMark(id: number):Observable<ViewMarkDTO> {
    return this.httpClient.get<ViewMarkDTO>(`${this.markApi}/${id}`)
  }

  getMarkForSelect():Observable<SelectDTO[]> {
    return this.httpClient.get<SelectDTO[]>(`${this.markApi}/forSelect`)
  }

  getMarks(markFilter: MarkFilteringModel): Observable<DTOWithTotal<MarkDTO>> {
    return this.httpClient.get<DTOWithTotal<MarkDTO>>(this.markApi, {
      params: { ...markFilter }
    })
  }
  createMark(mark: CreateMarkDTO) {
    return this.httpClient.post(this.markApi, mark)
  }

  updateMark(mark: UpdateMarkDTO) {
    return this.httpClient.put(`${this.markApi}/${mark.id}`, mark)
  }
  deleteMark(id: number) {
    return this.httpClient.delete(`${this.markApi}/${id}`)
  }

}
