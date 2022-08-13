import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarTreeNode } from "src/types/DTOs/TreeDTOs";
import { CarTreeNodeInfo } from "src/types/DTOs/TreeDTOs/CarTreeNodeDTOs/CarTreeNodeInfo";
import { CarTreeNodeType } from "src/types/DTOs/TreeDTOs/CarTreeNodeDTOs/CarTreeNodeType";
import { TreeNode } from "src/types/DTOs/TreeDTOs/TreeNode";
import { BaseService } from "./index.services";

@Injectable({ providedIn: 'root' })
export class TreeService extends BaseService {

    getCarTreeNode(nodeinfo: CarTreeNodeInfo): Observable<CarTreeNode[]> {
        return this.httpClient.get<CarTreeNode[]>(`${this.treeApi}/car`, {
            params: { ...nodeinfo }
        })
    }
}