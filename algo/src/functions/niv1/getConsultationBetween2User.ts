import { Doctors, Patients, Consultations } from "../../interface"

export const getConsultationBetween2User = (patients: Patients[], medecins: Doctors[], consultations: Consultations[],patient: String, medecin: String) => {
    const userPatient = patients.find((e) => e.last_name == patient) 
    const userMedecin = medecins.find((e) => e.last_name == medecin)
    const resultat = consultations.filter((e) => e.patient_id == userPatient?.id && e.doctor_id == userMedecin?.id)
    return resultat
}