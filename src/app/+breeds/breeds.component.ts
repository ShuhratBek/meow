import { Component, OnInit } from '@angular/core';
import { BreedService } from './breed.service';
import { Breed } from './breeds.model'
import { MdDialog } from '@angular/material';
import { BreedDialogComponent } from './breed-dialog';

@Component({
    selector: 'breeds',
    styleUrls: ['./breeds.component.scss'],
    templateUrl: './breeds.component.html'
})
export class BreedsComponent implements OnInit {
    items: Breed[];
    selectedOption: string;
    constructor(private breedService: BreedService, public dialog: MdDialog) {

    }

    openDialog() {
        let dialogRef = this.dialog.open(BreedDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            this.selectedOption = result;
        });
    }

    ngOnInit() {
        this.breedService.getItems().then(items => this.items = items);
    }
}
