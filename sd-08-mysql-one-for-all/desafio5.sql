CREATE VIEW SpotifyClone.top_2_hits_do_momento AS
SELECT c.cancao, COUNT(hc.id_cancao) AS reproducoes
FROM cancoes AS c
INNER JOIN historico_cancoes AS hc ON c.id_cancao = hc.id_cancao
GROUP BY c.cancao
ORDER BY reproducoes DESC , c.cancao
LIMIT 2;
