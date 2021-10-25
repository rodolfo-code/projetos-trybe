select concat(e.FirstName, ' ', e.LastName) as `Nome completo`, count(*) as `Total de pedidos` 
from w3schools.employees as e 
inner join w3schools.orders as o on e.EmployeeID = o.EmployeeID 
group by `Nome completo` order by `Total de pedidos`;
