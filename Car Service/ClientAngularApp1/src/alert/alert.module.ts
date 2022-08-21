import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AlertService } from './resources/services/alert.service';

@NgModule({
  declarations: [ 
    AlertComponent
  ],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  exports: [
    AlertComponent
  ],
})
export class AlertModule { }
