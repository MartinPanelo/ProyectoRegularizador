-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-06-2023 a las 08:41:22
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `generador_crud`
--

CREATE DATABASE generador_crud;

USE generador_crud;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auto`
--

CREATE TABLE `auto` (
  `id` int(11) NOT NULL,
  `Modelo` int(11) DEFAULT NULL,
  `descripcion` varchar(50) DEFAULT NULL,
  `Pack` enum('Full','Highline','Sport','Normal') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `auto`
--

INSERT INTO `auto` (`id`, `Modelo`, `descripcion`, `Pack`) VALUES
(1, 2012, 'Gol Trend ', 'Normal'),
(2, 2001, 'Pontiac Aztek', 'Highline'),
(3, 1966, 'Batimovil', 'Sport');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `edificio`
--

CREATE TABLE `edificio` (
  `id` int(11) NOT NULL,
  `Pisos` int(11) DEFAULT NULL,
  `ubicacion` varchar(50) DEFAULT NULL,
  `habitable` tinyint(1) DEFAULT NULL,
  `calidad` enum('Exelente','Buena','Mediana','Mala') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `edificio`
--

INSERT INTO `edificio` (`id`, `Pisos`, `ubicacion`, `habitable`, `calidad`) VALUES
(1, 10, 'San Luis', 1, 'Buena'),
(2, 163, 'Dibai', 1, 'Exelente'),
(3, 3, 'Polo Norte', 0, 'Mala');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `id` int(11) NOT NULL,
  `Edad` int(11) DEFAULT NULL,
  `Nombre` varchar(50) DEFAULT NULL,
  `Vacunado` tinyint(1) DEFAULT NULL,
  `Raza` enum('Dalmata','Pomerania','Beagle','Collie') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`id`, `Edad`, `Nombre`, `Vacunado`, `Raza`) VALUES
(1, 4, 'Maggy', 0, 'Pomerania'),
(2, 5, 'Luna', 1, 'Beagle'),
(3, 6, 'Katy', 1, 'Dalmata'),
(4, 13, 'Laysa', 0, 'Pomerania'),
(5, 16, 'Kinba', 1, 'Collie');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `permisos`
--

CREATE TABLE `permisos` (
  `id` int(11) NOT NULL,
  `consultar` tinyint(1) DEFAULT NULL,
  `borrar` tinyint(1) DEFAULT NULL,
  `actualizar` tinyint(1) DEFAULT NULL,
  `agregar` tinyint(1) DEFAULT NULL,
  `recurso_nombre` varchar(50) DEFAULT NULL,
  `usuario_usuario` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `permisos`
--

INSERT INTO `permisos` (`id`, `consultar`, `borrar`, `actualizar`, `agregar`, `recurso_nombre`, `usuario_usuario`, `createdAt`, `updatedAt`) VALUES
(154, 1, 1, 1, 1, 'Edificio', '@Admin', '2023-06-15 06:19:04', '2023-06-15 06:19:04'),
(155, 1, 1, 0, 1, 'Edificio', '@Sudo', '2023-06-15 06:19:04', '2023-06-15 06:19:04'),
(156, 1, 0, 1, 1, 'Edificio', '@Wonka', '2023-06-15 06:19:04', '2023-06-15 06:19:04'),
(157, 1, 1, 1, 1, 'Mascota', '@Admin', '2023-06-15 06:20:00', '2023-06-15 06:20:00'),
(158, 1, 1, 1, 0, 'Mascota', '@Sudo', '2023-06-15 06:20:00', '2023-06-15 06:20:00'),
(159, 1, 0, 1, 1, 'Mascota', '@Wonka', '2023-06-15 06:20:00', '2023-06-15 06:20:00'),
(160, 1, 1, 1, 1, 'Auto', '@Admin', '2023-06-15 06:21:50', '2023-06-15 06:21:50'),
(161, 1, 1, 0, 1, 'Auto', '@Sudo', '2023-06-15 06:21:50', '2023-06-15 06:21:50'),
(162, 1, 0, 1, 0, 'Auto', '@Wonka', '2023-06-15 06:21:50', '2023-06-15 06:21:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recursos`
--

CREATE TABLE `recursos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `recursos`
--

INSERT INTO `recursos` (`id`, `nombre`, `createdAt`, `updatedAt`) VALUES
(344, 'Edificio', '2023-06-15 06:19:04', '2023-06-15 06:19:04'),
(345, 'Mascota', '2023-06-15 06:20:00', '2023-06-15 06:20:00'),
(346, 'Auto', '2023-06-15 06:21:50', '2023-06-15 06:21:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `usuario` varchar(255) NOT NULL,
  `contraseña` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `contraseña`, `createdAt`, `updatedAt`) VALUES
(33, '@Admin', '$2a$10$rY8Kq2eJWdss3A6QIbU.4uHi/PUwX2ARlRcumU/UjMCnnMqeCFyPe', '2023-06-14 23:12:36', '2023-06-14 23:12:36'),
(34, '@Sudo', '$2a$10$1qpoTk.J9SI6OK9.YIFlIetQu2075jKgLm4S8mv5vSEmwXoh8UKc6', '2023-06-14 23:13:08', '2023-06-14 23:13:08'),
(35, '@Wonka', '$2a$10$0.n2G1VwurxlCNO0u8.loOFW2O7dy0mHS/Y0MVOin2A29JSIp3WRy', '2023-06-15 03:46:34', '2023-06-15 03:46:34');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `auto`
--
ALTER TABLE `auto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `edificio`
--
ALTER TABLE `edificio`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `recurso_nombre` (`recurso_nombre`,`usuario_usuario`),
  ADD KEY `usuario_usuario` (`usuario_usuario`);

--
-- Indices de la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `nombre` (`nombre`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuario` (`usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `auto`
--
ALTER TABLE `auto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `edificio`
--
ALTER TABLE `edificio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `mascota`
--
ALTER TABLE `mascota`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `permisos`
--
ALTER TABLE `permisos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=163;

--
-- AUTO_INCREMENT de la tabla `recursos`
--
ALTER TABLE `recursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=347;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `permisos`
--
ALTER TABLE `permisos`
  ADD CONSTRAINT `permisos_ibfk_1` FOREIGN KEY (`recurso_nombre`) REFERENCES `recursos` (`nombre`),
  ADD CONSTRAINT `permisos_ibfk_2` FOREIGN KEY (`usuario_usuario`) REFERENCES `usuarios` (`usuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
