CREATE TABLE `doctors`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `speciality` ENUM('cardiologie', 'rumatologie', 'chirurgie digestive', 'neurologie', 'sport santé') NOT NULL,
    `permanence` ENUM('jour', 'nuit') NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL
);
CREATE TABLE `consultations`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `date` DATETIME NOT NULL,
    `diagnostic` TEXT NOT NULL,
    `rate` DOUBLE(8, 2) NOT NULL,
    `patient_id` INT NOT NULL,
    `doctor_id` INT NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL
);
ALTER TABLE
    `consultations` ADD INDEX `consultations_patient_id_medecin_id_index`(`patient_id`, `medecin_id`);
CREATE TABLE `patients`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `first_name` VARCHAR(255) NOT NULL,
    `last_name` VARCHAR(255) NOT NULL,
    `num_secu` VARCHAR(255) NOT NULL,
    `entrance_at` DATETIME NOT NULL,
    `emergency` TINYINT(1) NOT NULL,
    `created_at` DATE NOT NULL,
    `updated_at` DATE NOT NULL
);
ALTER TABLE
    `consultations` ADD CONSTRAINT `consultations_patient_id_foreign` FOREIGN KEY(`patient_id`) REFERENCES `patients`(`id`);
ALTER TABLE
    `consultations` ADD CONSTRAINT `consultations_doctor_id_foreign` FOREIGN KEY(`doctor_id`) REFERENCES `doctors`(`id`);