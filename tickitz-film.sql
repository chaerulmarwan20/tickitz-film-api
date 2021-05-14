-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 14 Bulan Mei 2021 pada 07.58
-- Versi server: 10.4.17-MariaDB
-- Versi PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tickitz-film`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `access_token`
--

CREATE TABLE `access_token` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `accessToken` text NOT NULL,
  `ipAddress` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `access_token`
--

INSERT INTO `access_token` (`id`, `idUser`, `accessToken`, `ipAddress`, `createdAt`, `updatedAt`) VALUES
(21, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MiwiaWF0IjoxNjE2NTgzNzA1LCJleHAiOjE2MTY1ODUxNDV9.p6Mc1RvAYHwpvsC83Vo6BXm5E2zc6HGdLVe7mhc7BA0', '192.168.43.107', '2021-03-24 11:01:45', '2021-03-24 11:01:45'),
(22, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE2NTgzNzMxLCJleHAiOjE2MTY1ODUxNzF9.rH1lFmSNS2FLu1fKM-0V35dOGMQN8HcjAb1J2xYPlH8', '192.168.43.107', '2021-03-24 11:02:11', '2021-03-24 11:02:11'),
(23, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE2NTg0MDAyLCJleHAiOjE2MTY1ODU0NDJ9.zqt-afnuDmmtmd3H3bnvLN5_lrm_COrnEkJQEZTbKjo', '192.168.43.107', '2021-03-24 11:06:42', '2021-03-24 11:06:42'),
(24, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE2NTg3MzQwLCJleHAiOjE2MTY1ODg3ODB9.u_oaUUx0BuLu37QAC0rSasKG3IJsa7JkQwrXzR-dP6c', '192.168.43.107', '2021-03-24 12:02:20', '2021-03-24 12:02:20'),
(25, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE2NTkxMTc2LCJleHAiOjE2MTY1OTI2MTZ9.lIlrrEf3H96CqPZvht8Ns4T139uYjFW1e4wr4WS_Af8', '192.168.43.107', '2021-03-24 13:06:16', '2021-03-24 13:06:16'),
(27, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE2NjQwNDkyLCJleHAiOjE2MTY3MjY4OTJ9.6V6r6JxbbRdbG_eECPbuxpH7DxvcSXJU9nxeeq5n1_c', '192.168.43.107', '2021-03-25 02:48:12', '2021-03-25 02:48:12'),
(33, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE2NjgyMzg1LCJleHAiOjE2MTY3Njg3ODV9.yxN0YE7ZkI4n4kbTzxmmW0Kxk3OqonfkhKTMoCCd900', '192.168.43.107', '2021-03-25 14:26:25', '2021-03-25 14:26:25'),
(51, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE2ODU3MzQwLCJleHAiOjE2MTY5NDM3NDB9.xJvpNNQNNJUjWLnShRdN44WeZxZN1laeGGWfcBRq8JU', '192.168.43.107', '2021-03-27 15:02:20', '2021-03-27 15:02:20'),
(57, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MDE0NjQwLCJleHAiOjE2MTcxMDEwNDB9.OYWIZdFP9yJy3qYV-08YLYzX7sNRUFFKvCzU3nZD5MU', '192.168.43.107', '2021-03-29 10:44:00', '2021-03-29 10:44:00'),
(72, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJmaXJzdE5hbWUiLCJsYXN0TmFtZSI6Imxhc3ROYW1lIiwiZnVsbE5hbWUiOiJmaXJzdE5hbWUgbGFzdE5hbWUiLCJwaG9uZU51bWJlciI6IjAwMDAwMDAwMDAwMCIsInJvbGUiOjIsImlhdCI6MTYxNzAzMjYyNywiZXhwIjoxNjE3MTE5MDI3fQ.vuV8IEPv9iOXaaiY1AqOuFIusuYTQaBvXveng06uCYc', '192.168.43.107', '2021-03-29 15:43:47', '2021-03-29 15:43:47'),
(73, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcwODc1MzAsImV4cCI6MTYxNzE3MzkzMH0.OLc0Jn3KReWUm28mcqac6K4TxwbubreU3t1o8mZ5N3k', '192.168.43.232', '2021-03-30 06:58:50', '2021-03-30 06:58:50'),
(74, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcwOTY2MzUsImV4cCI6MTYxNzE4MzAzNX0.RImIQjAW_eW55MhmNjsQxdvBxdCdklk2a5tUI8VgOd0', '192.168.43.107', '2021-03-30 09:30:35', '2021-03-30 09:30:35'),
(75, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcwOTkwNDgsImV4cCI6MTYxNzE4NTQ0OH0.y7gtWfYxdbCXT0ynZfe7pWKYN9LVNi7bfGajoQltMbg', '192.168.43.107', '2021-03-30 10:10:48', '2021-03-30 10:10:48'),
(76, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcxMDQ4MjQsImV4cCI6MTYxNzE5MTIyNH0.G8nRvNpTb9ZGGkz178eim5NewpKt6nyE6bIxC18Aaww', '192.168.43.107', '2021-03-30 11:47:04', '2021-03-30 11:47:04'),
(77, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcxMTU2NDYsImV4cCI6MTYxNzIwMjA0Nn0.YIelaZa6iWsnHvavA6qeYXfipfWwbyp0OjM5zOttY7Y', '192.168.43.107', '2021-03-30 14:47:26', '2021-03-30 14:47:26'),
(78, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcxMTY4NzEsImV4cCI6MTYxNzIwMzI3MX0.xbZBkoakmc8adlE8lUv32P9-GG0TIdgBZBxc8qKZxV8', '192.168.43.107', '2021-03-30 15:07:51', '2021-03-30 15:07:51'),
(79, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcxMTY5NTUsImV4cCI6MTYxNzIwMzM1NX0.irHAatAehsch2HfaudQ7SC201dClSlV7IAmPVBl0qZE', '192.168.43.107', '2021-03-30 15:09:15', '2021-03-30 15:09:15'),
(80, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcxMTcwNzIsImV4cCI6MTYxNzIwMzQ3Mn0.12AGkknv78jY06-LfME-BYXQrXohAC8Vh9lPxtBo4PY', '192.168.43.107', '2021-03-30 15:11:12', '2021-03-30 15:11:12'),
(81, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MTE3NDgwLCJleHAiOjE2MTcyMDM4ODB9.Q00VfEKxXAN-5YHDAv8uMj1fESwXJ_j9ZFENc_BXPkM', '192.168.43.107', '2021-03-30 15:18:00', '2021-03-30 15:18:00'),
(82, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MTE3NzY3LCJleHAiOjE2MTcyMDQxNjd9.xrMLu-p4YvQCbcT4jaJgp8YaLcVevvPnePxIPVK0jkM', '192.168.43.107', '2021-03-30 15:22:47', '2021-03-30 15:22:47'),
(83, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MTE4MTg5LCJleHAiOjE2MTcyMDQ1ODl9.58L8QIDX5Qip18VPhBBWue79x3i804mWBg1o065JsCk', '192.168.43.107', '2021-03-30 15:29:49', '2021-03-30 15:29:49'),
(84, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcxMTgzMjAsImV4cCI6MTYxNzIwNDcyMH0.o8lVQQ-Oi5ZHMIB3uctCErGZhccVL4J_hAFA9IwegUQ', '192.168.43.107', '2021-03-30 15:32:00', '2021-03-30 15:32:00'),
(85, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MTE4MzM5LCJleHAiOjE2MTcyMDQ3Mzl9.YwByoqCSRcId4f8CwHK7AV-f10fYAvA93f2HUUCKahw', '192.168.43.107', '2021-03-30 15:32:19', '2021-03-30 15:32:19'),
(86, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcxMTg0NjUsImV4cCI6MTYxNzIwNDg2NX0.1Qw6ZBdpfzFBm0YS0cIMcYnezZTg4D-7I-leXaoltUg', '192.168.43.107', '2021-03-30 15:34:25', '2021-03-30 15:34:25'),
(87, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MTgyNjY2LCJleHAiOjE2MTcyNjkwNjZ9.w6pFjWpgAk27Sc8A-EgFHOtOoW1esxbrkwiA2_1DSEE', '192.168.43.107', '2021-03-31 09:24:26', '2021-03-31 09:24:26'),
(88, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcxOTg3MTQsImV4cCI6MTYxNzI4NTExNH0.XPwC0DLhuHSCS-qqXG_xP-GUEK3U2okPTF-e5fdKlbI', '192.168.43.107', '2021-03-31 13:51:54', '2021-03-31 13:51:54'),
(89, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MTk5NTQzLCJleHAiOjE2MTcyODU5NDN9.fs3vLnjPfvfiG4y4JEm0KRYMN8quu9NXkuf6WwRQRV4', '192.168.43.107', '2021-03-31 14:05:43', '2021-03-31 14:05:43'),
(90, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyMDAwODcsImV4cCI6MTYxNzI4NjQ4N30.Umt7-uObK7k1Fm0bg-WNweaXTSVzmoMduQanRyJDDWE', '192.168.43.107', '2021-03-31 14:14:47', '2021-03-31 14:14:47'),
(91, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyMDA0MjIsImV4cCI6MTYxNzI4NjgyMn0.NqZExwu7gs4PpW0Zd5YppByvCRxKcWtxRxqQ5u3nBGo', '192.168.43.107', '2021-03-31 14:20:22', '2021-03-31 14:20:22'),
(92, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MjAwNDU5LCJleHAiOjE2MTcyODY4NTl9.-xHa9h5tkrQ3keZvwQFi9_3RmipnNMvV_cpO3_d-jZo', '192.168.43.107', '2021-03-31 14:20:59', '2021-03-31 14:20:59'),
(93, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyMDA1NTksImV4cCI6MTYxNzI4Njk1OX0.bx5V-Tu33NMXDUASesDgi2FfbLocJSCRI5S1BcLTykE', '192.168.43.107', '2021-03-31 14:22:39', '2021-03-31 14:22:39'),
(94, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyMDA4NzEsImV4cCI6MTYxNzI4NzI3MX0.wm-nzMMH8edWgYxUmTcfaTWB_OBlaFO7B2eJuNs-rZY', '192.168.43.107', '2021-03-31 14:27:51', '2021-03-31 14:27:51'),
(95, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MjAwOTI1LCJleHAiOjE2MTcyODczMjV9.tG-y51OT7hfxwY7STLYhienvLGJkS7aCQxtW_TmVYoc', '192.168.43.107', '2021-03-31 14:28:45', '2021-03-31 14:28:45'),
(96, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyMDIyNDksImV4cCI6MTYxNzI4ODY0OX0.1pI-YVs_QrOFO2zX2rmiyoDF4Y-ELTQqM7-qlk2tXCo', '192.168.43.107', '2021-03-31 14:50:49', '2021-03-31 14:50:49'),
(97, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MjAzOTUxLCJleHAiOjE2MTcyOTAzNTF9.5JWVMZA_7pNw0guoijIjlRZZNf7lOqULmq-2AK1yDJU', '192.168.43.107', '2021-03-31 15:19:11', '2021-03-31 15:19:11'),
(98, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MjY0MTc5LCJleHAiOjE2MTczNTA1Nzl9.18P73ASPqleWky_sMsrWsizkjPGsUZxBRBRtwCaFP4o', '192.168.43.107', '2021-04-01 08:02:59', '2021-04-01 08:02:59'),
(99, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNjQ0NjEsImV4cCI6MTYxNzM1MDg2MX0.bvYrWAQrklp4tfabhdCpuRJ3mNmECbpJg15SZotApNQ', '192.168.43.107', '2021-04-01 08:07:41', '2021-04-01 08:07:41'),
(100, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNjQ2NjIsImV4cCI6MTYxNzM1MTA2Mn0.qhAodjTtjIiGZRsGl3lUU8fSiiT_MGUZ-KqfkmM3IrI', '192.168.43.107', '2021-04-01 08:11:02', '2021-04-01 08:11:02'),
(101, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNjUzNzksImV4cCI6MTYxNzM1MTc3OX0.h4uFtBWKrHaixGYeXgRTc_Icz13j8tD0K-Re8tTLCgc', '192.168.43.107', '2021-04-01 08:22:59', '2021-04-01 08:22:59'),
(102, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNjUzOTgsImV4cCI6MTYxNzM1MTc5OH0.duMVwgFn-c5QBak8AwfIAKT-zKd8navoysFThIJ7pcM', '192.168.43.107', '2021-04-01 08:23:18', '2021-04-01 08:23:18'),
(103, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MjY3ODQzLCJleHAiOjE2MTczNTQyNDN9.eQcIYfArFpxPAifvSeeb2Q-qQFYboYavzXUvR3ql0A0', '192.168.43.107', '2021-04-01 09:04:03', '2021-04-01 09:04:03'),
(104, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNzA2MDAsImV4cCI6MTYxNzM1NzAwMH0.B3RcPS1SuIMygp_f88tB-rpNuDrby-H4fXb4n8z5p48', '192.168.43.107', '2021-04-01 09:50:00', '2021-04-01 09:50:00'),
(105, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNzA2NTUsImV4cCI6MTYxNzM1NzA1NX0.8hh4raeYBBBnbE1-bpRsrO9d2IG7-GC6lPcVAoEPvl0', '192.168.43.107', '2021-04-01 09:50:55', '2021-04-01 09:50:55'),
(106, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNzA4MzAsImV4cCI6MTYxNzM1NzIzMH0.JiDGh9R-VoVdNw25akvD_Bd6mamkHp5ej37iyZYfOx4', '192.168.43.107', '2021-04-01 09:53:50', '2021-04-01 09:53:50'),
(107, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNzA4OTAsImV4cCI6MTYxNzM1NzI5MH0.y2tUYf9nVwQCu1ZDfgJYdTCB9p3ukEgC0b3Gjr6yLA8', '192.168.43.107', '2021-04-01 09:54:50', '2021-04-01 09:54:50'),
(108, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNzA5MTQsImV4cCI6MTYxNzM1NzMxNH0.EZBrjSt8EukRgci3NYNkx6AdKI6_oj4oCgC3at-rrb0', '192.168.43.107', '2021-04-01 09:55:14', '2021-04-01 09:55:14'),
(109, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNzA5NjIsImV4cCI6MTYxNzM1NzM2Mn0.JZh1K7Ot1CZK2-Xzq_M4g_mNfr6efQKwodHXHAN3LQw', '192.168.43.107', '2021-04-01 09:56:02', '2021-04-01 09:56:02'),
(110, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3MjczMzQzLCJleHAiOjE2MTczNTk3NDN9.TfEZRJ9-1-b3q457Fz1L4wTL6SbGdVKAyb07Wbp7dd0', '192.168.43.107', '2021-04-01 10:35:43', '2021-04-01 10:35:43'),
(111, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNzcwMjAsImV4cCI6MTYxNzM2MzQyMH0.ltjetmpFPkxnGtSOg7eMRl0lKnV361CipT8vTqaySSc', '192.168.43.107', '2021-04-01 11:37:00', '2021-04-01 11:37:00'),
(112, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcyNzcwMzYsImV4cCI6MTYxNzM2MzQzNn0.0je2JB7TvpGIp0gwTZ5swbjZwTWOg1pdLKohP2LiLnE', '192.168.43.107', '2021-04-01 11:37:16', '2021-04-01 11:37:16'),
(113, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTczNzA1MjEsImV4cCI6MTYxNzQ1NjkyMX0.Pgp0jhWytP5F25cVcs7bJEnOA3W8xe97rt6iBVJj3Sw', '192.168.43.232', '2021-04-02 13:35:21', '2021-04-02 13:35:21'),
(115, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3NDY4OTQ5LCJleHAiOjE2MTc1NTUzNDl9.qqf6SkI7BUbLvIqGaxI_FbEZJs844d7eD9XRXvB9gxI', '192.168.43.232', '2021-04-03 16:55:49', '2021-04-03 16:55:49'),
(116, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTc1MDk1NjUsImV4cCI6MTYxNzU5NTk2NX0.hGu-wYv1vSDEDe4YrPjBXM0r-HfCQpaCwyaA2ZrJ1us', '192.168.43.107', '2021-04-04 04:12:45', '2021-04-04 04:12:45'),
(117, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTc1NDY1NTIsImV4cCI6MTYxNzYzMjk1Mn0.1OcksiAKzczxwWrGGslO5y-9MGm_KaPIKS6fc2g-Ic8', '192.168.43.107', '2021-04-04 14:29:12', '2021-04-04 14:29:12'),
(118, 157, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU3LCJlbWFpbCI6Im1hcndhbnJ1bEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJmaXJzdE5hbWUiLCJsYXN0TmFtZSI6Imxhc3ROYW1lIiwiZnVsbE5hbWUiOiJmaXJzdE5hbWUgbGFzdE5hbWUiLCJwaG9uZU51bWJlciI6IjAwMDAwMDAwMDAwMCIsInJvbGUiOjIsImlhdCI6MTYxNzU5Mzk4MiwiZXhwIjoxNjE3NjgwMzgyfQ.iF2EFj9PjkaIuedkgX8zunHEJT-mvWcwoUjh7dFSufw', '192.168.43.107', '2021-04-05 03:39:42', '2021-04-05 03:39:42'),
(119, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTc1OTQ0NjIsImV4cCI6MTYxNzY4MDg2Mn0.EuHeb2piGeBwry5jRbLbVtbut6SDKrSdLm7avgOesQ0', '192.168.43.107', '2021-04-05 03:47:42', '2021-04-05 03:47:42'),
(120, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTc1OTUyOTEsImV4cCI6MTYxNzY4MTY5MX0.Zmoxq1B0v96I7SqOR1uGKYU7o6S6Cl4Ws0hR_ewWcPY', '192.168.43.107', '2021-04-05 04:01:31', '2021-04-05 04:01:31'),
(121, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3NjE3MzU2LCJleHAiOjE2MTc3MDM3NTZ9.jTBYPuThEEOa6Maf5qfzL7KdF1M3BHJwLsPNGMq07HU', '192.168.43.107', '2021-04-05 10:09:16', '2021-04-05 10:09:16'),
(122, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTc2MzMxMjgsImV4cCI6MTYxNzcxOTUyOH0.ayiJ1bEtn8mz6HZSfoLjCB66HF2yEUwP_l1T2mVBSLw', '192.168.43.107', '2021-04-05 14:32:08', '2021-04-05 14:32:08'),
(123, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTc2NDExNzIsImV4cCI6MTYxNzcyNzU3Mn0.8IcOORcF2WAx_shfalDyzFSPEX47zyL8VYjOlBwKhwg', '192.168.43.107', '2021-04-05 16:46:12', '2021-04-05 16:46:12'),
(124, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTc2NzI5MzQsImV4cCI6MTYxNzc1OTMzNH0.dnmOBOQieySa4VXP6TnqVJ08LHtRTHRflyEEy3H4jWA', '192.168.43.107', '2021-04-06 01:35:34', '2021-04-06 01:35:34'),
(125, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTc5NTkzODgsImV4cCI6MTYxODA0NTc4OH0.ffQvKreewrrD1NjRjB55va2KxEbMciYiqLcTqcdMn28', '192.168.43.107', '2021-04-09 09:09:48', '2021-04-09 09:09:48'),
(126, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTc5NTk0OTMsImV4cCI6MTYxODA0NTg5M30._k2aW67pYym9Y53VfsgVP-_YVCfzudXlDMI-4PWR2SM', '192.168.43.107', '2021-04-09 09:11:33', '2021-04-09 09:11:33'),
(127, 114, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTE0LCJlbWFpbCI6Im5pZWxydWxAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiTmllbCIsImxhc3ROYW1lIjoiUnVsIiwiZnVsbE5hbWUiOiJOaWVsIFJ1bCIsInBob25lTnVtYmVyIjoiMDg3ODI3ODY1NDI3Iiwicm9sZSI6MSwiaWF0IjoxNjE3OTYzODcwLCJleHAiOjE2MTgwNTAyNzB9.35PNQWA0jhfn5gJaseOf5-hnVKVucT2LoamN_eHyp58', '192.168.43.107', '2021-04-09 10:24:30', '2021-04-09 10:24:30'),
(128, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTgyMzI1NTEsImV4cCI6MTYxODMxODk1MX0.YKuKilbSx_0Z2ijaEbueIrdZuGrKF1lM7B5ZmM87Njs', '192.168.43.107', '2021-04-12 13:02:31', '2021-04-12 13:02:31'),
(129, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTk0MzE2MjIsImV4cCI6MTYxOTUxODAyMn0.Oem1NSINZSpTnPyVPkX02g1GEiXNHXAuvV6Ll7f1Qj4', '192.168.43.107', '2021-04-26 10:07:02', '2021-04-26 10:07:02'),
(130, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTk0MzI1MjQsImV4cCI6MTYxOTUxODkyNH0.LZ2IWribRZiyKnIBQy1X-neZ0X0CuyZbBH9_EmkbpZE', '192.168.43.107', '2021-04-26 10:22:04', '2021-04-26 10:22:04'),
(131, 154, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTk5OTQ1OTMsImV4cCI6MTYyMDA4MDk5M30.1ARN-nwki8prQdu93H8h03U6ChOcaTPuGTgIQ1AKG_0', '192.168.43.107', '2021-05-02 22:29:53', '2021-05-02 22:29:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cinemas`
--

CREATE TABLE `cinemas` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `idCity` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cinemas`
--

INSERT INTO `cinemas` (`id`, `name`, `image`, `address`, `idCity`, `createdAt`, `updatedAt`) VALUES
(1, 'Hiflix', 'images\\hiflix 2.png', 'Downcare street No. 21, East Bandung', 2, '2021-03-08 13:09:42', '2021-03-27 15:19:57'),
(2, 'Ebv', 'images\\ebv.id 2.png', 'Colonel street No. 2, East Jakarta', 1, '2021-03-08 13:09:42', '2021-03-27 15:20:10'),
(3, 'CineOne', 'images\\CineOne21 2.png', 'Whatever street No. 12, South Surabaya', 3, '2021-03-08 13:09:42', '2021-03-27 15:20:16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `cities`
--

INSERT INTO `cities` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Jakarta', '2021-03-08 13:01:11', '2021-03-08 13:01:11'),
(2, 'Bandung', '2021-03-08 13:01:11', '2021-03-08 13:01:11'),
(3, 'Surabaya', '2021-03-08 13:01:11', '2021-03-08 13:01:11');

-- --------------------------------------------------------

--
-- Struktur dari tabel `detail_transactions`
--

CREATE TABLE `detail_transactions` (
  `id` int(11) NOT NULL,
  `idTransactions` int(11) NOT NULL,
  `idTicket` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `detail_transactions`
--

INSERT INTO `detail_transactions` (`id`, `idTransactions`, `idTicket`) VALUES
(28, 45, 17),
(29, 45, 19),
(30, 45, 20),
(31, 46, 68),
(32, 47, 101),
(33, 47, 105),
(34, 48, 51);

-- --------------------------------------------------------

--
-- Struktur dari tabel `movies`
--

CREATE TABLE `movies` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `duration` varchar(255) DEFAULT NULL,
  `director` varchar(255) DEFAULT NULL,
  `cast` text DEFAULT NULL,
  `synopsis` text DEFAULT NULL,
  `category` varchar(50) NOT NULL,
  `realesed` tinyint(1) DEFAULT NULL,
  `dateRealesed` date DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `movies`
--

INSERT INTO `movies` (`id`, `title`, `image`, `genre`, `duration`, `director`, `cast`, `synopsis`, `category`, `realesed`, `dateRealesed`, `createdAt`, `updatedAt`) VALUES
(1, 'The Old Guard', 'images\\the-old-guard.jpg', 'Action, Adventure, Fantasy', '2 hours 5 minutes', 'Gina Prince-Bythewood', 'Charlize Theron, KiKi Layne, Matthias Schoenaerts', 'Led by a warrior named Andy (Charlize Theron), a covert group of tight-knit mercenaries with a mysterious inability to die have fought to protect the mortal world for centuries. But when the team is recruited to take on an emergency mission and their extraordinary abilities are suddenly exposed, it\'s up to Andy and Nile (Kiki Layne), the newest soldier to join their ranks, to help the group eliminate the threat of those who seek to replicate and monetize their power by any means necessary.', 'PG-13', 1, '2021-03-31', '2021-03-08 13:42:45', '2021-04-04 09:36:05'),
(2, 'Bad Boys for Life', 'images\\bad-boys-for-life.jpg', 'Action, Comedy, Crime', '2 hours 4 minutes', 'Adil El Arbi, Bilall Fallah', 'Will Smith, Martin Lawrence, Vanessa Hudgens', 'Marcus and Mike have to confront new issues (career changes and midlife crises), as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.', 'PG-13', 1, '2021-03-31', '2021-03-08 13:42:45', '2021-04-04 09:36:11'),
(3, 'Extraction', 'images\\extraction.jpg', 'Action, Thriller', '1 hours 56 minutes', 'Sam Hargrave', 'Chris Hemsworth, Bryon Lerum, Ryder Lerum', 'In an underworld of weapons dealers and traffickers, a young boy becomes the pawn in a war between notorious drug lords. Trapped by kidnappers inside one of the world\'s most impenetrable cities, his rescue beckons the unparalleled skill of a mercenary named Tyler Rake, but Rake is a broken man with nothing to lose, harboring a death wish that makes an already deadly mission near impossible.', 'PG-13', 1, '2021-03-31', '2021-03-08 13:42:45', '2021-04-04 09:36:17'),
(4, 'The Batman', 'images\\the-batman.jpg', 'Action, Crime, Drama', 'Duration is unknown', 'Matt Reeves', 'Robert Pattinson, Colin Farrell, Zoe Kravitz', 'The plot is unknown.', 'PG-13', 0, '2021-01-08', '2021-03-08 13:42:45', '2021-04-04 09:37:09'),
(5, 'Joker', 'images\\joker.jpg', 'Crime, Drama, Thriller', '2 hours 2 minutes', 'Todd Phillips', 'Joaquin Phoenix, Robert De Niro, Zazie Beetz', 'Arthur Fleck works as a clown and is an aspiring stand-up comic. He has mental health issues, part of which involves uncontrollable laughter. Times are tough and, due to his issues and occupation, Arthur has an even worse time than most. Over time these issues bear down on him, shaping his actions, making him ultimately take on the persona he is more known as...Joker.', 'PG-13', 1, '2021-03-31', '2021-03-08 13:42:45', '2021-04-04 09:37:09'),
(6, 'Mission: Impossible 7', 'images\\mission-impossible-7.jpg', 'Action, Adventure, Thriller', 'Duration is unknown', 'Christopher McQuarrie', 'Vanessa Kirby, Tom Cruise, Pom Klementieff', 'The plot is unknown', 'PG-13', 0, '2021-01-13', '2021-03-08 13:42:45', '2021-04-04 09:37:09'),
(7, 'Knives Out', 'images\\knives-out.jpg', 'Comedy, Crime, Drama', '2 hours 10 minutes', 'Rian Johnson', 'Daniel Craig, Chris Evans, Ana de Armas', 'When renowned crime novelist Harlan Thrombey (Christopher Plummer) is found dead at his estate just after his 85th birthday, the inquisitive and debonair Detective Benoit Blanc (Daniel Craig) is mysteriously enlisted to investigate. From Harlan\'s disfunctional family to his devoted staff, Blanc sifts through a web of red herrings and self-serving lies to uncover the truth behind Harlan\'s untimely death.', 'PG-13', 1, '2021-03-31', '2021-03-08 13:42:45', '2021-04-04 09:37:09'),
(8, 'Ford v Ferrari', 'images\\ford-v-ferrari.jpg', 'Action, Biography, Drama', '2 hours 3 minutes', 'James Mangold', 'Matt Damon, Christian Bale, Jon Bernthal', 'American car designer Carroll Shelby and driver Ken Miles battle corporate interference and the laws of physics to build a revolutionary race car for Ford in order to defeat Ferrari at the 24 Hours of Le Mans in 1966.', 'PG-13', 1, '2021-03-31', '2021-03-08 13:42:45', '2021-04-04 09:37:09'),
(9, '1917', 'images\\1917.jpg', 'Drama, Thriller, War', '1 hours 59 minutes', 'Sam Mendes', 'Dean-Charles Chapman, George MacKay, Daniel Mays', 'April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.', 'PG-13', 1, '2021-03-31', '2021-03-08 13:42:45', '2021-04-04 09:37:09'),
(10, 'Godzilla vs. Kong', 'images\\godzilla-vs-kong.jpg', 'Action, Sci-Fi, Thriller', '1 hours 53 minutes', 'Adam Wingard', 'Alexander Skarsgård, Millie Bobby Brown, Rebecca Hall', 'The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong - with humanity caught in the balance.', 'PG-13', 0, '2021-01-20', '2021-03-08 13:42:45', '2021-04-04 09:37:09'),
(13, 'A Quiet Place 2', 'images\\a-quiet-place-2.jpg', 'Drama, Horror, Sci-Fi ', '1 hours 37 minutes', 'John Krasinski', 'Emily Blunt, Millicent Simmonds, Cillian Murphy', 'Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.', 'PG-13', 0, '2021-01-20', '2021-03-17 08:56:28', '2021-04-04 09:37:43'),
(14, 'Black Widow', 'images\\black-widow.jpg', 'Action, Adventure, Sci-Fi ', '2 hours 13 minutes', 'Cate Shortland', 'Scarlett Johansson, Florence Pugh, David Harbour', 'A film about Natasha Romanoff in her quests between the films Civil War and Infinity War.', 'PG-13', 0, '2021-01-14', '2021-03-17 09:00:20', '2021-04-04 09:37:43'),
(15, 'Mortal Kombat', 'images\\mortal-kombat.jpg', 'Action, Adventure, Fantasy', 'Duration is unknown', 'Simon McQuoid', 'Lewis Tan, Jessica McNamee, Josh Lawson', 'MMA fighter Cole Young seeks out Earth\'s greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.', 'PG-13', 0, '2021-02-13', '2021-03-17 09:06:24', '2021-04-04 09:37:43'),
(28, 'The Conjuring', 'images\\the-conjuring.jpg', 'Horror, Mystery, Thriller', 'Duration is unknown', 'Michael Chaves', 'Vera Farmiga, Patrick Wilson, Julian Hilliard', 'A chilling story of terror, murder and unknown evil that shocked even experienced real-life paranormal investigators Ed and Lorraine Warren. One of the most sensational cases from their files, it starts with a fight for the soul of a young boy, then takes them beyond anything they\'d ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.', 'PG-13', 0, '2021-02-10', '2021-04-01 12:07:17', '2021-04-04 09:37:43'),
(29, 'The Suicide Squad', 'images\\suicide-squad.jpg', 'Action, Adventure, Fantasy', 'Duration is unknown', 'James Gunn', 'Margot Robbie, Idris Elba, John Cena', 'Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.', 'PG-13', 0, '2021-02-24', '2021-04-01 12:11:01', '2021-04-04 09:37:43'),
(30, 'Venom', 'images\\venom.jpg', 'Action, Horror, Sci-Fi', 'Duration is unknown', 'Andy Serkis', 'Tom Hardy, Michelle Williams, Woody Harrelson', 'Synopsis is unknown.', 'PG-13', 0, '2021-02-10', '2021-04-01 12:16:42', '2021-04-04 09:37:43'),
(31, 'No Time to Die', 'images\\no-time-to-die.jpg', 'Action, Adventure, Thriller', '2 hours 43 minutes', 'Cary Joji Fukunaga', 'Daniel Craig, Ana de Armas, Rami Malek', 'Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.', 'PG-13', 0, '2021-02-18', '2021-04-01 12:16:42', '2021-04-04 09:37:43');

-- --------------------------------------------------------

--
-- Struktur dari tabel `payments`
--

CREATE TABLE `payments` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `payments`
--

INSERT INTO `payments` (`id`, `name`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'Google Pay', '', '2021-03-20 15:50:45', '2021-03-20 15:50:45'),
(2, 'VISA', '', '2021-03-20 15:50:45', '2021-03-20 15:50:45'),
(3, 'Gopay', '', '2021-03-20 15:50:45', '2021-03-20 15:50:45'),
(4, 'Paypal', '', '2021-03-20 15:50:45', '2021-03-20 15:50:45'),
(5, 'Dana', '', '2021-03-20 15:50:45', '2021-03-20 15:50:45'),
(6, 'BCA', '', '2021-03-20 15:50:45', '2021-03-20 15:50:45'),
(7, 'BRI', '', '2021-03-20 15:50:45', '2021-03-20 15:50:45'),
(8, 'Ovo', '', '2021-03-20 15:50:45', '2021-03-20 15:50:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `schedule`
--

CREATE TABLE `schedule` (
  `id` int(11) NOT NULL,
  `day` varchar(50) NOT NULL,
  `date` date NOT NULL,
  `time1` varchar(100) NOT NULL,
  `time2` varchar(100) NOT NULL,
  `time3` varchar(100) NOT NULL,
  `time4` varchar(100) NOT NULL,
  `time5` varchar(100) NOT NULL,
  `time6` varchar(100) NOT NULL,
  `time7` varchar(100) NOT NULL,
  `idCity` int(11) DEFAULT NULL,
  `idMovie` int(11) DEFAULT NULL,
  `idCinema` int(11) DEFAULT NULL,
  `idTicket` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `schedule`
--

INSERT INTO `schedule` (`id`, `day`, `date`, `time1`, `time2`, `time3`, `time4`, `time5`, `time6`, `time7`, `idCity`, `idMovie`, `idCinema`, `idTicket`) VALUES
(1, 'Friday', '2021-04-02', '08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm', 1, 1, 1, 17),
(20, 'Friday', '2021-04-02', '08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm', 1, 3, 2, 652),
(21, 'Friday', '2021-04-02', '08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm', 1, 2, 3, 750),
(22, 'Friday', '2021-04-02', '08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm', 1, 5, 3, 848),
(23, 'Friday', '2021-04-02', '08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm', 1, 7, 2, 946),
(24, 'Friday', '2021-04-02', '08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm', 1, 8, 3, 1044),
(25, 'Friday', '2021-04-02', '08:30am', '10:30pm', '12:00pm', '02:00pm', '04:30pm', '07:00pm', '08:30pm', 1, 9, 1, 1142);

-- --------------------------------------------------------

--
-- Struktur dari tabel `schedule_time`
--

CREATE TABLE `schedule_time` (
  `id` int(11) NOT NULL,
  `idSchedule` int(11) NOT NULL,
  `idTime` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `schedule_time`
--

INSERT INTO `schedule_time` (`id`, `idSchedule`, `idTime`) VALUES
(1, 1, 10),
(2, 1, 12),
(7, 1, 20),
(8, 1, 22);

-- --------------------------------------------------------

--
-- Struktur dari tabel `seat`
--

CREATE TABLE `seat` (
  `id` int(11) NOT NULL,
  `row` char(1) NOT NULL,
  `seat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `seat`
--

INSERT INTO `seat` (`id`, `row`, `seat`) VALUES
(1, 'A', 1),
(2, 'A', 2),
(3, 'A', 3),
(4, 'A', 4),
(5, 'A', 5),
(6, 'A', 6),
(7, 'A', 7),
(8, 'A', 8),
(9, 'A', 9),
(10, 'A', 10),
(11, 'A', 11),
(12, 'A', 12),
(13, 'A', 13),
(14, 'A', 14),
(15, 'B', 1),
(16, 'B', 2),
(17, 'B', 3),
(18, 'B', 4),
(19, 'B', 5),
(20, 'B', 6),
(21, 'B', 7),
(22, 'B', 8),
(23, 'B', 9),
(24, 'B', 10),
(25, 'B', 11),
(26, 'B', 12),
(27, 'B', 13),
(28, 'B', 14),
(29, 'C', 1),
(30, 'C', 2),
(31, 'C', 3),
(32, 'C', 4),
(33, 'C', 5),
(34, 'C', 6),
(35, 'C', 7),
(36, 'C', 8),
(37, 'C', 9),
(38, 'C', 10),
(39, 'C', 11),
(40, 'C', 12),
(41, 'C', 13),
(42, 'C', 14),
(43, 'D', 1),
(44, 'D', 2),
(45, 'D', 3),
(46, 'D', 4),
(47, 'D', 5),
(48, 'D', 6),
(49, 'D', 7),
(50, 'D', 8),
(51, 'D', 9),
(52, 'D', 10),
(53, 'D', 11),
(54, 'D', 12),
(55, 'D', 13),
(56, 'D', 14),
(57, 'E', 1),
(58, 'E', 2),
(59, 'E', 3),
(60, 'E', 4),
(61, 'E', 5),
(62, 'E', 6),
(63, 'E', 7),
(64, 'E', 8),
(65, 'E', 9),
(66, 'E', 10),
(67, 'E', 11),
(68, 'E', 12),
(69, 'E', 13),
(70, 'E', 14),
(71, 'F', 1),
(72, 'F', 2),
(73, 'F', 3),
(74, 'F', 4),
(75, 'F', 5),
(76, 'F', 6),
(77, 'F', 7),
(78, 'F', 8),
(79, 'F', 9),
(80, 'F', 10),
(81, 'F', 11),
(82, 'F', 12),
(83, 'F', 13),
(84, 'F', 14),
(85, 'G', 1),
(86, 'G', 2),
(87, 'G', 3),
(88, 'G', 4),
(89, 'G', 5),
(90, 'G', 6),
(91, 'G', 7),
(92, 'G', 8),
(93, 'G', 9),
(94, 'G', 10),
(95, 'G', 11),
(96, 'G', 12),
(97, 'G', 13),
(98, 'G', 14);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tickets`
--

CREATE TABLE `tickets` (
  `id` int(11) NOT NULL,
  `movieTitle` varchar(255) DEFAULT NULL,
  `category` varchar(50) NOT NULL,
  `price` int(11) DEFAULT NULL,
  `available` tinyint(1) DEFAULT NULL,
  `idSchedule` int(11) DEFAULT NULL,
  `time` varchar(100) NOT NULL,
  `idSeat` int(11) DEFAULT NULL,
  `idMovie` int(11) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tickets`
--

INSERT INTO `tickets` (`id`, `movieTitle`, `category`, `price`, `available`, `idSchedule`, `time`, `idSeat`, `idMovie`, `createdAt`, `updatedAt`) VALUES
(17, 'The Old Guard', 'PG-13', 10, 0, 1, '08:30am', 1, 1, '2021-04-05 14:29:12', '2021-04-05 16:58:00'),
(18, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 2, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(19, 'The Old Guard', 'PG-13', 10, 0, 1, '08:30am', 3, 1, '2021-04-05 14:29:12', '2021-04-05 16:58:00'),
(20, 'The Old Guard', 'PG-13', 10, 0, 1, '08:30am', 4, 1, '2021-04-05 14:29:12', '2021-04-05 16:58:00'),
(21, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 5, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(22, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 6, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(23, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 7, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(24, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 8, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(25, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 9, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(26, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 10, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(27, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 11, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(28, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 12, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(29, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 13, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(30, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 14, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(31, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 15, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(32, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 16, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(33, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 17, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(34, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 18, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(35, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 19, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(36, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 20, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(37, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 21, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(38, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 22, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(39, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 23, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(40, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 24, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(41, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 25, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(42, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 26, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(43, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 27, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(44, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 28, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(45, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 29, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(46, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 30, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(47, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 31, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(48, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 32, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(49, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 33, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(50, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 34, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(51, 'The Old Guard', 'PG-13', 10, 0, 1, '08:30am', 35, 1, '2021-04-05 14:29:12', '2021-05-02 22:55:28'),
(52, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 36, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(53, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 37, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(54, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 38, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(55, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 39, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(56, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 40, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(57, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 41, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(58, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 42, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(59, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 43, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(60, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 44, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(61, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 45, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(62, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 46, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(63, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 47, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(64, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 48, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(65, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 49, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(66, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 50, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(67, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 51, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(68, 'The Old Guard', 'PG-13', 10, 0, 1, '08:30am', 52, 1, '2021-04-05 14:29:12', '2021-04-06 02:45:59'),
(69, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 53, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(70, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 54, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(71, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 55, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(72, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 56, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(73, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 57, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(74, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 58, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(75, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 59, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(76, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 60, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(77, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 61, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(78, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 62, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(79, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 63, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(80, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 64, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(81, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 65, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(82, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 66, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(83, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 67, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(84, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 68, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(85, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 69, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(86, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 70, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(87, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 71, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(88, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 72, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(89, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 73, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(90, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 74, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(91, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 75, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(92, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 76, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(93, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 77, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(94, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 78, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(95, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 79, 1, '2021-04-05 14:29:12', '2021-04-05 14:29:12'),
(96, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 80, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(97, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 81, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(98, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 82, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(99, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 83, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(100, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 84, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(101, 'The Old Guard', 'PG-13', 10, 0, 1, '08:30am', 85, 1, '2021-04-05 14:29:13', '2021-04-12 13:05:56'),
(102, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 86, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(103, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 87, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(104, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 88, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(105, 'The Old Guard', 'PG-13', 10, 0, 1, '08:30am', 89, 1, '2021-04-05 14:29:13', '2021-04-12 13:05:56'),
(106, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 90, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(107, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 91, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(108, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 92, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(109, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 93, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(110, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 94, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(111, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 95, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(112, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 96, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(113, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 97, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(114, 'The Old Guard', 'PG-13', 10, 1, 1, '08:30am', 98, 1, '2021-04-05 14:29:13', '2021-04-05 14:29:13'),
(652, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 1, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(653, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 2, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(654, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 3, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(655, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 4, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(656, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 5, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(657, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 6, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(658, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 7, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(659, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 8, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(660, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 9, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(661, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 10, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(662, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 11, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(663, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 12, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(664, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 13, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(665, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 14, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(666, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 15, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(667, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 16, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(668, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 17, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(669, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 18, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(670, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 19, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(671, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 20, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(672, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 21, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(673, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 22, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(674, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 23, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(675, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 24, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(676, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 25, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(677, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 26, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(678, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 27, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(679, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 28, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(680, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 29, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(681, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 30, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(682, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 31, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(683, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 32, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(684, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 33, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(685, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 34, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(686, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 35, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(687, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 36, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(688, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 37, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(689, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 38, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(690, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 39, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(691, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 40, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(692, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 41, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(693, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 42, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(694, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 43, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(695, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 44, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(696, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 45, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(697, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 46, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(698, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 47, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(699, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 48, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(700, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 49, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(701, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 50, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(702, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 51, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(703, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 52, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(704, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 53, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(705, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 54, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(706, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 55, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(707, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 56, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(708, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 57, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(709, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 58, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(710, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 59, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(711, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 60, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(712, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 61, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(713, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 62, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(714, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 63, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(715, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 64, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(716, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 65, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(717, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 66, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(718, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 67, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(719, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 68, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(720, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 69, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(721, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 70, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(722, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 71, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(723, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 72, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(724, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 73, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(725, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 74, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(726, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 75, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(727, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 76, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(728, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 77, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(729, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 78, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(730, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 79, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(731, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 80, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(732, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 81, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(733, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 82, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(734, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 83, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(735, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 84, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(736, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 85, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(737, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 86, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(738, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 87, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(739, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 88, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(740, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 89, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(741, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 90, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(742, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 91, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(743, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 92, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(744, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 93, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(745, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 94, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(746, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 95, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(747, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 96, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(748, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 97, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(749, 'Extraction', 'PG-13', 10, 1, 20, '12:00pm', 98, 3, '2021-04-09 10:42:22', '2021-04-09 10:42:22'),
(750, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 1, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(751, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 2, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(752, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 3, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(753, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 4, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(754, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 5, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(755, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 6, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(756, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 7, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(757, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 8, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(758, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 9, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(759, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 10, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(760, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 11, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(761, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 12, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(762, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 13, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(763, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 14, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(764, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 15, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(765, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 16, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(766, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 17, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(767, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 18, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(768, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 19, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(769, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 20, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(770, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 21, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(771, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 22, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(772, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 23, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(773, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 24, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(774, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 25, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(775, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 26, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(776, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 27, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(777, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 28, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(778, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 29, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(779, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 30, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(780, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 31, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(781, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 32, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(782, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 33, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(783, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 34, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(784, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 35, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(785, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 36, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(786, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 37, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(787, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 38, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(788, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 39, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(789, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 40, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(790, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 41, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(791, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 42, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(792, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 43, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(793, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 44, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(794, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 45, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(795, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 46, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(796, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 47, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(797, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 48, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(798, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 49, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(799, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 50, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(800, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 51, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(801, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 52, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(802, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 53, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(803, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 54, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(804, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 55, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(805, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 56, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(806, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 57, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(807, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 58, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(808, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 59, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(809, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 60, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(810, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 61, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(811, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 62, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(812, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 63, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(813, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 64, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(814, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 65, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(815, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 66, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(816, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 67, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(817, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 68, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(818, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 69, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(819, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 70, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(820, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 71, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(821, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 72, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(822, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 73, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(823, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 74, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(824, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 75, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(825, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 76, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(826, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 77, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(827, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 78, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(828, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 79, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(829, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 80, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(830, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 81, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(831, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 82, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(832, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 83, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(833, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 84, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(834, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 85, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(835, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 86, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(836, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 87, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(837, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 88, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(838, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 89, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(839, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 90, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(840, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 91, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(841, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 92, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(842, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 93, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(843, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 94, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(844, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 95, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(845, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 96, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(846, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 97, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(847, 'Bad Boys For Life', 'PG-13', 10, 1, 21, '10:30pm', 98, 2, '2021-04-09 10:53:08', '2021-04-09 10:53:08'),
(848, 'Joker', 'R', 10, 1, 22, '07:00pm', 1, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(849, 'Joker', 'R', 10, 1, 22, '07:00pm', 2, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(850, 'Joker', 'R', 10, 1, 22, '07:00pm', 3, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(851, 'Joker', 'R', 10, 1, 22, '07:00pm', 4, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(852, 'Joker', 'R', 10, 1, 22, '07:00pm', 5, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(853, 'Joker', 'R', 10, 1, 22, '07:00pm', 6, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(854, 'Joker', 'R', 10, 1, 22, '07:00pm', 7, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(855, 'Joker', 'R', 10, 1, 22, '07:00pm', 8, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(856, 'Joker', 'R', 10, 1, 22, '07:00pm', 9, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(857, 'Joker', 'R', 10, 1, 22, '07:00pm', 10, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(858, 'Joker', 'R', 10, 1, 22, '07:00pm', 11, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(859, 'Joker', 'R', 10, 1, 22, '07:00pm', 12, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(860, 'Joker', 'R', 10, 1, 22, '07:00pm', 13, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(861, 'Joker', 'R', 10, 1, 22, '07:00pm', 14, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(862, 'Joker', 'R', 10, 1, 22, '07:00pm', 15, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(863, 'Joker', 'R', 10, 1, 22, '07:00pm', 16, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(864, 'Joker', 'R', 10, 1, 22, '07:00pm', 17, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(865, 'Joker', 'R', 10, 1, 22, '07:00pm', 18, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(866, 'Joker', 'R', 10, 1, 22, '07:00pm', 19, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(867, 'Joker', 'R', 10, 1, 22, '07:00pm', 20, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(868, 'Joker', 'R', 10, 1, 22, '07:00pm', 21, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(869, 'Joker', 'R', 10, 1, 22, '07:00pm', 22, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(870, 'Joker', 'R', 10, 1, 22, '07:00pm', 23, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(871, 'Joker', 'R', 10, 1, 22, '07:00pm', 24, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(872, 'Joker', 'R', 10, 1, 22, '07:00pm', 25, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(873, 'Joker', 'R', 10, 1, 22, '07:00pm', 26, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(874, 'Joker', 'R', 10, 1, 22, '07:00pm', 27, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(875, 'Joker', 'R', 10, 1, 22, '07:00pm', 28, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(876, 'Joker', 'R', 10, 1, 22, '07:00pm', 29, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(877, 'Joker', 'R', 10, 1, 22, '07:00pm', 30, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(878, 'Joker', 'R', 10, 1, 22, '07:00pm', 31, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(879, 'Joker', 'R', 10, 1, 22, '07:00pm', 32, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(880, 'Joker', 'R', 10, 1, 22, '07:00pm', 33, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(881, 'Joker', 'R', 10, 1, 22, '07:00pm', 34, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(882, 'Joker', 'R', 10, 1, 22, '07:00pm', 35, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(883, 'Joker', 'R', 10, 1, 22, '07:00pm', 36, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(884, 'Joker', 'R', 10, 1, 22, '07:00pm', 37, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(885, 'Joker', 'R', 10, 1, 22, '07:00pm', 38, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(886, 'Joker', 'R', 10, 1, 22, '07:00pm', 39, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(887, 'Joker', 'R', 10, 1, 22, '07:00pm', 40, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(888, 'Joker', 'R', 10, 1, 22, '07:00pm', 41, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(889, 'Joker', 'R', 10, 1, 22, '07:00pm', 42, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(890, 'Joker', 'R', 10, 1, 22, '07:00pm', 43, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(891, 'Joker', 'R', 10, 1, 22, '07:00pm', 44, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(892, 'Joker', 'R', 10, 1, 22, '07:00pm', 45, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(893, 'Joker', 'R', 10, 1, 22, '07:00pm', 46, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(894, 'Joker', 'R', 10, 1, 22, '07:00pm', 47, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(895, 'Joker', 'R', 10, 1, 22, '07:00pm', 48, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(896, 'Joker', 'R', 10, 1, 22, '07:00pm', 49, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(897, 'Joker', 'R', 10, 1, 22, '07:00pm', 50, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(898, 'Joker', 'R', 10, 1, 22, '07:00pm', 51, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(899, 'Joker', 'R', 10, 1, 22, '07:00pm', 52, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(900, 'Joker', 'R', 10, 1, 22, '07:00pm', 53, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(901, 'Joker', 'R', 10, 1, 22, '07:00pm', 54, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(902, 'Joker', 'R', 10, 1, 22, '07:00pm', 55, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(903, 'Joker', 'R', 10, 1, 22, '07:00pm', 56, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(904, 'Joker', 'R', 10, 1, 22, '07:00pm', 57, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(905, 'Joker', 'R', 10, 1, 22, '07:00pm', 58, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(906, 'Joker', 'R', 10, 1, 22, '07:00pm', 59, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(907, 'Joker', 'R', 10, 1, 22, '07:00pm', 60, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(908, 'Joker', 'R', 10, 1, 22, '07:00pm', 61, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(909, 'Joker', 'R', 10, 1, 22, '07:00pm', 62, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(910, 'Joker', 'R', 10, 1, 22, '07:00pm', 63, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(911, 'Joker', 'R', 10, 1, 22, '07:00pm', 64, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(912, 'Joker', 'R', 10, 1, 22, '07:00pm', 65, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(913, 'Joker', 'R', 10, 1, 22, '07:00pm', 66, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(914, 'Joker', 'R', 10, 1, 22, '07:00pm', 67, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(915, 'Joker', 'R', 10, 1, 22, '07:00pm', 68, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(916, 'Joker', 'R', 10, 1, 22, '07:00pm', 69, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(917, 'Joker', 'R', 10, 1, 22, '07:00pm', 70, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(918, 'Joker', 'R', 10, 1, 22, '07:00pm', 71, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(919, 'Joker', 'R', 10, 1, 22, '07:00pm', 72, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(920, 'Joker', 'R', 10, 1, 22, '07:00pm', 73, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(921, 'Joker', 'R', 10, 1, 22, '07:00pm', 74, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(922, 'Joker', 'R', 10, 1, 22, '07:00pm', 75, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(923, 'Joker', 'R', 10, 1, 22, '07:00pm', 76, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(924, 'Joker', 'R', 10, 1, 22, '07:00pm', 77, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(925, 'Joker', 'R', 10, 1, 22, '07:00pm', 78, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(926, 'Joker', 'R', 10, 1, 22, '07:00pm', 79, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(927, 'Joker', 'R', 10, 1, 22, '07:00pm', 80, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(928, 'Joker', 'R', 10, 1, 22, '07:00pm', 81, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(929, 'Joker', 'R', 10, 1, 22, '07:00pm', 82, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(930, 'Joker', 'R', 10, 1, 22, '07:00pm', 83, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(931, 'Joker', 'R', 10, 1, 22, '07:00pm', 84, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(932, 'Joker', 'R', 10, 1, 22, '07:00pm', 85, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(933, 'Joker', 'R', 10, 1, 22, '07:00pm', 86, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(934, 'Joker', 'R', 10, 1, 22, '07:00pm', 87, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(935, 'Joker', 'R', 10, 1, 22, '07:00pm', 88, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(936, 'Joker', 'R', 10, 1, 22, '07:00pm', 89, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(937, 'Joker', 'R', 10, 1, 22, '07:00pm', 90, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(938, 'Joker', 'R', 10, 1, 22, '07:00pm', 91, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(939, 'Joker', 'R', 10, 1, 22, '07:00pm', 92, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(940, 'Joker', 'R', 10, 1, 22, '07:00pm', 93, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(941, 'Joker', 'R', 10, 1, 22, '07:00pm', 94, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(942, 'Joker', 'R', 10, 1, 22, '07:00pm', 95, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(943, 'Joker', 'R', 10, 1, 22, '07:00pm', 96, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(944, 'Joker', 'R', 10, 1, 22, '07:00pm', 97, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(945, 'Joker', 'R', 10, 1, 22, '07:00pm', 98, 5, '2021-04-09 10:56:02', '2021-04-09 10:56:02'),
(946, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 1, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(947, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 2, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(948, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 3, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(949, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 4, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(950, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 5, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(951, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 6, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(952, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 7, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(953, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 8, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(954, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 9, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(955, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 10, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(956, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 11, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(957, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 12, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(958, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 13, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(959, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 14, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(960, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 15, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(961, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 16, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(962, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 17, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(963, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 18, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(964, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 19, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(965, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 20, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(966, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 21, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(967, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 22, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(968, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 23, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(969, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 24, 7, '2021-04-09 10:59:37', '2021-04-09 10:59:37'),
(970, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 25, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(971, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 26, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(972, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 27, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(973, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 28, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(974, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 29, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(975, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 30, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(976, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 31, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(977, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 32, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(978, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 33, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(979, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 34, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(980, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 35, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(981, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 36, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(982, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 37, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(983, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 38, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(984, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 39, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(985, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 40, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(986, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 41, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(987, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 42, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(988, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 43, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(989, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 44, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(990, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 45, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(991, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 46, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(992, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 47, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(993, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 48, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(994, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 49, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(995, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 50, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(996, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 51, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(997, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 52, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(998, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 53, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(999, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 54, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1000, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 55, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1001, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 56, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1002, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 57, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1003, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 58, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1004, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 59, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1005, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 60, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1006, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 61, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1007, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 62, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1008, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 63, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1009, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 64, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1010, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 65, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1011, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 66, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1012, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 67, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1013, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 68, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1014, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 69, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1015, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 70, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1016, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 71, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1017, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 72, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1018, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 73, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1019, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 74, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1020, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 75, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1021, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 76, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1022, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 77, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1023, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 78, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1024, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 79, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1025, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 80, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1026, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 81, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1027, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 82, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1028, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 83, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1029, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 84, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1030, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 85, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1031, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 86, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1032, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 87, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1033, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 88, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1034, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 89, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1035, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 90, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1036, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 91, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1037, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 92, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1038, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 93, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1039, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 94, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1040, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 95, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1041, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 96, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38');
INSERT INTO `tickets` (`id`, `movieTitle`, `category`, `price`, `available`, `idSchedule`, `time`, `idSeat`, `idMovie`, `createdAt`, `updatedAt`) VALUES
(1042, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 97, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1043, 'Knives Out', 'R', 10, 1, 23, '08:30pm', 98, 7, '2021-04-09 10:59:38', '2021-04-09 10:59:38'),
(1044, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 1, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1045, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 2, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1046, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 3, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1047, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 4, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1048, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 5, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1049, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 6, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1050, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 7, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1051, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 8, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1052, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 9, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1053, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 10, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1054, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 11, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1055, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 12, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1056, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 13, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1057, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 14, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1058, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 15, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1059, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 16, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1060, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 17, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1061, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 18, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1062, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 19, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1063, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 20, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1064, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 21, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1065, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 22, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1066, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 23, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1067, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 24, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1068, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 25, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1069, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 26, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1070, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 27, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1071, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 28, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1072, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 29, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1073, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 30, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1074, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 31, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1075, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 32, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1076, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 33, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1077, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 34, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1078, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 35, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1079, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 36, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1080, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 37, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1081, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 38, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1082, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 39, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1083, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 40, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1084, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 41, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1085, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 42, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1086, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 43, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1087, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 44, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1088, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 45, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1089, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 46, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1090, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 47, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1091, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 48, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1092, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 49, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1093, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 50, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1094, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 51, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1095, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 52, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1096, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 53, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1097, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 54, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1098, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 55, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1099, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 56, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1100, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 57, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1101, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 58, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1102, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 59, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1103, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 60, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1104, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 61, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1105, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 62, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1106, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 63, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1107, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 64, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1108, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 65, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1109, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 66, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1110, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 67, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1111, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 68, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1112, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 69, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1113, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 70, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1114, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 71, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1115, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 72, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1116, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 73, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1117, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 74, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1118, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 75, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1119, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 76, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1120, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 77, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1121, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 78, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1122, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 79, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1123, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 80, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1124, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 81, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1125, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 82, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1126, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 83, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1127, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 84, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1128, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 85, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1129, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 86, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1130, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 87, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1131, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 88, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1132, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 89, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1133, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 90, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1134, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 91, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1135, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 92, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1136, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 93, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1137, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 94, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1138, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 95, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1139, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 96, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1140, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 97, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1141, 'Ford v Ferrari', 'PG-13', 10, 1, 24, '02:00pm', 98, 8, '2021-04-09 11:02:13', '2021-04-09 11:02:13'),
(1142, '1917', 'R', 10, 1, 25, '07:00pm', 1, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1143, '1917', 'R', 10, 1, 25, '07:00pm', 2, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1144, '1917', 'R', 10, 1, 25, '07:00pm', 3, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1145, '1917', 'R', 10, 1, 25, '07:00pm', 4, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1146, '1917', 'R', 10, 1, 25, '07:00pm', 5, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1147, '1917', 'R', 10, 1, 25, '07:00pm', 6, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1148, '1917', 'R', 10, 1, 25, '07:00pm', 7, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1149, '1917', 'R', 10, 1, 25, '07:00pm', 8, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1150, '1917', 'R', 10, 1, 25, '07:00pm', 9, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1151, '1917', 'R', 10, 1, 25, '07:00pm', 10, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1152, '1917', 'R', 10, 1, 25, '07:00pm', 11, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1153, '1917', 'R', 10, 1, 25, '07:00pm', 12, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1154, '1917', 'R', 10, 1, 25, '07:00pm', 13, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1155, '1917', 'R', 10, 1, 25, '07:00pm', 14, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1156, '1917', 'R', 10, 1, 25, '07:00pm', 15, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1157, '1917', 'R', 10, 1, 25, '07:00pm', 16, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1158, '1917', 'R', 10, 1, 25, '07:00pm', 17, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1159, '1917', 'R', 10, 1, 25, '07:00pm', 18, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1160, '1917', 'R', 10, 1, 25, '07:00pm', 19, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1161, '1917', 'R', 10, 1, 25, '07:00pm', 20, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1162, '1917', 'R', 10, 1, 25, '07:00pm', 21, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1163, '1917', 'R', 10, 1, 25, '07:00pm', 22, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1164, '1917', 'R', 10, 1, 25, '07:00pm', 23, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1165, '1917', 'R', 10, 1, 25, '07:00pm', 24, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1166, '1917', 'R', 10, 1, 25, '07:00pm', 25, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1167, '1917', 'R', 10, 1, 25, '07:00pm', 26, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1168, '1917', 'R', 10, 1, 25, '07:00pm', 27, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1169, '1917', 'R', 10, 1, 25, '07:00pm', 28, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1170, '1917', 'R', 10, 1, 25, '07:00pm', 29, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1171, '1917', 'R', 10, 1, 25, '07:00pm', 30, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1172, '1917', 'R', 10, 1, 25, '07:00pm', 31, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1173, '1917', 'R', 10, 1, 25, '07:00pm', 32, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1174, '1917', 'R', 10, 1, 25, '07:00pm', 33, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1175, '1917', 'R', 10, 1, 25, '07:00pm', 34, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1176, '1917', 'R', 10, 1, 25, '07:00pm', 35, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1177, '1917', 'R', 10, 1, 25, '07:00pm', 36, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1178, '1917', 'R', 10, 1, 25, '07:00pm', 37, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1179, '1917', 'R', 10, 1, 25, '07:00pm', 38, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1180, '1917', 'R', 10, 1, 25, '07:00pm', 39, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1181, '1917', 'R', 10, 1, 25, '07:00pm', 40, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1182, '1917', 'R', 10, 1, 25, '07:00pm', 41, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1183, '1917', 'R', 10, 1, 25, '07:00pm', 42, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1184, '1917', 'R', 10, 1, 25, '07:00pm', 43, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1185, '1917', 'R', 10, 1, 25, '07:00pm', 44, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1186, '1917', 'R', 10, 1, 25, '07:00pm', 45, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1187, '1917', 'R', 10, 1, 25, '07:00pm', 46, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1188, '1917', 'R', 10, 1, 25, '07:00pm', 47, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1189, '1917', 'R', 10, 1, 25, '07:00pm', 48, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1190, '1917', 'R', 10, 1, 25, '07:00pm', 49, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1191, '1917', 'R', 10, 1, 25, '07:00pm', 50, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1192, '1917', 'R', 10, 1, 25, '07:00pm', 51, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1193, '1917', 'R', 10, 1, 25, '07:00pm', 52, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1194, '1917', 'R', 10, 1, 25, '07:00pm', 53, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1195, '1917', 'R', 10, 1, 25, '07:00pm', 54, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1196, '1917', 'R', 10, 1, 25, '07:00pm', 55, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1197, '1917', 'R', 10, 1, 25, '07:00pm', 56, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1198, '1917', 'R', 10, 1, 25, '07:00pm', 57, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1199, '1917', 'R', 10, 1, 25, '07:00pm', 58, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1200, '1917', 'R', 10, 1, 25, '07:00pm', 59, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1201, '1917', 'R', 10, 1, 25, '07:00pm', 60, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1202, '1917', 'R', 10, 1, 25, '07:00pm', 61, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1203, '1917', 'R', 10, 1, 25, '07:00pm', 62, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1204, '1917', 'R', 10, 1, 25, '07:00pm', 63, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1205, '1917', 'R', 10, 1, 25, '07:00pm', 64, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1206, '1917', 'R', 10, 1, 25, '07:00pm', 65, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1207, '1917', 'R', 10, 1, 25, '07:00pm', 66, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1208, '1917', 'R', 10, 1, 25, '07:00pm', 67, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1209, '1917', 'R', 10, 1, 25, '07:00pm', 68, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1210, '1917', 'R', 10, 1, 25, '07:00pm', 69, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1211, '1917', 'R', 10, 1, 25, '07:00pm', 70, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1212, '1917', 'R', 10, 1, 25, '07:00pm', 71, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1213, '1917', 'R', 10, 1, 25, '07:00pm', 72, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1214, '1917', 'R', 10, 1, 25, '07:00pm', 73, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1215, '1917', 'R', 10, 1, 25, '07:00pm', 74, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1216, '1917', 'R', 10, 1, 25, '07:00pm', 75, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1217, '1917', 'R', 10, 1, 25, '07:00pm', 76, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1218, '1917', 'R', 10, 1, 25, '07:00pm', 77, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1219, '1917', 'R', 10, 1, 25, '07:00pm', 78, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1220, '1917', 'R', 10, 1, 25, '07:00pm', 79, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1221, '1917', 'R', 10, 1, 25, '07:00pm', 80, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1222, '1917', 'R', 10, 1, 25, '07:00pm', 81, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1223, '1917', 'R', 10, 1, 25, '07:00pm', 82, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1224, '1917', 'R', 10, 1, 25, '07:00pm', 83, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1225, '1917', 'R', 10, 1, 25, '07:00pm', 84, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1226, '1917', 'R', 10, 1, 25, '07:00pm', 85, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1227, '1917', 'R', 10, 1, 25, '07:00pm', 86, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1228, '1917', 'R', 10, 1, 25, '07:00pm', 87, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1229, '1917', 'R', 10, 1, 25, '07:00pm', 88, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1230, '1917', 'R', 10, 1, 25, '07:00pm', 89, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1231, '1917', 'R', 10, 1, 25, '07:00pm', 90, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1232, '1917', 'R', 10, 1, 25, '07:00pm', 91, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1233, '1917', 'R', 10, 1, 25, '07:00pm', 92, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1234, '1917', 'R', 10, 1, 25, '07:00pm', 93, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1235, '1917', 'R', 10, 1, 25, '07:00pm', 94, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1236, '1917', 'R', 10, 1, 25, '07:00pm', 95, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1237, '1917', 'R', 10, 1, 25, '07:00pm', 96, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1238, '1917', 'R', 10, 1, 25, '07:00pm', 97, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53'),
(1239, '1917', 'R', 10, 1, 25, '07:00pm', 98, 9, '2021-04-09 11:04:53', '2021-04-09 11:04:53');

-- --------------------------------------------------------

--
-- Struktur dari tabel `time`
--

CREATE TABLE `time` (
  `id` int(11) NOT NULL,
  `time` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `time`
--

INSERT INTO `time` (`id`, `time`) VALUES
(10, '10:00:00'),
(12, '12:00:00'),
(14, '14:00:00'),
(16, '16:00:00'),
(18, '18:00:00'),
(20, '20:00:00'),
(22, '22:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `date` date DEFAULT NULL,
  `time` varchar(100) NOT NULL,
  `paymentMethod` varchar(100) NOT NULL,
  `idUser` int(11) DEFAULT NULL,
  `idCinema` int(11) NOT NULL,
  `movieTitle` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `qty` varchar(255) DEFAULT NULL,
  `seat` varchar(255) NOT NULL,
  `total` int(11) DEFAULT NULL,
  `status` enum('PENDING','SUCCESS','CANCEL') DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `transactions`
--

INSERT INTO `transactions` (`id`, `date`, `time`, `paymentMethod`, `idUser`, `idCinema`, `movieTitle`, `category`, `qty`, `seat`, `total`, `status`, `createdAt`, `updatedAt`) VALUES
(45, '2021-04-02', '08:30am', 'Ovo', 154, 1, 'The Old Guard', 'PG-13', '3', 'A1, A3, A4', 30, 'PENDING', '2021-04-05 16:58:00', '2021-04-05 16:58:00'),
(46, '2021-04-02', '08:30am', 'Google Pay', 154, 1, 'The Old Guard', 'PG-13', '1', 'D10', 10, 'PENDING', '2021-04-06 02:45:59', '2021-04-06 02:45:59'),
(47, '2021-04-02', '08:30am', 'GoPay', 154, 1, 'The Old Guard', 'PG-13', '2', 'G1, G5', 20, 'PENDING', '2021-04-12 13:05:56', '2021-04-12 13:05:56'),
(48, '2021-04-02', '08:30am', 'Ovo', 154, 1, 'The Old Guard', 'PG-13', '1', 'C7', 10, 'PENDING', '2021-05-02 22:55:28', '2021-05-02 22:55:28');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `fullName` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `phoneNumber` varchar(15) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int(11) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `moviegoers` tinyint(1) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `fullName`, `image`, `phoneNumber`, `email`, `password`, `role`, `active`, `moviegoers`, `createdAt`, `updatedAt`) VALUES
(114, 'Niel', 'Rul', 'Niel Rul', 'images\\1617118206959-Which Programming Language.png', '087827865427', 'nielrul@gmail.com', '$2b$10$V48KJBOzbKSGUFgJEhW8iO1WvHWJ9fypRq/KiGpsPDiMcR1r47Dpi', 1, 1, 0, '2021-03-23 08:42:31', '2021-03-30 15:30:06'),
(154, 'Chaerul', 'Marwan', 'Chaerul Marwan', 'images\\1617272908182-gambar.jpg', '081224685502', 'chaerulmarwan20@gmail.com', '$2b$10$3DDlB18kGHs8vaNLts7ivOLQu2xxTCaJ9IMVB56WguxMduHztMyH.', 2, 1, 0, '2021-03-29 15:43:03', '2021-04-01 10:28:28'),
(157, 'Marwan', 'Rul', 'Marwan Rul', 'images\\1617594023021-image.jpg', '081224685502', 'marwanrul@gmail.com', '$2b$10$OyGxfKj3phd88mxRvwxz3Ov80grL1/zoJFmnMQ6IkWrc1SB0KZOvq', 2, 1, 0, '2021-04-05 03:38:02', '2021-04-05 03:40:23');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user_token`
--

CREATE TABLE `user_token` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user_token`
--

INSERT INTO `user_token` (`id`, `email`, `token`, `createdAt`) VALUES
(43, 'chaerulmarwan20@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcwOTUyMjQsImV4cCI6MTYxNzE4MTYyNH0.0Cql-fujuTBG6wWeRVqrwQe0Y2YE--Whm0yLt3BeHCM', '2021-03-30 09:07:04'),
(44, 'chaerulmarwan20@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcwOTUyNzAsImV4cCI6MTYxNzE4MTY3MH0.-5KaTFE391kSrBEwd_ce1h3S85l2KL2ShXYbqoRI34Y', '2021-03-30 09:07:50'),
(45, 'chaerulmarwan20@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcwOTYyODUsImV4cCI6MTYxNzE4MjY4NX0.u4O-xGupTDkK6N8Dysjbu1oNu-Qt1hGK-zVSHZQc6sU', '2021-03-30 09:24:45'),
(46, 'chaerulmarwan20@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU0LCJlbWFpbCI6ImNoYWVydWxtYXJ3YW4yMEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJDaGFlcnVsIiwibGFzdE5hbWUiOiJNYXJ3YW4iLCJmdWxsTmFtZSI6IkNoYWVydWwgTWFyd2FuIiwicGhvbmVOdW1iZXIiOiIwODEyMjQ2ODU1MDIiLCJyb2xlIjoyLCJpYXQiOjE2MTcwOTY1NzEsImV4cCI6MTYxNzE4Mjk3MX0._DVxxyCJaBjNCxTjVdJaxCZY_JYogiB0-3YtYw-W3sc', '2021-03-30 09:29:31'),
(47, 'edaneling066@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU1LCJlbWFpbCI6ImVkYW5lbGluZzA2NkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJmaXJzdE5hbWUiLCJsYXN0TmFtZSI6Imxhc3ROYW1lIiwiZnVsbE5hbWUiOiJmaXJzdE5hbWUgbGFzdE5hbWUiLCJwaG9uZU51bWJlciI6IjAwMDAwMDAwMDAwMCIsInJvbGUiOjIsImlhdCI6MTYxNzU0NjQ1NywiZXhwIjoxNjE3NjMyODU3fQ.EyBVLvbDuoM0_7O06ZjfPfTxvlbx2_zSNXuxYZeTjAo', '2021-04-04 14:27:37'),
(48, 'edaneling066@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU2LCJlbWFpbCI6ImVkYW5lbGluZzA2NkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJmaXJzdE5hbWUiLCJsYXN0TmFtZSI6Imxhc3ROYW1lIiwiZnVsbE5hbWUiOiJmaXJzdE5hbWUgbGFzdE5hbWUiLCJwaG9uZU51bWJlciI6IjAwMDAwMDAwMDAwMCIsInJvbGUiOjIsImlhdCI6MTYxNzU1MzIwOSwiZXhwIjoxNjE3NjM5NjA5fQ.X328fP1ap-BJyi9KZk544tGUJZFPZuLCsFTJyJv6VEg', '2021-04-04 16:20:09');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `access_token`
--
ALTER TABLE `access_token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Indeks untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCity` (`idCity`);

--
-- Indeks untuk tabel `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `detail_transactions`
--
ALTER TABLE `detail_transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTransactions` (`idTransactions`,`idTicket`),
  ADD KEY `idTicket` (`idTicket`);

--
-- Indeks untuk tabel `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTime` (`idCity`,`idMovie`,`idCinema`,`idTicket`),
  ADD KEY `idTicket` (`idTicket`),
  ADD KEY `idCinema` (`idCinema`),
  ADD KEY `idMovie` (`idMovie`);

--
-- Indeks untuk tabel `schedule_time`
--
ALTER TABLE `schedule_time`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idSchedule` (`idSchedule`,`idTime`),
  ADD KEY `idTime` (`idTime`);

--
-- Indeks untuk tabel `seat`
--
ALTER TABLE `seat`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idMovie` (`idMovie`),
  ADD KEY `idSeat` (`idSeat`),
  ADD KEY `idSchedule` (`idSchedule`),
  ADD KEY `time` (`time`);

--
-- Indeks untuk tabel `time`
--
ALTER TABLE `time`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `time` (`time`);

--
-- Indeks untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idCinema` (`idCinema`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user_token`
--
ALTER TABLE `user_token`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `access_token`
--
ALTER TABLE `access_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT untuk tabel `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT untuk tabel `detail_transactions`
--
ALTER TABLE `detail_transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT untuk tabel `movies`
--
ALTER TABLE `movies`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT untuk tabel `payments`
--
ALTER TABLE `payments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT untuk tabel `schedule`
--
ALTER TABLE `schedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT untuk tabel `schedule_time`
--
ALTER TABLE `schedule_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `seat`
--
ALTER TABLE `seat`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT untuk tabel `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1240;

--
-- AUTO_INCREMENT untuk tabel `time`
--
ALTER TABLE `time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT untuk tabel `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=158;

--
-- AUTO_INCREMENT untuk tabel `user_token`
--
ALTER TABLE `user_token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `access_token`
--
ALTER TABLE `access_token`
  ADD CONSTRAINT `access_token_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `cinemas`
--
ALTER TABLE `cinemas`
  ADD CONSTRAINT `cinemas_ibfk_1` FOREIGN KEY (`idCity`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `detail_transactions`
--
ALTER TABLE `detail_transactions`
  ADD CONSTRAINT `detail_transactions_ibfk_1` FOREIGN KEY (`idTransactions`) REFERENCES `transactions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `detail_transactions_ibfk_2` FOREIGN KEY (`idTicket`) REFERENCES `tickets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `schedule`
--
ALTER TABLE `schedule`
  ADD CONSTRAINT `schedule_ibfk_1` FOREIGN KEY (`idCity`) REFERENCES `cities` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_ibfk_2` FOREIGN KEY (`idTicket`) REFERENCES `tickets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_ibfk_3` FOREIGN KEY (`idCinema`) REFERENCES `cinemas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_ibfk_5` FOREIGN KEY (`idMovie`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `schedule_time`
--
ALTER TABLE `schedule_time`
  ADD CONSTRAINT `schedule_time_ibfk_1` FOREIGN KEY (`idSchedule`) REFERENCES `schedule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedule_time_ibfk_2` FOREIGN KEY (`idTime`) REFERENCES `time` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `tickets_ibfk_1` FOREIGN KEY (`idMovie`) REFERENCES `movies` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tickets_ibfk_2` FOREIGN KEY (`idSeat`) REFERENCES `seat` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tickets_ibfk_3` FOREIGN KEY (`idSchedule`) REFERENCES `schedule` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `transactions_ibfk_4` FOREIGN KEY (`idCinema`) REFERENCES `cinemas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
