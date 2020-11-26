const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool
    .connect()
    .then((client) => console.log(`Connected to ${client.database} db on ${client.host}`))
    .catch((err) => console.log(`${err}`));
   
    const sqlQuery = {
      text:  `SELECT
      DISTINCT teachers.name AS teacher,
      cohorts.name AS cohort
    FROM
      teachers
      JOIN assistance_requests ON teachers.id = assistance_requests.teacher_id
      JOIN students ON assistance_requests.student_id = students.id
      JOIN cohorts ON students.cohort_id = cohorts.id
    WHERE
      cohorts.name = $1
    ORDER BY
      teacher`,
      values:[`${process.argv[2]}`]
    }

    pool.query(sqlQuery)
    .then(res => {
      res.rows.forEach(row => {
        console.log(`${row.cohort} : ${row.teacher}`);
      })
    });
   
 