import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule
    ]
})
export class SharedModule {}
