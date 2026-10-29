CREATE DATABASE expense_tracker;

USE expense_tracker;

CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50) NOT NULL,
    expense_date DATE DEFAULT (CURRENT_DATE)
);

INSERT INTO expenses (title, amount, category)
VALUES
('Food', 150, 'Food'),
('Transport', 80, 'Transport'),
('Shopping', 500, 'Shopping'),
('Education', 300, 'Education'),
('Entertainment', 200, 'Entertainment');
