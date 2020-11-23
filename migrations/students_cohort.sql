CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  email VARCHAR,
  phone VARCHAR,
  github VARCHAR,
  start_date DATE,
  end_date DATE,
  cohort_id INTEGER
);

CREATE TABLE cohorts (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR NOT NULL,
  start_date DATE,
  end_date DATE
);