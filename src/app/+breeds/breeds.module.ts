import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';

import { routes } from './breeds.routes';
import { BreedListComponent, BreedItemComponent } from './breed-list';
import { BreedViewComponent } from './breed-view';
import { BreedService } from './breed.service';

console.log('`Breed` bundle loaded asynchronously');

@NgModule({
    declarations: [
        BreedListComponent,
        BreedItemComponent,
        BreedViewComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        FormsModule
    ],
    providers: [BreedService]
})
export class BreedsModule {
  public static routes = routes;
}
