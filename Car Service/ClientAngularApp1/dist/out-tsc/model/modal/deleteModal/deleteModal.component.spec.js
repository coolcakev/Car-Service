/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { DeleteModalComponent } from './deleteModal.component';
describe('DeleteModalComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DeleteModalComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(DeleteModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=deleteModal.component.spec.js.map