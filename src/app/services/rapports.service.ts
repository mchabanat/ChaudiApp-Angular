import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
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
    return this.getAllRapports().pipe(
      map(rapports => [...rapports].sort((a,b) => a.id - b.id)),
      map(rapports_tries => rapports_tries[rapports_tries.length-1]),
      map(rapport_max => (rapport.id = rapport_max.id + 1)),
      switchMap(() => this.http.post<Rapport>('http://localhost:3000/Rapport', rapport))
    );
  }
}
