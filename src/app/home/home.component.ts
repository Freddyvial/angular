import { Component } from '@angular/core';
import { RopaService } from '../services/ropa.service';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})
export class HomeComponent {
    public titulo = "Pagina Principal";
    public listadoRopa: Array<string> = [];
    public prendaAGuardar:string='';
    constructor(
        private _ropaService: RopaService
    ) { };
    ngOnInit() {
        this.listadoRopa=this._ropaService.getRopa();
        console.log(this.listadoRopa);
    }
    guardarPrenda(){
        this._ropaService.addRopa(this.prendaAGuardar);
        
    }
}
