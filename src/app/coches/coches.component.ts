import { Component } from '@angular/core';
import { PeticionesService } from '../services/peticiones.services';
import { Coches } from './coches';
@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
    providers: [PeticionesService]
})
export class CochesComponent {
    public titulo = 'Componente Coches'
    public coche: Coches;
    public coches: Array<Coches>;
    public articulos: any;

    constructor(private _peticiones: PeticionesService) {
        this.coche = new Coches("", "", "");
        this.coches = [
            new Coches("Coche blanco", "123", "red"),
            new Coches("Coche Negro", "345", "blue")
        ]
    };
    onSubmit() {
        this.coches.push(this.coche);
        this.coche = new Coches("", "", "");
    }
    ngOnInit() {
        this._peticiones.getArticulose().subscribe(resp => {
            console.log(resp);
            this.articulos = resp;
            console.log(this.articulos)
        }, error => {
            console.log("Error:: ", error);

        });
    }
}
