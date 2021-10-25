SELECT CONCAT(e.first_name,' ', e.last_name) AS `Nome completo`, 
j.job_title AS `Cargo`, 
jbh.start_date AS `Data de início do cargo`,
d.department_name AS `Departamento`
FROM hr.employees AS e 
INNER JOIN hr.job_history AS jbh ON e.employee_id = jbh.employee_id
INNER JOIN hr.jobs AS j ON jbh.job_id = j.job_id 
INNER JOIN hr.departments AS d ON jbh.department_id = d.department_id 
ORDER BY `Nome completo` DESC, `Cargo`;
