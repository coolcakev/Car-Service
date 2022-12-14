/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { PaginationComponent } from './pagination.component';
describe('PaginationComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PaginationComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=pagination.component.spec.js.map