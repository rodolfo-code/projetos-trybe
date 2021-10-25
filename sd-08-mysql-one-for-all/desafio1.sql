CREATE SCHEMA IF NOT EXISTS SpotifyClone;

USE SpotifyClone;

CREATE TABLE planos (
id_plano INT PRIMARY KEY AUTO_INCREMENT,
plano VARCHAR(50) NOT NULL,
valor_plano DECIMAL(3, 2) NOT NULL
)  ENGINE = InnoDB;

CREATE TABLE artistas (
id_artista INT PRIMARY KEY AUTO_INCREMENT,
artista VARCHAR(50) NOT NULL
)  ENGINE = InnoDB;

CREATE TABLE albuns (
id_album INT PRIMARY KEY AUTO_INCREMENT,
album VARCHAR(50) NOT NULL,
id_artista INT,
FOREIGN KEY (id_artista)
REFERENCES artistas (id_artista)
)  ENGINE = InnoDB;

CREATE TABLE cancoes (
id_cancao INT PRIMARY KEY AUTO_INCREMENT,
cancao VARCHAR(50) NOT NULL,
id_album INT,
FOREIGN KEY (id_album)
REFERENCES albuns (id_album)
)  ENGINE = InnoDB;

CREATE TABLE usuarios (
id_usuario INT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(50) NOT NULL,
idade INT NOT NULL,
id_plano INT,
FOREIGN KEY (id_plano)
REFERENCES planos (id_plano)
)  ENGINE = InnoDB;

CREATE TABLE historico_cancoes (
PRIMARY KEY (id_usuario, id_cancao),
id_usuario INT,
id_cancao INT,
FOREIGN KEY (id_usuario)
REFERENCES usuarios (id_usuario),
FOREIGN KEY (id_cancao)
REFERENCES cancoes (id_cancao)
)  ENGINE = InnoDB;

CREATE TABLE seguindo (
PRIMARY KEY (id_usuario, id_artista),
id_usuario INT,
id_artista INT,
FOREIGN KEY (id_usuario)
REFERENCES usuarios (id_usuario),
FOREIGN KEY (id_artista)
REFERENCES artistas (id_artista)
)  ENGINE = InnoDB;

INSERT INTO artistas (id_artista, artista)
VALUES
(1, 'Walter Phoenix'),
(2, 'Peter Strong'),
(3, 'Lance Day'),
(4, 'Freedie Shannon');

INSERT INTO albuns (id_album, album, id_artista)
VALUES
(1, 'Envious', 1),
(2, 'Exuberant', 1),
(3, 'Hallowed Steam', 2),
(4, 'Incandescent', 3),
(5, 'Temporary Culture', 4);

INSERT INTO cancoes (id_cancao, cancao, id_album)
VALUES
(1, 'Soul For Us', 1),
(2, 'Reflections Of Magic', 1),
(3, 'Dance With Her Own', 1),
(4, 'Troubles Of My Inner Fire', 2),
(5, 'Time Fireworks', 2),
(6, 'Magic Circus', 3),
(7, 'Honey, So Do I', 3),
(8, "Sweetie, Let's Go Wild", 3),
(9, 'She Knows', 3),
(10, 'Fantasy For Me', 4),
(11, 'Celebration Of More', 4),
(12, 'Rock His Everything', 4),
(13, 'Home Forever', 4),
(14, 'Diamond Power', 4),
(15, "Honey, Let's Be Silly", 4),
(16, 'Thang Of Thunder', 5),
(17, 'Words Of Her Life', 5),
(18, 'Without My Streets', 5);

INSERT INTO planos (id_plano, plano, valor_plano)
VALUES
(1, 'gratuito', "0.00"),
(2, 'familiar', "7.99"),
(3, 'universitario', "5.99");

INSERT INTO usuarios (id_usuario, usuario, idade, id_plano)
VALUES
(1, 'Thati', 23, 1),
(2, 'Cintia', 35, 2),
(3, 'Bill', 20, 3),
(4, 'Roger', 45, 1);

INSERT INTO historico_cancoes (id_usuario, id_cancao)
VALUES
(1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4, 18),
(4, 11);

INSERT INTO seguindo (id_usuario, id_artista)
VALUES
(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);
