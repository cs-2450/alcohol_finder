CREATE DATABASE alcohol_finder_development;
USE alcohol_finder_development;

CREATE TABLE beverages (id INT, description VARCHAR(255), category VARCHAR(255), size VARCHAR(255), product_code VARCHAR(255), price DECIMAL, stat VARCHAR(255), on_special BOOLEAN, special_price DECIMAL);

CREATE TABLE stores (id INT, store_name VARCHAR(255), street_address VARCHAR(255), city VARCHAR(255), phone_number VARCHAR(255), created_at DATETIME, updated_at DATETIME, hours VARCHAR(255), latitude DECIMAL(9,6), longitude DECIMAL(9,6));
