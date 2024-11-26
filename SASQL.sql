create table clientes(
	id_cliente serial primary key not null,
	nome varchar(60) not null,
	data_nascimento date not null,
	cpf varchar(14) not null,
	email varchar(60) not null,
	cep varchar(80) not null,
	municipio varchar(80) not null,
	senha varchar(80) not null
);

create table pedidos(
	id_pedido serial primary key not null,
	area varchar(30) not null,
	valor float not null,
	endereco varchar(80) not null,
	data date not null,
	id_cliente serial not null,
	id_prestador_servico serial not null,
	foreign key(id_cliente) references clientes(id_cliente),
	foreign key(id_prestador_servico) references prestadores_servico(id_prestador_servico)
);

create table chat(
	id_cliente serial  not null,
	id_prestador_servico serial  not null,
	foreign key(id_cliente) references clientes(id_cliente),
	foreign key(id_prestador_servico) references prestadores_servico(id_prestador_servico)
);

create table prestadores_servico(
	id_prestador_servico serial primary key not null,
	nome varchar(60) not null,
	data_nascimento date not null,
	cpf_cnpj varchar(14) not null,
	email varchar(60) not null,
	especializacao varchar(30) not null,
	município varchar(30) not null
);
create table oferta(
	id_oferta serial primary key not null,
	area varchar(30) not null,
	valor float not null,
	endereco varchar(80) not null,
	data date not null,
	id_cliente serial not null,
	id_prestador_servico serial not null,
	foreign key(id_cliente) references clientes(id_cliente),
	foreign key(id_prestador_servico) references prestadores_servico(id_prestador_servico)
);