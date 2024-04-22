import { Doctors } from "../../interface"

export const getAllDoctorBySpeciality = (medecins: Doctors[]): void => {
    const resultat = medecins.reduce((a:any, b:any) => {
        a[b.speciality] = a[b.speciality] + 1 || 1
        return a;
    }, {})
    return resultat
}
