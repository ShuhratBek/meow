import { Injectable } from '@angular/core';

import { Breed } from './breeds.model';
import { BREEDS } from './mock-breeds';

@Injectable()
export class BreedService {
    getItems(): Promise<Breed[]> {
        return Promise.resolve(BREEDS);
    }

    getItemsSlowly(): Promise<Breed[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getItems()), 2000);
        });
    }
}
