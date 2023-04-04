import { Component, OnInit } from '@angular/core';
import { RapportsService } from '../services/rapports.service';
import { Observable } from 'rxjs';
import { Rapport } from '../../models/rapport';

@Component({
  selector: 'app-liste-rapports',
  templateUrl: './liste-rapports.component.html',
  styleUrls: ['./liste-rapports.component.scss']
})
export class ListeRapportsComponent {
  listeRapports$ !: Observable<Rapport[]>;

  constructor(private rapportServices: RapportsService) { }

  ngOnInit(): void {
    this.listeRapports$ = this.rapportServices.getAllRapports();
  }
}
