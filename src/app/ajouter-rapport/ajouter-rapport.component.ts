import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Rapport } from 'src/models/rapport';
import { RapportsService } from '../services/rapports.service';


@Component({
  selector: 'app-ajouter-rapport',
  templateUrl: './ajouter-rapport.component.html',
  styleUrls: ['./ajouter-rapport.component.scss']
})
export class AjouterRapportComponent {
  formulaire!: FormGroup
  currentRapport$ !: Observable<Rapport> 

  constructor(private router: Router,private formBuilder: FormBuilder, private monService: RapportsService) { }

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      nomTechnicien: [null, [Validators.required, Validators.minLength(1)]], 
      nomClient: [null, [Validators.required, Validators.minLength(1)]],
      adresseClient: [null, [Validators.required, Validators.minLength(1)]],
      marque: [null, [Validators.required, Validators.minLength(1)]],
      modele: [null, [Validators.required, Validators.minLength(1)]],
      dateMiseEnService: [null, [Validators.required, Validators.minLength(3)]],
      dateIntervention: [null, [Validators.required, Validators.minLength(3)]],
      numSerie: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
      description: [null, [Validators.required, Validators.minLength(1)]],
      dureeIntervention: [null, [Validators.required, Validators.minLength(1)]]
    },
    {
      updateOn: 'blur'
    })

    this.currentRapport$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        id:0,
        nomTechnicien: formValue.nomTechnicien,
        nomClient: formValue.nomClient,
        adresseClient: formValue.adresseClient,
        marque: formValue.marque,
        modele: formValue.modele,
        dateMiseEnService: formValue.dateMiseEnService,
        dateIntervention: formValue.dateIntervention,
        numSerie: formValue.numSerie,
        description: formValue.description,
        dureeIntervention: formValue.dureeIntervention
      })))
  }

  onAddRapport() {
    let newRapport: Rapport = {
      id: 0,
      nomTechnicien: this.formulaire.get('nomTechnicien')?.value,
      nomClient: this.formulaire.get('nomClient')?.value,
      adresseClient: this.formulaire.get('adresseClient')?.value,
      marque: this.formulaire.get('marque')?.value,
      modele: this.formulaire.get('modele')?.value,
      dateMiseEnService: this.formulaire.get('dateMiseEnService')?.value,
      dateIntervention: this.formulaire.get('dateIntervention')?.value,
      numSerie: this.formulaire.get('numSerie')?.value,
      description: this.formulaire.get('description')?.value,
      dureeIntervention: this.formulaire.get('dureeIntervention')?.value 
    }

    this.monService.addRapport(newRapport).pipe(
      tap(() => this.router.navigateByUrl('/liste-rapports'))
    ).subscribe();
  }
}
