const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool
    .connect()
    .then((client) => console.log(`Connected to ${pool.database} db on ${pool.host}`))
    .catch((err) => console.log(`Error connecting to ${pool.database} db`));

    pool.query(`
    SELECT
  DISTINCT teachers.name AS teacher,
  cohorts.name AS cohort
FROM
  teachers
  JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
  JOIN students ON assistance_requests.student_id = students.id
  JOIN cohorts ON students.cohort_id = cohorts.id
WHERE
  cohorts.name = '${process.argv[2] || 'JUL02' }'
ORDER BY
  teacher;
    `)
    .then(res => {
      res.rows.forEach(row => {
        console.log(`${row.cohort} : ${row.teacher}`);
      })
    });
   
 