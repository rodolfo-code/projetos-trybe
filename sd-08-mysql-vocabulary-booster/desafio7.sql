SELECT UCASE(CONCAT(e.first_name,' ', e.last_name)) AS `Nome completo`,
jb.start_date AS `Data de início`,
e.salary AS `Salário`
FROM hr.employees AS e
INNER JOIN hr.job_history AS jb ON jb.employee_id = e.employee_id
WHERE MONTH(jb.start_date) IN (1,2,3)
ORDER BY `Nome completo`, `Data de início`;
