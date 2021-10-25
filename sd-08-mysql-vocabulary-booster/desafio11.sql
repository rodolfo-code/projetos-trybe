SELECT
  c.ContactName 'Nome',
  c.Country 'País',
  COUNT(cus.ContactName) `Número de compatriotas`
FROM w3schools.customers c, w3schools.customers cus
WHERE cus.Country = c.Country
AND c.ContactName <> cus.ContactName
GROUP BY c.ContactName, c.Country
ORDER BY `Nome`;
