import { Component } from '@angular/core';
import { Empleado } from './empleado'
@Component({
    selector: 'empleado',
    templateUrl: './empleados.component.html'
})
export class EmpleadoComponent {
    public titulo = 'Titulo del componente empleado'
    public empleado: Empleado;
    public trabajadores: Array<Empleado>;
    public trabajadorExterno: boolean;
    public color:string;

    constructor() {
        this.empleado = new Empleado("Freddy", 27, "Docente", false);
        this.trabajadores = [
            new Empleado("Jesus", 27, "Aseo", true),
            new Empleado("juan", 27, "Docente", true),
            new Empleado("pabli", 27, "Docente", true)

        ];
        this.trabajadorExterno = false;
        this.color='red';
    }
    ngOnInit() {
        console.log(this.empleado);
        console.log(this.trabajadores)
    }
    cambiarEmpleado(valor: boolean) {
        console.log(valor)
        this.trabajadorExterno = valor;
    }
}

