export interface Patients {
    id: Number,
    first_name: String,
    last_name: String,
    num_secu: String,
    entrance_at: Date | String,
    emergency: Number,
    created_at: Date | String,
    updated_at: Date | String
}

export interface Doctors {
    id: Number,
    first_name: String,
    last_name: String,
    speciality: String,
    permanence: String,
    created_at: Date | String,
    updated_at: Date | String
}

export interface Consultations {
    id: Number,
    date: Date | String,
    diagnostic: String,
    rate: number,
    patient_id: Number,
    doctor_id: Number,
    created_at: Date | String,
    updated_at: Date | String
}