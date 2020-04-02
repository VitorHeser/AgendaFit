import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class PratododiaService {

  constructor(private http: HttpClient) { }
  getPratosDoDia() {
    return this.http.get<any>('assets/data/bd.json')
    .toPromise()
    .then(res => res.pratododia as any[])
    .then(data => data);  
  }
 
}
