import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import {Http,Response,Headers} from '@angular/http';

@Injectable()
export class PeticionesService{
    private url ="https://jsonplaceholder.typicode.com";
    constructor(private http: HttpClient) {

    }
    public getArticulose(){
        return this.http.get(`${this.url}/posts`);
                                      
    }
    

}

