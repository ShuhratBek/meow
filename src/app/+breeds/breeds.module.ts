import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';

import { routes } from './breeds.routes';
import { BreedsComponent } from './breeds.component';
import { BreedComponent } from './breed';
import { BreedDialogComponent } from './breed-dialog';
import { BreedService } from './breed.service';

console.log('`Breed` bundle loaded asynchronously');

@NgModule({
    declarations: [
        BreedsComponent,
        BreedComponent,
        BreedDialogComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ],
    providers: [BreedService],
    entryComponents: [BreedDialogComponent]
})
export class BreedsModule {
  public static routes = routes;
}
