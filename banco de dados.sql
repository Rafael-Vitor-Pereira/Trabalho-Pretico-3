-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Jan-2022 às 21:07
-- Versão do servidor: 10.4.21-MariaDB
-- versão do PHP: 7.3.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `api-clubes`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clubes`
--

CREATE TABLE `clubes` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `anoFundacao` int(11) NOT NULL,
  `ligaId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `clubes`
--

INSERT INTO `clubes` (`id`, `nome`, `anoFundacao`, `ligaId`) VALUES
(1, 'Atlético-MG', 1908, 1),
(2, 'Flamengo', 1895, 1),
(3, 'Internacional', 1909, 1),
(4, 'Palmeiras', 1914, 1),
(5, 'Atlético de Madrid', 1903, 2),
(6, 'Barcelona', 1899, 2),
(7, 'Real Madrid', 1902, 2),
(8, 'Nice', 1904, 3),
(9, 'Lyon', 1950, 3),
(10, 'Paris SG', 1970, 3),
(11, 'Liverpool', 1892, 4),
(12, 'Manchester City', 1880, 4),
(13, 'Manchester United', 1878, 4),
(14, 'Chelsea', 1905, 4),
(15, 'Bayern', 1900, 5),
(16, 'Borussia', 1909, 5),
(17, 'Schalke 04', 1904, 5),
(18, 'Internazionale', 1908, 6),
(19, 'Juventus', 1897, 6),
(20, 'Milan', 1899, 6),
(21, 'Roma', 1927, 6),
(22, 'Boca Juniors', 1905, 7),
(23, 'Independiente', 1905, 7),
(24, 'Racing', 1903, 7),
(25, 'River Plate', 1901, 7);

-- --------------------------------------------------------

--
-- Estrutura da tabela `ligas`
--

CREATE TABLE `ligas` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `pais` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `ligas`
--

INSERT INTO `ligas` (`id`, `nome`, `pais`) VALUES
(1, 'Brasileirão', 'Brasil'),
(2, 'La Liga', 'Espanha'),
(3, 'Ligue 1', 'França'),
(4, 'Premier Ligue', 'Inglaterra'),
(5, 'Bundesliga', 'Alemanha'),
(6, 'Calcio A', 'Itália'),
(7, 'Primera División', 'Argentina');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clubes`
--
ALTER TABLE `clubes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ligaId` (`ligaId`);

--
-- Índices para tabela `ligas`
--
ALTER TABLE `ligas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clubes`
--
ALTER TABLE `clubes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de tabela `ligas`
--
ALTER TABLE `ligas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `clubes`
--
ALTER TABLE `clubes`
  ADD CONSTRAINT `clubes_ibfk_1` FOREIGN KEY (`ligaId`) REFERENCES `ligas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
