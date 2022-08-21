import { HttError } from "src/error/resources/models/httError";
import { SelectDTO } from "src/types/DTOs";
import { CreateMarkDTO } from "src/types/DTOs/markDTOs/createMarkDTO";
import { MarkDTO } from "src/types/DTOs/markDTOs/markDTO";
import { MarkFilteringModel } from "src/types/DTOs/markDTOs/markFilteringModel";
import { UpdateMarkDTO } from "src/types/DTOs/markDTOs/updateMarkDTO";
import { ViewMarkDTO } from "src/types/DTOs/markDTOs/viewMarkDTO";


export interface MarkState {
    loading: boolean;
    currentViewMark: ViewMarkDTO ;
    currentMark:MarkDTO;
    markFiltering: MarkFilteringModel;
    totalMarks: number,
    marks: MarkDTO[];
    error: HttError;
    loadingForMarkSelect:boolean;
    marksForSelect:SelectDTO[]
}