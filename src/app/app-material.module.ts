import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatListModule
  } from '@angular/material';
const materialModules = [
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatIconModule,
  MatMenuModule,
  MatNativeDateModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatToolbarModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatTooltipModule,
  MatButtonToggleModule,
  MatAutocompleteModule,
  MatTabsModule,
  MatProgressSpinnerModule,
  MatSliderModule,
  MatListModule
];
@NgModule({
  imports: materialModules,
  exports: materialModules
})
export class AppMaterialModule { }
