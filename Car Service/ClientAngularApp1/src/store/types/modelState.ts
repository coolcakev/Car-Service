import { ModelFilteringModel } from "src/types/DTOs/modelDTOs/markFilteringModel";
import { ModelDTO } from "src/types/DTOs/modelDTOs/modelDTO";
import { ViewModelDTO } from "src/types/DTOs/modelDTOs/viewModelDTO";

export interface ModelState {
    loading: boolean;
    currentViewModel: ViewModelDTO;
    currentModel:ModelDTO;
    modelFiltering: ModelFilteringModel;
    totalModels: number,
    models: ModelDTO[];
    error: string;
}