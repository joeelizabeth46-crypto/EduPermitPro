CREATE DATABASE edupermitpro;
USE edupermitpro;

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    regno VARCHAR(50) UNIQUE,
    department VARCHAR(100),
    semester VARCHAR(20),
    phone VARCHAR(20)
);

CREATE TABLE applications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    regno VARCHAR(50),
    attendance FLOAT,
    leave_type VARCHAR(50),
    days INT,
    from_date DATE,
    to_date DATE,
    status VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);