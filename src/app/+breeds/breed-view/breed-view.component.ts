import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Breed } from '../breeds.model';
import { BreedService } from '../breed.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'breed-view',
    styleUrls: ['breed-view.component.scss'],
    templateUrl: 'breed-view.component.html'
})
export class BreedViewComponent implements OnInit {
    item = {
        image: 'assets/img/breeds/American-Shorthair-2.jpg'
    };

    constructor(private breedService: BreedService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params
        // (+) converts string 'id' to a number
            .switchMap((params: Params) => this.breedService.getItem(+params['id']))
            .subscribe((item: Breed) => this.item = item);
    }

}

