import { Component, Input, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/core/services';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrl: './spinner.component.scss'
})
export class SpinnerComponent implements OnInit {
    @Input() id!: string;
    @Input() mode: ProgressSpinnerMode = 'indeterminate';
    @Input() value: number = 0;

    loading$!: Observable<boolean>;

    constructor(private _loaderService: LoaderService) {}
    ngOnInit(): void {
        this._loaderService.initializeLoader(this.id);
        this.loading$ = this._loaderService.getState(this.id)!;
    }
}
