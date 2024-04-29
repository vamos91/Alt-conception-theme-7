import { patients } from "./data/patients"
import { doctors } from "./data/doctors"
import { consultations } from "./data/consultations"
import { getAllPatientsEntranceByEmergency } from "./functions/correction/getAllPatientsEntranceByEmergency"
import { getDoctorBySpeciality } from "./functions/correction/getDoctorBySpeciality"
import { getConsultationsByNeilBins } from "./functions/correction/getConsultationsByNeilBins"
import { getConsultationBetween2Users } from "./functions/correction/getConsultationBetween2Users"
import { getDoctorAllBySpeciality } from "./functions/correction/getDoctorAllBySpeciality"
import { Consultations } from "./interface"

const allPatientsEntranceByEmergency = getAllPatientsEntranceByEmergency(patients)
//console.log("🚀 ~ allPatientsEntranceByEmergency", allPatientsEntranceByEmergency)

//ex: cardiologie
const doctorBySpeciality = getDoctorBySpeciality(doctors, 'cardiologie')
//console.log("🚀 ~ doctorBySpeciality", doctorBySpeciality)



const consultationsByNeilBins = getConsultationsByNeilBins(consultations, doctors, 'Bins')
//console.log("🚀 ~ consultationsByNeilBins", consultationsByNeilBins)

//Sélectionnez toutes les dates et tarifs des consultations entre le 
//patients Margie Welch et le médecin Aubrey Watsica
const consultationBetween2Users = getConsultationBetween2Users(patients, doctors, consultations, 'Welch', 'Watsica')
if('error' in consultationBetween2Users) process.exit(1)
consultationBetween2Users.forEach(element => {
    
});
console.log("🚀 ~ consultationBetween2Users", consultationBetween2Users)

const doctorAllBySpeciality = getDoctorAllBySpeciality(doctors)
console.log("🚀 ~ doctorAllBySpeciality", doctorAllBySpeciality)
//Affichez le chiffre d'affaire de tous les médecins
//AllCA