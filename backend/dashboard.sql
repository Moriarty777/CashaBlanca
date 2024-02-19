-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Create expenses table
CREATE TABLE IF NOT EXISTS expenses (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    category VARCHAR(255) NOT NULL
);

-- Create income table
CREATE TABLE IF NOT EXISTS income (
    id SERIAL PRIMARY KEY,
    source VARCHAR(255) NOT NULL,
    amount NUMERIC(10, 2) NOT NULL
);