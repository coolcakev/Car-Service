import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarModule } from 'src/car/car.module';
import { MarkModule } from 'src/mark/mark.module';
import { ModelModule } from 'src/model/model.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { NgbdSortableHeader } from 'src/directives/sortable.directive';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule,
    HttpClientModule,
    MarkModule,
    CarModule,
    StoreModule.forRoot({}),     
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([])
  ],
  exports: [
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
