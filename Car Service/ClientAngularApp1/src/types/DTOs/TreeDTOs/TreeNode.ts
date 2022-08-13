export interface TreeNode<T> {
    id: number;
    name: string;
    level: T;
    hasChildren: boolean;
}