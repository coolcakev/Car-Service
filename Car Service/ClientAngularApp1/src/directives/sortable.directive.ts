import { Directive, EventEmitter, Input, OnInit, Output, Type } from '@angular/core';
import { MarkDTO } from 'src/types/DTOs/markDTOs/markDTO';

export type SortDirection = 'asc' | 'desc'|'';
const rotate: { [key: string]: SortDirection } = { 'asc': 'desc', 'desc': 'asc','':'asc' };

export interface SortEvent {
  column: string;
  direction: SortDirection;
}

@Directive({
  selector: 'th[sortable]',
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()'
  },  
})
export class NgbdSortableHeader implements OnInit{
  
  @Input() sortable:string = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<SortEvent>();

  ngOnInit(): void {
   
  }

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}