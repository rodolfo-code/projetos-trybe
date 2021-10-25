SELECT customers.ContactName AS 'Nome de contato', 
shippers.ShipperName AS 'Empresa que fez o envio', 
orders.OrderDate AS 'Data do pedido'
FROM w3schools.customers  customers
INNER JOIN w3schools.orders AS orders ON customers.CustomerID = orders.CustomerID
INNER JOIN w3schools.shippers AS shippers ON orders.ShipperID = shippers.ShipperID
WHERE shippers.ShipperId IN(1, 2) 
ORDER BY customers.ContactName, shippers.ShipperName, orders.OrderDate;
