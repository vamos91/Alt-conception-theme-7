import { Doctors } from "../../interface"

export const getDoctorBySpeciality = (doctors: Doctors[], speciality: String) => {
    const doctorBySpeciality = doctors.filter((doctor) => doctor.speciality == speciality)
    return doctorBySpeciality
}