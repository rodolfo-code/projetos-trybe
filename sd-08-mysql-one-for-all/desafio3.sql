CREATE VIEW SpotifyClone.historico_reproducao_usuarios AS
SELECT us.usuario, c.cancao AS nome
FROM usuarios AS us
INNER JOIN historico_cancoes AS hc ON us.id_usuario = hc.id_usuario
INNER JOIN cancoes AS c ON hc.id_cancao = c.id_cancao
ORDER BY us.usuario , c.cancao;
