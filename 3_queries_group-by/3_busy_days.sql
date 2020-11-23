SELECT
  assignments.day,
  COUNT(assignments.*) AS total_assignments
FROM
  assignments
GROUP BY
  assignments.day
HAVING
  COUNT(assignments.*) >= 10
ORDER BY
  assignments.day;