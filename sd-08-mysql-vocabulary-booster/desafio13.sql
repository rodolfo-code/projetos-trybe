SELECT P.ProductName AS 'Produto', P.Price AS 'Preço' FROM w3schools.products AS P
INNER JOIN w3schools.order_details AS d ON P.ProductID = d.ProductID
WHERE d.Quantity > 80
ORDER BY Produto;
