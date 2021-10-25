CREATE VIEW SpotifyClone.cancoes_premium AS
SELECT c.cancao AS nome, COUNT(hc.id_usuario) AS reproducoes
FROM cancoes AS c
INNER JOIN historico_cancoes AS hc ON c.id_cancao = hc.id_cancao
INNER JOIN usuarios AS us ON hc.id_usuario = us.id_usuario
WHERE
us.id_plano IN (2 , 3)
GROUP BY hc.id_cancao
ORDER BY nome;
