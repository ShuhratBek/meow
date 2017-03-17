import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import 'hammerjs';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ColorComponent } from './components';
import { FilterPipe, WordsPipe, SearchPipe } from './pipes';

@NgModule({
    declarations: [
        ColorComponent,
        WordsPipe,
        FilterPipe,
        SearchPipe
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FlexLayoutModule,
        ColorComponent,
        WordsPipe,
        FilterPipe,
        SearchPipe
    ]
})
export class SharedModule {}
