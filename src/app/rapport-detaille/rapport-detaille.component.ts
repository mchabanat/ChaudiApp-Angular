import { Component, Input } from '@angular/core';
import { RapportsService } from '../services/rapports.service';
import { ActivatedRoute } from '@angular/router';
import { Rapport } from 'src/models/rapport';

@Component({
  selector: 'app-rapport-detaille',
  templateUrl: './rapport-detaille.component.html',
  styleUrls: ['./rapport-detaille.component.scss']
})
export class RapportDetailleComponent {
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
