
# Exercices SQL

## Partie 1: Sélection de données

> Connectez vous à Mysql via votre terminal.
> Créer le modèle physique de votre BDD.
> Lancer vos requêtes via votre terminal.

1. Sélectionnez tous les noms et prénoms des patients:

```sql
select first_name, last_name from patients;
```

2. Sélectionnez la spécialité de tous les médecins :

```sql
select speciality from doctors;
```

3. Sélectionnez le nom de tous les médécins spécialistes en chirurgie digestive:

```sql
select last_name from doctors where speciality='chirurgie digestive';
```

4. Sélectionnez le nom de tous les patients admis aux urgences :

```sql
select * from patients where emergency=true;
```

5. Sélectionnez le nom, le prénom des patients admis aux urgences le 2024-04-09 à 00:21:49 :

```sql
select * from patients where emergency=true AND entrance_at="2024-04-09 00:21:49";
```

5. Sélectionnez toutes les consultations faites le 2024-04-10 à 00:00:56:

```sql
select * from consultations where date="2024-04-10 00:00:56";
```

6. Sélectionnez les dates et tarifs des consultations faites par le medecin Neil Bins :

```sql
select date, rate from consultations inner join doctors on consultations.medecin_id = medecins.id where medecins.last_name='Bins';
```

7. Sélectionnez toutes les dates et tarifs des consultations dont le patient Hartmann a fait l'objet :

```sql
select date, rate from consultations inner join patients on consultations.patient_id = patients.id where patients.last_name='Hartmann';
```

8. Sélectionnez toutes les dates et tarifs des consultations entre le patients Margie Welch et le médecin Aubrey Watsica :

```sql
select date, rate from  consultations inner join patients on consultations.patient_id=patients.id inner join doctors on consultations.medecin_id=medecins.id where patients.last_name='Welch' and medecins.last_name='Watsica';
```

9. Modifiez en une seule requête les noms des patients à l'id 19 et 20. Leurs noms sera "Martin" :
    
```sql
update patients set last_name = 'dupond' where id IN (19, 20);
```

10. Sélectionnez tous les patients dont le nom est "Martin" :
    
```sql
select * from patients where last_name = 'Martin';
```

11. Affichez le nombre total de médecins :
    
```sql
select count(*) as "Nombre" from doctors;
```

12. Sélectionnez le nombre de médecins par spécialité :
    
```sql
select speciality, count(id) as 'nombre de medecins' from doctors group by speciality;
```

13. Affichez le chiffre d'affaire de tous les médecins :
    
```sql
select SUM(rate) from consultations;
```

14. Affichez le chiffre d'affaire du médecin Aubrey Watsica :
    
```sql
select SUM(rate) from consultations inner join doctors on consultations.medecin_id=medecins.id where last_name='Watsica';
```

15. Sélectionnez les tarifs des consultations supérieur à 70 euros :
    
```sql
select rate from consultations where rate > 70;
```

16. Sélectionnez le medecins avec le plus gros chiffre d'affaire :
    
```sql
select max(rate) from consultations;
```

