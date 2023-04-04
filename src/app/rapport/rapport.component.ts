import { Component, Input } from '@angular/core';
import { Rapport } from 'src/models/rapport';
import { RapportsService } from '../services/rapports.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent {
  @Input() leRapport!: Rapport; 

  unRapport!: Rapport;

  constructor(private rapportService: RapportsService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const idRapport = this.router.snapshot.params['id'];
    // Je verifie si mon idRapport est défini
    if (idRapport !== undefined) {
      this.rapportService.getRapportById(+idRapport).subscribe(rapport => this.unRapport = rapport);
    } else {
      this.unRapport = this.leRapport;
    }
  }
}
