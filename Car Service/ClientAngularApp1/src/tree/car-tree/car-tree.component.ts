import { SelectionChange } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCarTreesNodes, setCarTreeNodeInfo } from 'src/store/actions/tree.actions';
import { selectCarTreeNodes, selectCarTreeNodesLoading, selectCurrentCarTreeNode } from 'src/store/selectors/tree.selectors';
import { AppState } from 'src/store/types';
import { CarTreeNode } from 'src/types/DTOs/TreeDTOs';
import * as TreeActions from '../../store/actions/tree.actions'

@Component({
  selector: 'app-car-tree',
  templateUrl: './car-tree.component.html',
  styleUrls: ['./car-tree.component.css']
})
export class CarTreeComponent implements OnInit, OnDestroy {

  currentCarTreeNode$: Observable<CarTreeNode>
  carTreeNodesLoading$: Observable<boolean>
  carTreeNodes$: Observable<CarTreeNode[]>
  treeControl: FlatTreeControl<CarTreeNode>;

  constructor(private store: Store<AppState>) {
    this.treeControl = new FlatTreeControl<CarTreeNode>(this.getLevel, this.isExpandable);

    this.carTreeNodes$ = this.store.pipe(
      select(selectCarTreeNodes)
    )

    this.carTreeNodesLoading$ = this.store.pipe(
      select(selectCarTreeNodesLoading)
    )

    this.currentCarTreeNode$ = this.store.pipe(
      select(selectCurrentCarTreeNode)
    )

  }

  ngOnDestroy(): void {
    this.treeControl.expansionModel.changed.unsubscribe()
  }

  ngOnInit(): void {
    this.store.dispatch(getCarTreesNodes())

    this.treeControl.expansionModel.changed.subscribe(change => {
      if (
        (change as SelectionChange<CarTreeNode>).added ||
        (change as SelectionChange<CarTreeNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<CarTreeNode>);
      }
    });
  }

  getLevel = (node: CarTreeNode) => node.level;

  isExpandable = (node: CarTreeNode) => node.hasChildren;

  hasChild = (_: number, _nodeData: CarTreeNode) => _nodeData.hasChildren;

  handleTreeControl(change: SelectionChange<CarTreeNode>) {
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
  toggleNodeExpand(node: CarTreeNode) {
    this.store.dispatch(TreeActions.setCurrentCarTreeNode({
      currentTreeNode: node
    }))
    this.store.dispatch(TreeActions.setCarTreeNodeInfo({
      carTreeNodeInfo: {
        level: node.level,
        markId: node.id,
      }
    }))
  }
  toggleNodeCollapse(node: CarTreeNode) {

    this.store.dispatch(TreeActions.colapseCarTreeNode({
      treeNode: node
    }))
  }
}
