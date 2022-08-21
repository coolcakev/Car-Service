import { __decorate } from "tslib";
import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs";
import * as CarAction from "../actions/car.actions";
import * as MarkAction from "../actions/mark.actions";
import * as ModelAction from "../actions/model.actions";
let AlertEffects = class AlertEffects {
    constructor(actions$, _alertService, errorService) {
        this.actions$ = actions$;
        this._alertService = _alertService;
        this.errorService = errorService;
        this.createCarSuccess$ = createEffect(() => this.actions$.pipe(ofType(CarAction.createCarSuccess), tap(() => {
            this._alertService.showAlert("Car is created successfully", "OK", "success");
        })), {
            dispatch: false
        });
        this.createCarFailure$ = createEffect(() => this.actions$.pipe(ofType(CarAction.createCarFailure), tap((action) => {
            this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Car is created failure"), "OK", "error");
        })), {
            dispatch: false
        });
        this.deleteCarSuccess = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.deleteCarSuccess), tap(() => {
                this._alertService.showAlert("Car is deleted successfully", "OK", "success");
            }));
        }, {
            dispatch: false
        });
        this.deleteCarFailure = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.deleteCarFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Car is deleted failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.updateCarSuccess = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.updateCarSuccess), tap(() => {
                this._alertService.showAlert("Car is updated successfully", "OK", "success");
            }));
        }, {
            dispatch: false
        });
        this.updateCarFailure = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.updateCarFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Car is update failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.createMarkSuccess$ = createEffect(() => this.actions$.pipe(ofType(MarkAction.createMarkSuccess), tap(() => {
            this._alertService.showAlert("Mark is created successfully", "OK", "success");
        })), {
            dispatch: false
        });
        this.createMarkFailure$ = createEffect(() => this.actions$.pipe(ofType(MarkAction.createMarkFailure), tap((action) => {
            this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Mark is created failure"), "OK", "error");
        })), {
            dispatch: false
        });
        this.deleteMarkSuccess = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.deleteMarkSuccess), tap(() => {
                this._alertService.showAlert("Mark is deleted successfully", "OK", "success");
            }));
        }, {
            dispatch: false
        });
        this.deleteMarkFailure = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.deleteMarkFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Mark is deleted failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.updateMarkSuccess = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.updateMarkSuccess), tap(() => {
                this._alertService.showAlert("Mark is updated successfully", "OK", "success");
            }));
        });
        this.updateMarkFailure = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.updateMarkFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Mark is updated failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.createModelSuccess$ = createEffect(() => this.actions$.pipe(ofType(ModelAction.createModelSuccess), tap(() => {
            this._alertService.showAlert("Model is created successfully", "OK", "success");
        })), {
            dispatch: false
        });
        this.createModelFailure$ = createEffect(() => this.actions$.pipe(ofType(ModelAction.createModelFailure), tap((action) => {
            this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Model is created failure"), "OK", "error");
        })), {
            dispatch: false
        });
        this.deleteModelSuccess = createEffect(() => {
            return this.actions$.pipe(ofType(ModelAction.deleteModelSuccess), tap(() => {
                this._alertService.showAlert("Model is deleted successfully", "OK", "success");
            }));
        }, {
            dispatch: false
        });
        this.deleteModelFailure = createEffect(() => {
            return this.actions$.pipe(ofType(ModelAction.deleteModelFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Model is deleted failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.updateModelSuccess = createEffect(() => {
            return this.actions$.pipe(ofType(ModelAction.updateModelSuccess), tap(() => {
                this._alertService.showAlert("Model is updated successfully", "OK", "success");
            }));
        }, {
            dispatch: false
        });
        this.updateModelFailure = createEffect(() => {
            return this.actions$.pipe(ofType(ModelAction.updateModelFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Model is updated failure"), "OK", "error");
            }));
        });
        this.getCarFailure = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.getCarFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Loading Car is failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.getCarsFailure = createEffect(() => {
            return this.actions$.pipe(ofType(CarAction.getCarsFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Loading Cars is failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.getMarkFailure = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.getMarkFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Loading Mark is failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.getMarksFailure = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.getMarksFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Loading Marks is failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.getMarksForSelectFailure = createEffect(() => {
            return this.actions$.pipe(ofType(MarkAction.getMarksForSelectFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Loading Marks for select is failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
        this.getModelsFailure = createEffect(() => {
            return this.actions$.pipe(ofType(ModelAction.getModelsFailure), tap((action) => {
                this._alertService.showAlert(this.errorService.getErrorMessage(action.error, "Loading Models for select is failure"), "OK", "error");
            }));
        }, {
            dispatch: false
        });
    }
};
AlertEffects = __decorate([
    Injectable()
], AlertEffects);
export { AlertEffects };
//# sourceMappingURL=alert.effects.js.map