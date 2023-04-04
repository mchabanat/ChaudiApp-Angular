import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rapport } from 'src/models/rapport';

@Injectable({
  providedIn: 'root'
})
export class RapportsService {

  constructor(private http: HttpClient) { }

  getAllRapports(): Observable<Rapport[]> {
    return this.http.get<Rapport[]>('http://localhost:3000/Rapport');
  }

  getRapportById(id: number): Observable<Rapport> {
    const rapport = this.http.get<Rapport>('http://localhost:3000/Rapport/'+id);

    if (rapport) {
      return rapport;
    }
    throw new Error('Rapport introuvable');
  }

  addRapport(rapport: Rapport): Observable<Rapport> {
    return this.http.post<Rapport>('http://localhost:3000/Rapport', rapport);
  }
}
