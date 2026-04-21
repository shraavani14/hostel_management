CREATE DATABASE hostel_db;
USE hostel_db;

CREATE TABLE Students (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE Rooms (
    room_id INT PRIMARY KEY,
    capacity INT,
    status VARCHAR(20)
);

CREATE TABLE Allocations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    room_id INT,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (room_id) REFERENCES Rooms(room_id)
);

CREATE TABLE Events (
    event_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    date DATE
);

CREATE TABLE Menu (
    id INT AUTO_INCREMENT PRIMARY KEY,
    day VARCHAR(20),
    breakfast VARCHAR(100),
    lunch VARCHAR(100),
    dinner VARCHAR(100)
);

CREATE TABLE Complaints (
    id INT AUTO_INCREMENT PRIMARY KEY,
    issue TEXT,
    status VARCHAR(20)
);

CREATE TABLE Sports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50)
);