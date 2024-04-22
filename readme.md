

# Thème - 7

**Gestion des patients, des médecins et des rendez-vous pour un cabinet médical**



## modélisation
Faire le modèle conceptuel de données
#### Niv - 1

Créer un MCD de 3 tables pour répondre au besoin minimal demandé. 
Créer une schématisation sql de votre MCD
Connectez vous à Mysql via votre terminal.
Créer le modèle physique de votre BDD.
Lancer vos requêtes via votre terminal.

## requêtage 

#### Niv - 1

Répondre aux différentes demandes présentes sur le fichier : [request/1.md](request/1.md)


## Algo 

> manipulation de tableau

#### Niv - 1

Un jeu de donnée est présent (cf.: algo/src/data)
basé sur ces données créer pour chaque demande la function correspondante : 

1. Sélectionnez le nom de tous les patients admis aux urgences
```ts
const allPatientsEntranceByEmergency = getAllPatientsEntranceByEmergency(...)
console.log("🚀 ~ allPatient", allPatientsEntranceByEmergency)
```

2. Sélectionnez le nom de tous les médecins spécialistes en chirurgie digestive
```ts
const doctorBySpeciality = getDoctorBySpeciality(..., ...)
console.log("🚀 ~ doctorBySpeciality", doctorBySpeciality)
```

3. Sélectionnez les consultations faites par le médecin Neil Bins
```ts
const consultationsByNeilBins = getConsultationsByNeilBins(..., ...)
console.log("🚀 ~ consultationsByNeilBins", consultationsByNeilBins)

```

4. Sélectionnez toutes les dates et tarifs des consultations entre le 
patients Margie Welch et le médecin Aubrey Watsica
```ts
const consultationBetween2Users = getConsultationBetween2User(..., ..., ..., ... ,...)
console.log("🚀 ~ consultationBetween2Users", consultationBetween2Users)
```

5. Sélectionnez le nombre de médecins par spécialité
```ts
/const doctorAllBySpeciality = getAllDoctorBySpeciality(...)
console.log("🚀 ~ doctorAllBySpeciality", doctorAllBySpeciality)
```

1. Affichez le chiffre d'affaire de tous les médecins
```ts
const allCA = getAllCA(...)
console.log("🚀 ~ allCA", allCA)
```


#### Niv - 2

