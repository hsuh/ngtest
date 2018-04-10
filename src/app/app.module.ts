import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { MatDatepickerModule, MatDatepickerIntl } from '@angular/material';
import { MatNativeDateModule, DateAdapter, MAT_DATE_FORMATS } from '@angular/material';
import { AppComponent } from './app.component';
import { CalibrationSelectorModule } from './calibration-selector/calibration-selector.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CalibrationSelectorModule,
    AppMaterialModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
