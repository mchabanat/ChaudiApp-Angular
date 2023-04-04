export class Rapport {
    id!: number;
    nomTechnicien!: string;
    nomClient!: string;
    adresseClient!: string;
    marque!: string;
    modele!: string;
    dateMiseEnService!: Date;
    dateIntervention!: Date;
    numSerie!: string;
    description!: string;
    dureeIntervention!: number;

    constructor(nomTechnicien: string, nomClient: string, adresseClient: string, marque: string, modele: string, dateMiseEnService: Date, dateIntervention: Date, numSerie: string, description: string, dureeIntervention: number) {
        this.nomTechnicien = nomTechnicien;
        this.nomClient = nomClient;
        this.adresseClient = adresseClient;
        this.marque = marque;
        this.modele = modele;
        this.dateMiseEnService = dateMiseEnService;
        this.dateIntervention = dateIntervention;
        this.numSerie = numSerie;
        this.description = description;
        this.dureeIntervention = dureeIntervention;
    }
}