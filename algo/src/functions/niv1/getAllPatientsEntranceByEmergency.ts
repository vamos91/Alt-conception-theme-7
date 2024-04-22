import { Patients } from "../../interface"

export const getAllPatientsEntranceByEmergency = (patients:  Patients[]) => {
    const patientByEmergerncy = patients.filter((el) => el.emergency == 1)
    return patientByEmergerncy
}