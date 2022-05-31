CREATE DATABASE rocketgames;
USE rocketgames;

CREATE TABLE  `admin`(
 `id` INT(10) UNSIGNED PRIMARY KEY UNIQUE NOT NULL AUTO_INCREMENT,
 `login` varchar(45) NOT NULL UNIQUE,
 `senha` varchar(45) NOT NULL,
 `nome` varchar(45) NOT NULL
 );
 
  CREATE TABLE `usuario`(
`id`INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
`nome` VARCHAR(45) NOT NULL,
`CPF`VARCHAR(11) NOT NULL,
`e-mail` VARCHAR(50) NOT NULL,
`endereço` VARCHAR(45) NOT NULL,
`telefone` CHAR(11) NOT NULL,
`data_de_nascimento` DATE,
`senha` VARCHAR(45) NOT NULL
);

 CREATE TABLE `endereço`(
`id`INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
`cidade` VARCHAR(45) NOT NULL,
`estado`VARCHAR(45) NOT NULL,
`logradouro` VARCHAR(45) NOT NULL,
`numero` VARCHAR(45) NOT NULL,
`CEP` CHAR(8) NOT NULL,
`bairro` VARCHAR(45) NOT NULL,
`complemento` VARCHAR(45) NOT NULL,
`usuario_id` INT(10) UNSIGNED NOT NULL,
FOREIGN KEY usuario_foreign (usuario_id) REFERENCES usuario(id)
);

 CREATE TABLE `pedidos`(
`id`INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
`data_pedido` DATETIME,
`valor_total` VARCHAR(45) NOT NULL,
`usuario_id` INT(10) UNSIGNED NOT NULL,
FOREIGN KEY usuario1_foreign (usuario_id) REFERENCES usuario(id)
);

CREATE TABLE `tipoconsole`(
`id`INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 `tipoconsole` VARCHAR(45) NOT NULL 
);

CREATE TABLE `tipoproduto`(
`id`INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
 `tipoproduto` VARCHAR(45) NOT NULL 
);

CREATE TABLE `produto`(
`id`INT(10) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
`tipoconsole_id` INT(10) UNSIGNED NOT NULL,
`tipoproduto_id` INT(10) UNSIGNED NULL,
`nome` varchar(45) NOT NULL,
`preco` varchar(45) NOT NULL,
FOREIGN KEY tipoconsole_foreign (tipoconsole_id) REFERENCES tipoconsole(id),
FOREIGN KEY tipoproduto_foreign (tipoproduto_id) REFERENCES tipoproduto(id)
);

CREATE TABLE `pedidos_has_produto`(
`pedidos_id` INT(10) UNSIGNED  NOT NULL,
`produto_id` INT(10) UNSIGNED  NOT NULL,
FOREIGN KEY produto_foreign (produto_id) REFERENCES produto(id),
FOREIGN KEY pedidos_foreign (pedidos_id) REFERENCES Pedidos(id) )
;






