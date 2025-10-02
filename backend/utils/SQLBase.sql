CREATE TABLE admins(
	login VARCHAR(20) NOT NULL,
	senha VARCHAR(30) NOT NULL,
	CONSTRAINT pk_login PRIMARY KEY (login)
);

CREATE TABLE itens(
	id_item SERIAL, 
	dono VARCHAR(15),
	nome VARCHAR(30) NOT NULL,
	foto VARCHAR(100),
	dataCriacao date,
	CONSTRAINT pk_id_item PRIMARY KEY (id_item)
);

CREATE TABLE controle(
	login VARCHAR(20),
	id_item INT,
	CONSTRAINT pk_login_adm FOREIGN KEY (login) REFERENCES admins(login),
	CONSTRAINT pk_id_item FOREIGN KEY (id_item) REFERENCES itens(id_item)
)
