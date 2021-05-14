import {Component} from '@angular/core';
@Component({
    selector: 'fruta',
    template: `
    <h2>{{nombre_componente}}</h2>
    <p>lista_frutas</p>
    `
})
export class FrutaComponent{
    public nombre_componente='Componente de Fruta';
    public lista_frutas='Naranja, Manzana, Peras y Sanía'

}