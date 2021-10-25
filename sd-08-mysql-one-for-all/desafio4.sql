CREATE VIEW SpotifyClone.top_3_artistas AS
SELECT a.artista, COUNT(s.id_artista) AS seguidores
FROM artistas AS a
INNER JOIN seguindo AS s ON a.id_artista = s.id_artista
GROUP BY a.artista
ORDER BY seguidores DESC, a.artista 
LIMIT 3;
