CREATE TABLE admins (
  login SERIAL,
  senha VARCHAR(30) NOT NULL,
  CONSTRAINT pk_login PRIMARY KEY (login)
);

CREATE TABLE itens (
  id_item SERIAL PRIMARY KEY,
  dono INT,
  nome VARCHAR(100),
  foto VARCHAR(255),
  data_criacao DATE,
  CONSTRAINT fk_dono FOREIGN KEY (dono) REFERENCES admins(login)
);

-- Tabela de relacionamento entre admin e item
CREATE TABLE admins_itens (
  login INT,
  id_item INT,
  CONSTRAINT pk_login_id_item PRIMARY KEY (login, id_item),
  FOREIGN KEY (login) REFERENCES admins (login),
  FOREIGN KEY (id_item) REFERENCES itens (id_item)
);
