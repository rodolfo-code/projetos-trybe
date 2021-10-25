SELECT jobs.JOB_TITLE AS Cargo, ROUND(AVG(employees.salary), 2) AS `Média salarial`,
case
WHEN AVG(employees.salary) >= 2000 AND AVG(employees.salary) <= 5800 THEN 'Júnior'
WHEN AVG(employees.salary) >= 5801 AND AVG(employees.salary) <= 7500 THEN 'Pleno'
WHEN AVG(employees.salary) >= 7501 AND AVG(employees.salary) <= 10500 THEN 'Sênior'
ELSE 'CEO'
END AS 'Senioridade'
FROM hr.jobs AS jobs INNER JOIN hr.employees AS employees
ON jobs.JOB_ID = employees.JOB_ID GROUP BY Cargo ORDER BY `Média salarial`, Cargo;
