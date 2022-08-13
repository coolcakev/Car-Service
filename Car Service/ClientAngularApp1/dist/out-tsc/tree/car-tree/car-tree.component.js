import { __decorate } from "tslib";
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { select } from '@ngrx/store';
import { BehaviorSubject, map, merge } from 'rxjs';
import { getCarTreesNodes } from 'src/store/actions/tree.actions';
import { selectCarTreeNodes, selectCarTreeNodesLoading } from 'src/store/selectors/tree.selectors';
export class DynamicDataSource {
    constructor(_treeControl) {
        this._treeControl = _treeControl;
        this.dataChange = new BehaviorSubject([]);
    }
    get data() {
        return this.dataChange.value;
    }
    set data(value) {
        this._treeControl.dataNodes = value;
        this.dataChange.next(value);
    }
    connect(collectionViewer) {
        this._treeControl.expansionModel.changed.subscribe(change => {
            if (change.added ||
                change.removed) {
                this.handleTreeControl(change);
            }
        });
        return merge(collectionViewer.viewChange, this.dataChange).pipe(map(() => this.data));
    }
    disconnect(collectionViewer) { }
    /** Handle expand/collapse behaviors */
    handleTreeControl(change) {
        if (change.added) {
            change.added.forEach(node => this.toggleNode(node, true));
        }
        if (change.removed) {
            change.removed
                .slice()
                .reverse()
                .forEach(node => this.toggleNode(node, false));
        }
    }
    /**
     * Toggle the node, remove from display list
     */
    toggleNode(node, expand) {
    }
}
let CarTreeComponent = class CarTreeComponent {
    constructor(store) {
        this.store = store;
        this.getLevel = (node) => node.level;
        this.isExpandable = (node) => node.HasChildren;
        this.hasChild = (_, _nodeData) => _nodeData.HasChildren;
        this.treeControl = new FlatTreeControl(this.getLevel, this.isExpandable);
        this.carTreeNodes$ = this.store.pipe(select(selectCarTreeNodes));
        this.carTreeNodesLoading$ = this.store.pipe(select(selectCarTreeNodesLoading));
    }
    ngOnInit() {
        this.store.dispatch(getCarTreesNodes());
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