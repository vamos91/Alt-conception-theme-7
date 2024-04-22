import { Doctors, Consultations } from "../../interface"

//Sélectionnez les consultations faites par le medecin Neil Bins
export const getConsultationsByNeilBins = (consultations: Consultations[], doctors: Doctors[]) => {
    const doctor = doctors.find((doctor) => doctor.last_name == 'Bins')
    const consults = consultations.filter((consultation) => consultation.doctor_id == doctor?.id)
    return consults
}