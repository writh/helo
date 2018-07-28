CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    user_id INTEGER REFERENCES users (id)
);