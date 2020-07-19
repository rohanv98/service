import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { myfamily } from './family';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
  private Url:string = '/assets/family.json';
  public dummyTable_Url = 'http://dummy.restapiexample.com/api/v1/employees';
  constructor(private http:HttpClient) { }

  getFamilyMems(): Observable<myfamily[]>{
   return this.http.get<myfamily[]>(this.Url);
  }
  gettabledata(){
    return this.http.get(this.dummyTable_Url);
  }
}
