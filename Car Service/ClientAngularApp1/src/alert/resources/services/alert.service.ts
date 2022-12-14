import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertComponent } from 'src/alert/alert.component';
import { AlertModule } from 'src/alert/alert.module';
import { AlertType } from '../types/alertType';

@Injectable({
  providedIn: "root"
})
export class AlertService {

  constructor(private _snackBar: MatSnackBar) { }

  showAlert(message: string, buttonText: string, type: AlertType) {
    this._snackBar.openFromComponent(AlertComponent, {
      data: {
        message: message,
        buttonText: buttonText,
        type: type
      },
      horizontalPosition: 'right',
      verticalPosition: "top",
    })
  }
}

