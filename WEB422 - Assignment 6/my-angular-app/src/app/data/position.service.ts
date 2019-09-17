import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Position } from "./position";


@Injectable({
  providedIn: 'root'
})
export class PositionService {
  
  constructor(private http: HttpClient) { }


  getPositions(): Observable<Position[]> {
    return this.http.get<Position[]>("https://stormy-plains-71044.herokuapp.com/positions");
  }

  savePosition(position : Position): Observable<any> {
    return this.http.put<any>("https://stormy-plains-71044.herokuapp.com/position/" + position._id, position);
  }

  getPosition(id): Observable<Position[]>{
    return this.http.get<Position[]>("https://stormy-plains-71044.herokuapp.com/position/" + id);
  }
}
