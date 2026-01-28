CREATE TABLE admins (
  login VARCHAR(30) NOT NULL,
  senha VARCHAR(30) NOT NULL,
  CONSTRAINT pk_login PRIMARY KEY (login)
);

CREATE TABLE itens (
  id_item SERIAL,
  dono VARCHAR(20),
  nome VARCHAR(100),
  foto VARCHAR(255),
  data_criacao DATE
);

INSERT INTO admins (login, senha) VALUES ('admin', '000');