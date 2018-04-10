import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalibrationSelectorComponent } from './calibration-selector.component';
import { AppMaterialModule } from '../app-material.module';



@NgModule({
    imports:[
        CommonModule,
        AppMaterialModule
    ],
    exports:[
        CalibrationSelectorComponent
    ],
    declarations: [CalibrationSelectorComponent]
})
export class CalibrationSelectorModule {}
