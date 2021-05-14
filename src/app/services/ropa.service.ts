import {Injectable} from '@angular/core'
@Injectable()
export  class RopaService{
    public nombrePrenda:string="Pantalón";
    public coleccionRopa:Array<string> = ["Pantalon blanco","Camisetas"]
    prueba(nombrePrenda: string){
        return nombrePrenda;
    }
    addRopa(nombrePrenda:string){
        this.coleccionRopa.push(nombrePrenda);
        return this.getRopa();
    }
    getRopa(){
        return this.coleccionRopa;
    }
}