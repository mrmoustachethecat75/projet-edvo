-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : sam. 08 avr. 2023 à 16:12
-- Version du serveur : 10.5.18-MariaDB-0+deb11u1
-- Version de PHP : 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `application_edvo`
--

-- --------------------------------------------------------

--
-- Structure de la table `auth`
--

CREATE TABLE `auth` (
  `id` int(11) NOT NULL,
  `auth_ident` varchar(50) NOT NULL,
  `auth_pass` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_general_ci;

--
-- Déchargement des données de la table `auth`
--

INSERT INTO `auth` (`id`, `auth_ident`, `auth_pass`, `created_at`, `updated_at`) VALUES
(3, 'user', '$2y$13$LGcFxb66RAmCgPX5Is4jEeWCPGQLzalafOXK.EGcKtj.B.cNr05fW', '2023-03-31 21:32:36', '2023-03-31 21:32:36');

-- --------------------------------------------------------

--
-- Structure de la table `residents`
--

CREATE TABLE `residents` (
  `id` int(11) NOT NULL,
  `resident_name` varchar(50) NOT NULL,
  `resident_phone` varchar(50) NOT NULL,
  `resident_date` date NOT NULL,
  `resident_picture` varchar(255) NOT NULL,
  `resident_genre` int(1) NOT NULL,
  `resident_status` int(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_general_ci;

--
-- Déchargement des données de la table `residents`
--

INSERT INTO `residents` (`id`, `resident_name`, `resident_phone`, `resident_date`, `resident_picture`, `resident_genre`, `resident_status`, `created_at`, `updated_at`) VALUES
(14, 'YANNIS', '06 62 24 35 65', '2022-08-29', 'YANNIS.png', 1, 1, '2023-04-02 12:56:20', '2023-04-02 12:56:20'),
(21, 'XAVIER', '06 07 58 60 65', '2022-12-05', 'XAVIER.jpeg', 1, 1, '2023-04-02 12:57:15', '2023-04-02 12:57:15'),
(18, 'TOM', '07 64 20 30 15', '2022-11-03', 'TOM.png', 1, 1, '2023-04-02 12:58:18', '2023-04-02 12:58:18'),
(7, 'THOMAS', '07 55 68 49 76', '2022-04-19', 'THOMAS.jpeg', 1, 2, '2023-04-02 12:59:31', '2023-04-02 12:59:31'),
(16, 'THELMA', '06 26 36 33 89', '2022-11-02', 'THELMA.png', 2, 1, '2023-04-02 13:02:12', '2023-04-02 13:02:12'),
(26, 'SYLVAIN.F', '06 79 33 33 75', '2023-02-27', 'SYLVAIN.F.jpeg', 1, 1, '2023-04-02 13:05:30', '2023-04-02 13:05:30'),
(11, 'SYLVAIN.B', '06 52 65 03 05', '2022-05-09', 'SYLVAIN.B.jpeg', 1, 1, '2023-04-02 13:07:30', '2023-04-02 13:07:30'),
(0, 'SEQUOÏA', '00 00 00 00 00', '2020-01-01', 'SEQUOÏA.png', 2, 2, '2023-04-02 13:22:14', '2023-04-02 13:22:14'),
(13, 'SAMIR', '07 58 54 76 24', '2022-06-21', 'SAMIR.jpeg', 1, 1, '2023-04-02 13:23:44', '2023-04-02 13:23:44'),
(30, 'MARIA', '06 85 40 98 10', '2023-03-27', 'MARIA.jpeg', 2, 1, '2023-04-02 17:51:28', '2023-04-08 10:32:02'),
(12, 'NICOLAS', '06 64 75 37 13', '2022-06-21', 'NICOLAS.jpeg', 1, 1, '2023-04-02 13:40:46', '2023-04-02 13:40:46'),
(9, 'MORGANE', '06 43 78 85 68', '2022-05-02', 'MORGANE.jpeg', 2, 1, '2023-04-02 13:42:09', '2023-04-02 13:42:09'),
(29, 'MILAN', '06 59 24 84 90', '2023-03-13', 'MILAN.jpeg', 1, 1, '2023-04-02 13:43:56', '2023-04-02 13:43:56'),
(2, 'MAUD', '07 81 59 00 48', '2022-01-31', 'MAUD.jpeg', 2, 2, '2023-04-02 13:44:50', '2023-04-02 13:44:50'),
(17, 'MATHIEU', '06 15 83 53 01 ', '2022-11-02', 'MATHIEU.png', 1, 1, '2023-04-02 13:45:31', '2023-04-02 13:45:31'),
(1, 'MARIAM', '06 59 48 39 43', '2021-11-22', 'MARIAM.jpeg', 2, 2, '2023-04-02 13:46:37', '2023-04-02 13:46:37'),
(4, 'LAURENT', '06 62 02 69 61', '2022-02-15', 'LAURENT.png', 1, 2, '2023-04-02 13:47:24', '2023-04-02 13:47:24'),
(25, 'KEVIN', '06 34 35 62 56', '2023-01-23', 'KEVIN.jpeg', 1, 1, '2023-04-02 13:48:15', '2023-04-02 13:48:15'),
(5, 'JULIETTE', '07 63 44 23 26 ', '2022-03-22', 'JULIETTE.jpeg', 2, 1, '2023-04-02 13:49:15', '2023-04-02 13:49:15'),
(10, 'JULIEN', '07 71 60 63 94 ', '2022-05-09', 'JULIEN.jpeg', 1, 1, '2023-04-02 13:50:00', '2023-04-02 13:50:00'),
(20, 'JEAN-DAMIEN', '06 98 58 15 59', '2022-11-14', 'JEAN-DAMIEN.png', 1, 1, '2023-04-02 13:50:58', '2023-04-02 13:50:58'),
(3, 'JASON', '06 69 67 32 92', '2022-02-14', 'JASON.png', 1, 2, '2023-04-02 13:51:59', '2023-04-02 13:51:59'),
(24, 'DYNISS', '06 08 12 31 26', '2022-12-12', 'DYNISS.jpeg', 1, 1, '2023-04-02 13:52:48', '2023-04-02 13:52:48'),
(28, 'CAMERON', '06 50 38 92 03', '2023-03-13', 'CAMERON.jpeg', 1, 1, '2023-04-02 13:53:30', '2023-04-02 13:53:30'),
(19, 'BRUNO', '06 23 32 59 57 ', '2022-11-07', 'BRUNO.png', 1, 1, '2023-04-02 13:54:19', '2023-04-02 13:54:19'),
(8, 'BAPTISTE', '06 48 12 24 54 ', '2022-05-02', 'BAPTISTE.jpeg', 1, 2, '2023-04-02 13:55:17', '2023-04-02 13:55:17'),
(22, 'AYMERIC', '06 67 72 64 44 ', '2022-12-05', 'AYMERIC.jpeg', 1, 1, '2023-04-02 13:55:58', '2023-04-02 13:55:58'),
(27, 'AURELIEN', '07 58 29 52 05', '2023-03-06', 'AURELIEN.jpeg', 1, 1, '2023-04-02 13:56:38', '2023-04-02 13:56:38'),
(6, 'ARTHUR', '07 85 15 52 10', '2022-04-04', 'ARTHUR.png', 1, 2, '2023-04-02 13:57:19', '2023-04-02 13:57:19'),
(23, 'ANNE-CHRISTINE', '07 44 55 29 87', '2022-12-05', 'ANNE-CHRISTINE.jpeg', 2, 1, '2023-04-02 13:58:11', '2023-04-02 13:58:11'),
(15, 'ALEXANDRE', '07 48 60 87 87', '2022-09-26', 'ALEXANDRE.png', 1, 1, '2023-04-02 13:59:09', '2023-04-02 13:59:09');

-- --------------------------------------------------------

--
-- Structure de la table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `week_tasks` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=MyISAM DEFAULT CHARSET=utf16 COLLATE=utf16_general_ci;

--
-- Déchargement des données de la table `tasks`
--

INSERT INTO `tasks` (`id`, `week_tasks`, `created_at`, `updated_at`) VALUES
(7, '{\"lundi\":{\"cuisine\":{\"resident1\":\"KEVIN\",\"resident2\":\"MARIA\",\"resident3\":\"MATHIEU\"},\"salleAManger\":{\"resident\":\"SAMIR\"},\"salleGt\":{\"resident\":\"CAMERON\"},\"couloir\":{\"resident1\":\"YANNIS\",\"resident2\":\"AYMERIC\"},\"cave\":{\"resident\":\"JEAN-DAMIEN\"},\"poubelle\":{\"resident\":\"MILAN\"},\"wc\":{\"resident\":\"AURELIEN\"},\"frigo\":{\"resident1\":\"JULIETTE\",\"resident2\":\"DYNISS\"},\"ramasse\":{\"resident1\":\"BRUNO\",\"resident2\":\"JULIEN\",\"resident3\":\"XAVIER\"},\"ext\":{\"resident\":\"THELMA\"}},\"mardi\":{\"cuisine\":{\"resident1\":\"YANNIS\",\"resident2\":\"MILAN\",\"resident3\":\"TOM\"},\"salleAManger\":{\"resident\":\"JULIETTE\"},\"salleGt\":{\"resident\":\"AYMERIC\"},\"couloir\":{\"resident1\":\"ALEXANDRE\",\"resident2\":\"JULIEN\"},\"wc\":{\"resident\":\"DYNISS\"},\"frigo\":{\"resident1\":\"JEAN-DAMIEN\",\"resident2\":\"SYLVAIN.F\"},\"ramasse\":{\"resident1\":\"CAMERON\",\"resident2\":\"MORGANE\",\"resident3\":\"SYLVAIN.B\"}},\"mercredi\":{\"cuisine\":{\"resident1\":\"ANNE-CHRISTINE\",\"resident2\":\"SAMIR\",\"resident3\":\"NICOLAS\"},\"salleAManger\":{\"resident\":\"MORGANE\"},\"salleGt\":{\"resident\":\"KEVIN\"},\"couloir\":{\"resident1\":\"XAVIER\",\"resident2\":\"MATHIEU\"},\"wc\":{\"resident\":\"MILAN\"},\"frigo\":{\"resident1\":\"JULIEN\",\"resident2\":\"ALEXANDRE\"},\"ramasse\":{\"resident1\":\"SYLVAIN.F\",\"resident2\":\"AURELIEN\",\"resident3\":\"AYMERIC\"}},\"jeudi\":{\"cuisine\":{\"resident1\":\"JEAN-DAMIEN\",\"resident2\":\"SYLVAIN.F\",\"resident3\":\"BRUNO\"},\"salleAManger\":{\"resident\":\"MATHIEU\"},\"salleGt\":{\"resident\":\"JULIEN\"},\"couloir\":{\"resident1\":\"AURELIEN\",\"resident2\":\"NICOLAS\"},\"wc\":{\"resident\":\"KEVIN\"},\"frigo\":{\"resident1\":\"YANNIS\",\"resident2\":\"SAMIR\"},\"ramasse\":{\"resident1\":\"DYNISS\",\"resident2\":\"JULIETTE\",\"resident3\":\"ALEXANDRE\"}},\"vendredi\":{\"cuisine\":{\"resident1\":\"CAMERON\",\"resident2\":\"THELMA\",\"resident3\":\"AYMERIC\"},\"salleAManger\":{\"resident\":\"SYLVAIN.F\"},\"salleGt\":{\"resident\":\"AURELIEN\"},\"couloir\":{\"resident1\":\"BRUNO\",\"resident2\":\"MILAN\"},\"cave\":{\"resident\":\"NICOLAS\"},\"poubelle\":{\"resident\":\"ALEXANDRE\"},\"wc\":{\"resident\":\"YANNIS\"},\"frigo\":{\"resident1\":\"ANNE-CHRISTINE\",\"resident2\":\"KEVIN\"},\"ramasse\":{\"resident1\":\"MATHIEU\",\"resident2\":\"SAMIR\",\"resident3\":\"MARIA\"},\"ext\":{\"resident\":\"SYLVAIN.B\"}},\"samedi\":{\"cuisine\":{\"resident1\":\"DYNISS\",\"resident2\":\"JULIETTE\"},\"salleAManger\":{\"resident\":\"MILAN\"},\"wc\":{\"resident\":\"TOM\"},\"frigo\":{\"resident\":\"THELMA\"}},\"dimanche\":{\"cuisine\":{\"resident1\":\"MORGANE\",\"resident2\":\"AURELIEN\"},\"salleAManger\":{\"resident\":\"AYMERIC\"},\"wc\":{\"resident\":\"ALEXANDRE\"},\"frigo\":{\"resident\":\"BRUNO\"}}}', '2023-04-08 13:59:09', '2023-04-08 13:59:09'),
(6, '{\"lundi\":{\"cuisine\":{\"resident1\":\"JULIETTE\",\"resident2\":\"THELMA\",\"resident3\":\"JEAN-DAMIEN\"},\"salleAManger\":{\"resident\":\"MORGANE\"},\"salleGt\":{\"resident\":\"SYLVAIN.B\"},\"couloir\":{\"resident1\":\"BRUNO\",\"resident2\":\"SYLVAIN.F\"},\"cave\":{\"resident\":\"ANNE-CHRISTINE\"},\"poubelle\":{\"resident\":\"CAMERON\"},\"wc\":{\"resident\":\"YANNIS\"},\"frigo\":{\"resident1\":\"NICOLAS\",\"resident2\":\"ALEXANDRE\"},\"ramasse\":{\"resident1\":\"XAVIER\",\"resident2\":\"MATHIEU\",\"resident3\":\"JULIEN\"},\"ext\":{\"resident\":\"AURELIEN\"}},\"mardi\":{\"cuisine\":{\"resident1\":\"SYLVAIN.F\",\"resident2\":\"ALEXANDRE\",\"resident3\":\"TOM\"},\"salleAManger\":{\"resident\":\"MATHIEU\"},\"salleGt\":{\"resident\":\"MORGANE\"},\"couloir\":{\"resident1\":\"DYNISS\",\"resident2\":\"SYLVAIN.B\"},\"wc\":{\"resident\":\"JEAN-DAMIEN\"},\"frigo\":{\"resident1\":\"XAVIER\",\"resident2\":\"SAMIR\"},\"ramasse\":{\"resident1\":\"CAMERON\",\"resident2\":\"BRUNO\",\"resident3\":\"THELMA\"}},\"mercredi\":{\"cuisine\":{\"resident1\":\"SAMIR\",\"resident2\":\"KEVIN\",\"resident3\":\"MILAN\"},\"salleAManger\":{\"resident\":\"ANNE-CHRISTINE\"},\"salleGt\":{\"resident\":\"YANNIS\"},\"couloir\":{\"resident1\":\"NICOLAS\",\"resident2\":\"AYMERIC\"},\"wc\":{\"resident\":\"BRUNO\"},\"frigo\":{\"resident1\":\"SYLVAIN.B\",\"resident2\":\"TOM\"},\"ramasse\":{\"resident1\":\"AURELIEN\",\"resident2\":\"ALEXANDRE\",\"resident3\":\"MORGANE\"}},\"jeudi\":{\"cuisine\":{\"resident1\":\"JULIEN\",\"resident2\":\"XAVIER\",\"resident3\":\"AYMERIC\"},\"salleAManger\":{\"resident\":\"AURELIEN\"},\"salleGt\":{\"resident\":\"NICOLAS\"},\"couloir\":{\"resident1\":\"MILAN\",\"resident2\":\"TOM\"},\"wc\":{\"resident\":\"SAMIR\"},\"frigo\":{\"resident1\":\"SYLVAIN.F\",\"resident2\":\"ANNE-CHRISTINE\"},\"ramasse\":{\"resident1\":\"JULIETTE\",\"resident2\":\"YANNIS\",\"resident3\":\"KEVIN\"}},\"vendredi\":{\"cuisine\":{\"resident1\":\"SYLVAIN.B\",\"resident2\":\"MARIA\",\"resident3\":\"YANNIS\"},\"salleAManger\":{\"resident\":\"DYNISS\"},\"salleGt\":{\"resident\":\"BRUNO\"},\"couloir\":{\"resident1\":\"JULIEN\",\"resident2\":\"JEAN-DAMIEN\"},\"cave\":{\"resident\":\"KEVIN\"},\"poubelle\":{\"resident\":\"SAMIR\"},\"wc\":{\"resident\":\"AYMERIC\"},\"frigo\":{\"resident1\":\"CAMERON\",\"resident2\":\"MILAN\"},\"ramasse\":{\"resident1\":\"ANNE-CHRISTINE\",\"resident2\":\"NICOLAS\",\"resident3\":\"TOM\"},\"ext\":{\"resident\":\"MORGANE\"}},\"samedi\":{\"cuisine\":{\"resident1\":\"DYNISS\",\"resident2\":\"NICOLAS\"},\"salleAManger\":{\"resident\":\"TOM\"},\"wc\":{\"resident\":\"CAMERON\"},\"frigo\":{\"resident\":\"YANNIS\"}},\"dimanche\":{\"cuisine\":{\"resident1\":\"AURELIEN\",\"resident2\":\"ANNE-CHRISTINE\"},\"salleAManger\":{\"resident\":\"SYLVAIN.F\"},\"wc\":{\"resident\":\"MATHIEU\"},\"frigo\":{\"resident\":\"JULIETTE\"}}}', '2023-04-08 13:53:56', '2023-04-08 13:53:56');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `auth`
--
ALTER TABLE `auth`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `residents`
--
ALTER TABLE `residents`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `auth`
--
ALTER TABLE `auth`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `residents`
--
ALTER TABLE `residents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=222230;

--
-- AUTO_INCREMENT pour la table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
