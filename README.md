# ChaudiApp !

J'ai réalisé ce projet pour la ressource R4.A.10 - Complément web du BUT Informatique.

Ce site a été réalisé grace au Framework Angular. 

Ceci est mon premier mini projet en Angular donc il n'est pas parfait :)

## Présentation
Le but de ce projet est d'aider une entreprise de réparation de chaudières en leur créant un site web listant tous les rapports d'intervention de leurs techniciens chez des clients. 

Le site permet également d'ajouter des nouveaux rapports d'intervention. 
## Stockage 
Les données utilisées sont stockées dans un fichier JSON qui est lié à une API. On peut accéder aux données via un lien localhost. 

Voici le contenu du fichier JSON contenant les données :
```json
{
  "Rapport": [
    {
      "id": 1,
      "nomTechnicien": "Jean-Christophe Démineur",
      "nomClient": "Titouan Cocheril",
      "adresseClient": "13 bis chemin de Ricard, St Germain Du Puch, 33750, FRANCE",
      "marque": "Chaffoteaux",
      "modele": "Niagara C Green Ultra",
      "dateMiseEnService": "2017-03-01",
      "dateIntervention": "2019-08-18",
      "numSerie": 7313271932188829,
      "description": "Réparation de la tuyauterie de la propriétaire (surchauffe)",
      "dureeIntervention": 120
    },
    {
      "id": 2,
      "nomTechnicien": "Jean-Christophe Démineur",
      "nomClient": "Arthur Le Menn",
      "adresseClient": "24 Coteau de Keravel, Lannilis, 29870, FRANCE",
      "marque": "Riello",
      "modele": "TAU 800 N PREMIX Réf 20105086",
      "dateMiseEnService": "2015-11-29",
      "dateIntervention": "2020-03-25",
      "numSerie": 7806542830947281,
      "description": "Chaudière bouchée par je cite par le propriétaire : la sauce du chef !",
      "dureeIntervention": 360
    },
    {
      "id": 3,
      "nomTechnicien": "Maxime Dubois",
      "nomClient": "Ivan Salle",
      "adresseClient": "10 Rue du Général Eisenhower, Toulouse, 31100, FRANCE",
      "marque": "Kospel",
      "modele": "EKCO.MN3",
      "dateMiseEnService": "2012-01-03",
      "dateIntervention": "2015-12-12",
      "numSerie": 7108697465243876,
      "description": "Réparation du join de culasse",
      "dureeIntervention": 360
    }
  ]
}
```
