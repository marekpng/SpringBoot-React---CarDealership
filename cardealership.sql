-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hostiteľ: 127.0.0.1
-- Čas generovania: St 21.Feb 2024, 22:44
-- Verzia serveru: 10.4.27-MariaDB
-- Verzia PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáza: `cardealership`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `car`
--

CREATE TABLE `car` (
  `id` bigint(20) NOT NULL,
  `brand` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `price` decimal(38,2) NOT NULL,
  `year` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `car`
--

INSERT INTO `car` (`id`, `brand`, `description`, `image`, `model`, `price`, `year`) VALUES
(1, 'BMW', 'Dobrý stav, málo najazdené.', 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=6000', 'M55', '1500.00', 2019),
(2, 'Mercedes', 'Skvele funckne auticko ktore vas podrzi', 'https://images.pexels.com/photos/205740/pexels-photo-205740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'S-class', '95000.00', 2017),
(9, 'Volvo', 'SUV', 'https://images.pexels.com/photos/14931712/pexels-photo-14931712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'XC 90', '70000.00', 2022),
(10, 'Audi', 'combi', 'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'QR7', '100000.00', 2023),
(11, 'Fiat', 'Mini', 'https://images.pexels.com/photos/2989652/pexels-photo-2989652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'Abbarth', '25000.00', 2023),
(12, 'Renault', 'Vyborne rodinne auto', 'https://images.pexels.com/photos/13459036/pexels-photo-13459036.jpeg', 'Scenic', '500.00', 2003),
(13, 'Mercedes', 'Off-road', 'https://images.pexels.com/photos/8622819/pexels-photo-8622819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'G', '150000.00', 2023);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `reviews`
--

CREATE TABLE `reviews` (
  `id` bigint(20) NOT NULL,
  `description` text NOT NULL,
  `car_entity_id` bigint(20) DEFAULT NULL,
  `date` datetime NOT NULL,
  `user_email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `reviews`
--

INSERT INTO `reviews` (`id`, `description`, `car_entity_id`, `date`, `user_email`) VALUES
(15, '123', 1, '2024-02-21 21:01:55', 'a@a'),
(17, 'Skvele vykonne auto', 1, '2024-02-21 21:07:33', 'f@f'),
(18, 'Neviem si vynachvalit', 1, '2024-02-21 21:07:45', 'user@user'),
(19, 'Super rodinne auto', 9, '2024-02-21 21:09:00', 'ferko@mrkvicka.com'),
(21, 'toto auto je bezchybne!!!', 13, '2024-02-21 21:10:20', 'o@o'),
(22, 'Auto ktore naozaj stoji za to!', 13, '2024-02-21 21:20:20', 'user@user');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `user`
--

CREATE TABLE `user` (
  `user_id` bigint(20) NOT NULL,
  `admin` bit(1) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Sťahujem dáta pre tabuľku `user`
--

INSERT INTO `user` (`user_id`, `admin`, `email`, `password`) VALUES
(1, b'0', 'm@m', '$2a$10$0R4xokvnlSYAeAY1.rTP9umIp218lOUF518.o00h9PkpEkGw/U1LK'),
(2, b'0', 'a@a', '$2a$10$voQMMPdzbu1yI3ewuktmA.W4PUbMy.DXjEy6eRYVLMtxFohOJc92O'),
(3, b'0', 't@t', '$2a$10$moSgbMmuOpEkeyY9jRM.q.LmaLFQ7Cs5XBNR1MIATgjQkooIr3TdC');

--
-- Kľúče pre exportované tabuľky
--

--
-- Indexy pre tabuľku `car`
--
ALTER TABLE `car`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pre tabuľku `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK34p35drtvqppf18r0i3m08fn7` (`car_entity_id`);

--
-- Indexy pre tabuľku `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `UK_ob8kqyqqgmefl0aco34akdtpe` (`email`);

--
-- AUTO_INCREMENT pre exportované tabuľky
--

--
-- AUTO_INCREMENT pre tabuľku `car`
--
ALTER TABLE `car`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT pre tabuľku `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT pre tabuľku `user`
--
ALTER TABLE `user`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Obmedzenie pre exportované tabuľky
--

--
-- Obmedzenie pre tabuľku `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `FK34p35drtvqppf18r0i3m08fn7` FOREIGN KEY (`car_entity_id`) REFERENCES `car` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
