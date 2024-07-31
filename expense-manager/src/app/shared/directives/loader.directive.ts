import { Directive, ElementRef, Input, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

import { LoaderService } from 'src/app/core/services';

@Directive({
    selector: '[appLoader]'
})
export class LoaderDirective implements OnInit {
    @Input() appLoader!: string;

    constructor(private _loaderService: LoaderService) {}

    ngOnInit(): void {
        this._loaderService.initializeLoader(this.appLoader);
    }

    @Input() set appLoaderState(loading: boolean) {
        if (loading) {
            this._loaderService.show(this.appLoader);
        } else {
            this._loaderService.hide(this.appLoader);
        }
    }
}
