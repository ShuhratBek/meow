import { Component, OnInit, Input } from '@angular/core';
import { Breed } from '../breeds.model';

@Component({
    selector: 'breed',
    styleUrls: ['./breed.component.scss'],
    templateUrl: './breed.component.html'
})
export class BreedComponent implements OnInit {
    @Input() item: Breed;

    public ngOnInit() {

    }

}

