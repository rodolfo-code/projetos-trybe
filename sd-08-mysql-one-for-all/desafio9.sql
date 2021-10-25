DELIMITER $$

CREATE PROCEDURE SpotifyClone.albuns_do_artista(IN nome VARCHAR(50))
BEGIN 
SELECT art.artista, al.album
FROM artistas AS art
INNER JOIN albuns AS al ON art.id_artista = al.id_artista
WHERE art.artista = nome
ORDER BY art.artista; 
END $$

DELIMITER ;
