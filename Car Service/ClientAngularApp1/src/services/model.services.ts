import { Injectable } from "@angular/core"
import { Observable } from "rxjs/internal/Observable"
import { DTOWithTotal, SelectDTO } from "src/types/DTOs"
import { CreateModelDTO } from "src/types/DTOs/modelDTOs/createModelDTO"
import { ModelFilteringModel } from "src/types/DTOs/modelDTOs/markFilteringModel"
import { ModelDTO } from "src/types/DTOs/modelDTOs/modelDTO"
import { UpdateModelDTO } from "src/types/DTOs/modelDTOs/updateModelDTO"
import { ViewModelDTO } from "src/types/DTOs/modelDTOs/viewModelDTO"
import { BaseService } from "./index.services"

@Injectable({ providedIn: 'root' })
export class ModelService extends BaseService {

  getModel(id: number):Observable<ViewModelDTO> {
    return this.httpClient.get<ViewModelDTO>(`${this.modelApi}/${id}`)
  }

  getModelForSelect(markId:number):Observable<SelectDTO[]> {
    return this.httpClient.get<SelectDTO[]>(`${this.modelApi}/forSelect/${markId}`)
  }  

  getModels(modelFilter: ModelFilteringModel): Observable<DTOWithTotal<ModelDTO>> {
    return this.httpClient.get<DTOWithTotal<ModelDTO>>(this.modelApi, {
      params: { ...modelFilter }
    })
  }
  createModel(model: CreateModelDTO) {
    return this.httpClient.post(this.modelApi, model)
  }

  updateModel(model: UpdateModelDTO) {
    return this.httpClient.put(`${this.modelApi}/${model.id}`, model)
  }
  deleteModel(id: number) {
    return this.httpClient.delete(`${this.modelApi}/${id}`)
  }

}