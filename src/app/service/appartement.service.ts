import { Injectable } from '@angular/core';
import { Apartment } from '../Core/Models/apartment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppartementService {
  appartementUrl:string='http://localhost:3000/appartement'

  constructor(private http:HttpClient) { }


  getAppartement(){
    return this.http.get(this.appartementUrl);
  }
  deleteAppartement(id:number){
    return this.http.delete(this.appartementUrl+'/'+id);
  }
  addAppartement(appartement:Apartment){
    return this.http.post('http://localhost:3000/appartement/', appartement);
  }
  fetchresidenceById(id:any){
    return this.http.get('http://localhost:3000/residence/'+id);
  }
  updateAppartement(appartement:Apartment,id:any){
    return this.http.put('http://localhost:3000/appartement/'+id, appartement);
  }
  fetchappartementById(id:any){
    return this.http.get<Apartment>('http://localhost:3000/appartement/'+id);
  }
}
