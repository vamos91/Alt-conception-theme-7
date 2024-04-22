import { Consultations } from "../../interface"

export const getAllCA = (consultations: Consultations[]) => {
    let totalCA: number = 0
    const resultat = consultations.map((consultation) => totalCA += consultation.rate)
    return resultat.pop()?.toFixed()
}