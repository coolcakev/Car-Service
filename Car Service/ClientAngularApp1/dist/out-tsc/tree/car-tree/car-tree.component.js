import { __decorate } from "tslib";
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { setCarFilteringModel } from 'src/store/actions/car.actions';
import { getCarTreesNodes } from 'src/store/actions/tree.actions';
import { selectCarTreeNodes, selectCarTreeNodesLoading, selectCurrentCarTreeNode } from 'src/store/selectors/tree.selectors';
import { CarTreeNodeType } from 'src/types/DTOs/TreeDTOs/CarTreeNodeDTOs/CarTreeNodeType';
import * as TreeActions from '../../store/actions/tree.actions';
let CarTreeComponent = class CarTreeComponent {
    constructor(store) {
        this.store = store;
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.hasChildren;
        this.hasChild = (_, _nodeData) => _nodeData.hasChildren;
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.carTreeNodes$ = this.store.pipe(select(selectCarTreeNodes));
        this.carTreeNodesLoading$ = this.store.pipe(select(selectCarTreeNodesLoading));
        this.currentCarTreeNode$ = this.store.pipe(select(selectCurrentCarTreeNode));
    }
    ngOnDestroy() {
        this.treeControl.expansionModel.changed.unsubscribe();
    }
    ngOnInit() {
        this.store.dispatch(getCarTreesNodes());
        this.treeControl.expansionModel.changed.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
    }
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNodeExpand(node));
        }
        if (change.removed) {
            change.removed
                .slice()
                .reverse()
                .forEach(node => this.toggleNodeCollapse(node));
        }
    }
    toggleNodeExpand(node) {
        this.store.dispatch(TreeActions.setCurrentCarTreeNode({
            currentTreeNode: node
        }));
        this.store.dispatch(TreeActions.setCarTreeNodeInfo({
            carTreeNodeInfo: {
                level: node.level,
                markId: node.id,
            }
        }));
    }
    toggleNodeCollapse(node) {
        this.store.dispatch(TreeActions.colapseCarTreeNode({
            treeNode: node
        }));
    }
    NodeClcik(event, node) {
        switch (node.level) {
            case CarTreeNodeType.MarkType:
                this.store.dispatch(setCarFilteringModel({ carFiltering: { modelId: 0, markId: node.id } }));
                break;
            case CarTreeNodeType.ModelType:
                this.store.dispatch(setCarFilteringModel({ carFiltering: { modelId: node.id, markId: 0 } }));
                break;
            default:
                break;
        }
    }
};
CarTreeComponent = __decorate([
    Component({
        selector: 'app-car-tree',
        templateUrl: './car-tree.component.html',
        styleUrls: ['./car-tree.component.css']
    })
], CarTreeComponent);
export { CarTreeComponent };
//# sourceMappingURL=car-tree.component.js.map