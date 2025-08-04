CREATE DATABASE db_segtour;
USE db_segtour;

INSERT INTO seguros (destino, tipoCobertura, moeda) VALUES
('Tóquio - Japão', 'premium', 'Iene'),
('Lisboa - Portugal', 'plus', 'Euro'),
('Rio de Janeiro - Brasil', 'basico', 'Real'),
('Nova York - EUA', 'premium', 'Dólar'),
('Amsterdã - Holanda', 'plus', 'Euro'),
('São Paulo - Brasil', 'basico', 'Real'),
('Berlim - Alemanha', 'premium', 'Euro');

INSERT INTO clientes (
  nome, email, telefone, dataNascimento, cpf, endereço,
  numeroApolice, tempoViagem, valor, valorFinal, seguros_id
) VALUES
-- tempoViagem = 10 → 15% de desconto
('Agata Andrade', 'agata.andrade@email.com', 11987654321, '1990-05-12', 12345678901, 'Rua das Rosas, 123', 'AP-AGT001', 10, 800.00, 680.00, 1),
-- tempoViagem = 15 → 20% de desconto
('Alex Siqueira', 'alex.siqueira@email.com', 11923456789, '1988-11-23', 23456789012, 'Av. Paulista, 2020', 'AP-ALX002', 15, 1500.00, 1200.00, 2),
-- tempoViagem = 5 → sem desconto
('Pedro Barbosa', 'pedro.barbosa@email.com', 11976543210, '1995-07-01', 34567890123, 'Rua do Sol, 456', 'AP-PDR003', 5, 650.00, 650.00, 3),
-- tempoViagem = 12 → 15% de desconto
('Grazielle Gualter', 'grazielle.g@email.com', 21987654321, '1992-09-09', 45678901234, 'Rua da Alegria, 789', 'AP-GZG004', 12, 1200.00, 1020.00, 4),
-- tempoViagem = 20 → 20% de desconto
('Leticia Oliveira', 'leticia.oliveira@email.com', 31912345678, '1997-03-30', 56789012345, 'Av. Brasil, 1010', 'AP-LTC005', 20, 1800.00, 1440.00, 5);


DROP DATABASE db_segtour;