CREATE VIEW SpotifyClone.estatisticas_musicais AS 
SELECT (SELECT COUNT(id_cancao) FROM cancoes) AS cancoes,
(SELECT COUNT(id_artista) FROM artistas) AS artistas,
(SELECT COUNT(id_album) FROM albuns) AS albuns;
