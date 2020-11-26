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
      text:`SELECT students.id AS student_id, students.name AS name, cohorts.name AS cohort
      FROM students JOIN cohorts ON cohorts.id = students.cohort_id WHERE cohorts.name LIKE $1
      LIMIT $2`,
      values:[`%${process.argv[2]}%`,process.argv[3] || 5]
    }

    pool.query(sqlQuery)
    .then(res => {
      res.rows.forEach(user => {
        console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
      })
    });
   
 
