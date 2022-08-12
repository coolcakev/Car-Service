import { __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
const rotate = { 'asc': 'desc', 'desc': 'asc', '': 'asc' };
let NgbdSortableHeader = class NgbdSortableHeader {
    constructor() {
        this.sortable = '';
        this.direction = '';
        this.sort = new EventEmitter();
    }
    ngOnInit() {
    }
    rotate() {
        this.direction = rotate[this.direction];
        this.sort.emit({ column: this.sortable, direction: this.direction });
    }
};
__decorate([
    Input()
], NgbdSortableHeader.prototype, "sortable", void 0);
__decorate([
    Input()
], NgbdSortableHeader.prototype, "direction", void 0);
__decorate([
    Output()
], NgbdSortableHeader.prototype, "sort", void 0);
NgbdSortableHeader = __decorate([
    Directive({
        selector: 'th[sortable]',
        host: {
            '[class.asc]': 'direction === "asc"',
            '[class.desc]': 'direction === "desc"',
            '(click)': 'rotate()'
        },
    })
], NgbdSortableHeader);
export { NgbdSortableHeader };
//# sourceMappingURL=sortable.directive.js.map