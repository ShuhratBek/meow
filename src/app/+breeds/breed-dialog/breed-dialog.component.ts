import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
    selector: 'breed-dialog',
    styleUrls: ['./breed-dialog.component.scss'],
    templateUrl: './breed-dialog.component.html'
})
export class BreedDialogComponent implements OnInit {
    constructor(public dialogRef: MdDialogRef<BreedDialogComponent>) {}
    public ngOnInit() {

    }

}

