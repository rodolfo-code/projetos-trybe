CREATE VIEW SpotifyClone.faturamento_atual AS
SELECT ROUND(MIN(p.valor_plano), 2) AS faturamento_minimo,
ROUND(MAX(p.valor_plano), 2) AS faturamento_maximo,
ROUND(AVG(p.valor_plano), 2) AS faturamento_medio,
ROUND(SUM(p.valor_plano), 2) AS faturamento_total
FROM planos AS p
INNER JOIN usuarios AS us ON p.id_plano = us.id_plano;
