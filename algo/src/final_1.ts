import { patients } from "./data/patients";
import { doctors } from "./data/doctors";
import { consultations } from "./data/consultations";
import { getAllPatientsEntranceByEmergency } from './functions/niv1/getAllPatientsEntranceByEmergency'
import { getDoctorBySpeciality } from "./functions/niv1/getDoctorBySpeciality"
import { getConsultationsByNeilBins } from "./functions/niv1/getConsultationsByNeilBins"
import { getConsultationBetween2User } from "./functions/niv1/getConsultationBetween2User"
import { getAllDoctorBySpeciality } from "./functions/niv1/getAllDoctorBySpeciality"
import { getAllCA } from "./functions/niv1/getAllCA";

const allPatientsEntranceByEmergency = getAllPatientsEntranceByEmergency(patients)
console.log("🚀 ~ allPatient", allPatientsEntranceByEmergency)

const doctorBySpeciality = getDoctorBySpeciality(doctors, 'chirurgie digestive')
console.log("🚀 ~ doctorBySpeciality", doctorBySpeciality)

//Sélectionnez les consultations faites par le medecin Neil Bins
const consultationsByNeilBins = getConsultationsByNeilBins(consultations, doctors)
console.log("🚀 ~ consultationsByNeilBins", consultationsByNeilBins)

// Sélectionnez toutes les dates et tarifs des consultations entre le 
//patients Margie Welch et le médecin Aubrey Watsica
const consultationBetween2Users = getConsultationBetween2User(patients, doctors, consultations,'Welch', 'Watsica')
console.log("🚀 ~ consultationBetween2Users", consultationBetween2Users)

//Sélectionnez le nombre de médecins par spécialité
const doctorAllBySpeciality = getAllDoctorBySpeciality(doctors)
console.log("🚀 ~ doctorAllBySpeciality", doctorAllBySpeciality)

//Affichez le chiffre d'affaire de tous les médecins
const allCA = getAllCA(consultations)
console.log("🚀 ~ allCA", allCA)