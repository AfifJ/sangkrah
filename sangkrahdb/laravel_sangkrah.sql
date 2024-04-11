-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2024 at 05:47 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_sangkrah`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inbox`
--

CREATE TABLE `inbox` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `content` longtext NOT NULL,
  `type` varchar(255) NOT NULL,
  `read_status` tinyint(1) NOT NULL DEFAULT 0,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `partner_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(9, '2024_04_10_151738_create_tukar_reward', 1),
(10, '2014_10_12_100000_create_password_reset_tokens_table', 2),
(11, '2019_08_19_000000_create_failed_jobs_table', 2),
(12, '2019_12_14_000001_create_personal_access_tokens_table', 2),
(13, '2024_03_31_115610_create_rewards', 2),
(14, '2024_03_31_115615_create_users', 2),
(15, '2024_03_31_115625_create_partners', 2),
(16, '2024_03_31_115700_create_inbox', 2),
(17, '2024_03_31_115952_create_transactions', 2),
(18, '2024_04_10_151738_create_userReward', 2),
(19, '2024_04_11_054519_create_topup', 3);

-- --------------------------------------------------------

--
-- Table structure for table `partners`
--

CREATE TABLE `partners` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `logo` varchar(255) DEFAULT NULL,
  `service` varchar(50) NOT NULL,
  `desc` longtext DEFAULT NULL,
  `balance` bigint(20) NOT NULL,
  `point` int(11) NOT NULL,
  `pict` varchar(255) NOT NULL,
  `province` varchar(50) NOT NULL,
  `kabupaten` varchar(50) NOT NULL,
  `kecamatan` varchar(50) NOT NULL,
  `kelurahan` varchar(50) NOT NULL,
  `address_detail` varchar(255) NOT NULL,
  `coordinate` varchar(255) NOT NULL,
  `active_status` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `partners`
--

INSERT INTO `partners` (`id`, `name`, `email`, `password`, `phone`, `logo`, `service`, `desc`, `balance`, `point`, `pict`, `province`, `kabupaten`, `kecamatan`, `kelurahan`, `address_detail`, `coordinate`, `active_status`, `created_at`, `updated_at`) VALUES
(1, 'Tempat Daur Ulang A', 'olah431413@gmail.com', '$2y$12$MsFDq1ZUTldV0j/UdX9oCOyssYjDUKfQmGzZhvUEzXyP1Wb61FnO6', '089123456789', '854FmqKpOXCtLPy7RpMtQkSExkTmoMTIiH0ApjCo.jpg', 'Recycle', 'owowowo', 2000000, 250, 'GJjojYlPbIsSDPThk5yN2m4mmzGmUPw9ndOlPHVA.png', 'Yogyakarta', 'Sleman', 'Turi', 'Bangunkerto', 'RW 1 RT 5', '7°39\'21.9\"S 110°21\'46.0\"E', 0, '2024-04-11 00:09:15', '2024-04-11 00:09:15'),
(2, 'Tempat Daur Ulang B', 'olah43141@gmail.com', '$2y$12$h06CWyOVF3iJGMfhwz/pouJc/p0PJo1z.zW5tRnYrOWjtrckN5zf2', '089123456789', '9P18AWEQHty8JSA0094xmPCQ4oDRyJlfctN0nLJI.jpg', 'Recycle', 'owowowo', 2000000, 250, 'z2n746O6CxGTs4JbKrGBUPPlCkKNPcg21aZR9NX4.png', 'Yogyakarta', 'Sleman', 'Turi', 'Bangunkerto', 'RW 1 RT 5', '7°39\'21.9\"S 110°21\'46.0\"E', 0, '2024-04-11 00:12:37', '2024-04-11 00:12:37'),
(3, 'Tempat Daur Ulang C', 'olah4314@gmail.com', '$2y$12$n0VG4drOmrYUVam0nXMT9.99ARzr0Zl0pZi6TdBpk2u7f/zCepXfC', '089123456789', 'uolZy2PESbKCWst0rFx4LsdthIjiE0MFEiM77tu3.jpg', 'Recycle', 'owowowo', 2019350, 250, 'SLsLiD0OBSpqEod21qYyxIExAKz58r47Wwx2yDxP.png', 'Yogyakarta', 'Sleman', 'Turi', 'Bangunkerto', 'RW 1 RT 5', '7°39\'21.9\"S 110°21\'46.0\"E', 0, '2024-04-11 00:12:47', '2024-04-11 08:28:57'),
(4, 'Pembuangan Sampah A', 'olah431@gmail.com', '$2y$12$Ql6ae1543Ms1YFD7gxdVw.6pkHUQGyw0Z0zqk1ravS8FGZdthTh2y', '089123456789', 'D39B7YxX9Cyc8R6kyuKTxdBtCNwdz9ZjQRARde0G.jpg', 'Buang', 'owowowo', 2000000, 250, 'e52JBGvL5bucRHBFIubaFZLpJAQ587fAhuYRb57v.png', 'Yogyakarta', 'Sleman', 'Turi', 'Bangunkerto', 'RW 1 RT 5', '7°39\'21.9\"S 110°21\'46.0\"E', 0, '2024-04-11 02:13:46', '2024-04-11 02:13:46'),
(5, 'Pembuangan Sampah B', 'olah43@gmail.com', '$2y$12$4Lyv9stkzT/R2Gcp./9TxuavY3tLcO2MIOtNuBQbKFMfmdcY.5hby', '089123456789', 'RprBMrEyFD5iPX7sU1vDpcmLy93qyRhuegUQmK9I.jpg', 'Buang', 'owowowo', 2000000, 250, '2zZFHLEjNSCykG9vMdupzFdai5nCeKvbtzpgPXRs.png', 'Yogyakarta', 'Sleman', 'Turi', 'Bangunkerto', 'RW 1 RT 5', '7°39\'21.9\"S 110°21\'46.0\"E', 0, '2024-04-11 02:13:58', '2024-04-11 02:13:58'),
(6, 'Pembuangan Sampah C', 'olah4@gmail.com', '$2y$12$slUFq/QOsIwJWOLt2kXaKe3dDLnmPfnKl1M5a24rOMKZ0Me3y6GhK', '089123456789', 'z942Ipzb4hQAAGwhB63V4uympEHYWLQ59hZXbRan.jpg', 'Buang', 'owowowo', 2007500, 250, 'vXaYoY2XMKGIofc6SsMtI2262IQF16gUED3rolpN.png', 'Yogyakarta', 'Sleman', 'Turi', 'Bangunkerto', 'RW 1 RT 5', '7°39\'21.9\"S 110°21\'46.0\"E', 0, '2024-04-11 02:14:11', '2024-04-11 08:29:17');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rewards`
--

CREATE TABLE `rewards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `pict` varchar(255) NOT NULL,
  `desc` longtext NOT NULL,
  `price` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rewards`
--

INSERT INTO `rewards` (`id`, `title`, `category`, `pict`, `desc`, `price`, `stock`, `created_at`, `updated_at`) VALUES
(1, 'Voucher 10 diamond EPEP', 'Games', 'V6lEJQnnvvZWCj6zOU5SbMNTJtbCCUeLoyNDYckk.jpg', 'EPEP MANTAP', 275, 5, '2024-04-10 18:28:23', '2024-04-10 22:05:38'),
(2, 'Diskon 20% KFC', 'Makanan & Minuman', 'ttsWPwZkCEL31pOVpkilqgcK5rG7i3hv1IJdhpNC.jpg', 'Makan Bang', 250, 4, '2024-04-10 18:31:57', '2024-04-11 08:30:17'),
(3, 'Diskon 20% ZARA', 'Belanja', 'QwaBtxlVS60LVwmDP7EmrFs0utPbTJ3UiF37zWDu.jpg', 'Belanja bang', 250, 3, '2024-04-10 18:32:23', '2024-04-11 08:19:55');

-- --------------------------------------------------------

--
-- Table structure for table `topups`
--

CREATE TABLE `topups` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `method` char(255) NOT NULL,
  `nominal` int(11) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `topups`
--

INSERT INTO `topups` (`id`, `method`, `nominal`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'alfamaret', 111500, 1, '2024-04-10 23:35:57', '2024-04-10 23:35:57'),
(2, 'alfamaret', 21500, 1, '2024-04-10 23:37:28', '2024-04-10 23:37:28'),
(3, 'lawran', 11500, 1, '2024-04-10 23:38:04', '2024-04-10 23:38:04'),
(4, 'lawran', 2001500, 3, '2024-04-11 08:15:36', '2024-04-11 08:15:36'),
(5, 'alfamaret', 71500, 3, '2024-04-11 08:28:04', '2024-04-11 08:28:04');

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(50) NOT NULL,
  `trash_type` varchar(25) NOT NULL,
  `trash_amount` int(11) NOT NULL,
  `total` int(11) NOT NULL,
  `delivery_method` varchar(50) NOT NULL,
  `point_obtain` int(11) NOT NULL,
  `desc` longtext DEFAULT NULL,
  `payment_method` varchar(255) NOT NULL,
  `status` varchar(10) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `partner_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `title`, `trash_type`, `trash_amount`, `total`, `delivery_method`, `point_obtain`, `desc`, `payment_method`, `status`, `user_id`, `partner_id`, `created_at`, `updated_at`) VALUES
(1, 'Daur Ulang', 'Logam', 2, 3000, 'jemput', 30, NULL, 'Wallet', 'Selesai', 1, 3, '2024-04-11 02:06:02', '2024-04-11 02:06:02'),
(2, 'Daur Ulang', 'Plastik', 2, 3000, 'antar', 30, NULL, 'Wallet', 'Selesai', 1, 3, '2024-04-11 02:06:33', '2024-04-11 02:06:33'),
(3, 'Buang', 'Plastik', 2, 2850, 'jemput', 15, NULL, 'Wallet', 'Selesai', 1, 6, '2024-04-11 02:29:40', '2024-04-11 02:29:40'),
(4, 'Daur Ulang', 'Plastik', 2, 2850, 'jemput', 30, NULL, 'Wallet', 'Selesai', 1, 3, '2024-04-11 02:35:25', '2024-04-11 02:35:25'),
(5, 'Daur Ulang', 'Plastik', 2, 3000, 'jemput', 30, NULL, 'Wallet', 'Selesai', 3, 3, '2024-04-11 08:16:25', '2024-04-11 08:16:25'),
(6, 'Daur Ulang', 'Kertas', 7, 10500, 'jemput', 30, NULL, 'Wallet', 'Selesai', 3, 3, '2024-04-11 08:18:17', '2024-04-11 08:18:17'),
(7, 'Buang', 'Kertas', 2, 3000, 'jemput', 15, NULL, 'Wallet', 'Selesai', 3, 6, '2024-04-11 08:19:04', '2024-04-11 08:19:04'),
(8, 'Daur Ulang', 'Plastik', 2, 3000, 'jemput', 30, NULL, 'Wallet', 'Selesai', 3, 3, '2024-04-11 08:28:57', '2024-04-11 08:28:57'),
(9, 'Buang', 'Plastik', 3, 4500, 'jemput', 15, NULL, 'Wallet', 'Selesai', 3, 6, '2024-04-11 08:29:17', '2024-04-11 08:29:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profile_pict` varchar(255) DEFAULT NULL,
  `balance` int(11) NOT NULL,
  `point` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `profile_pict`, `balance`, `point`, `created_at`, `updated_at`) VALUES
(1, 'bayuYA', 'bayu@gmail.com', '$2y$12$1SROdA6GYjV9HrqJVI7a7./qhOmPQo8LZsbjwYPdU7ODx.JLrHvTe', NULL, 141650, 475, '2024-04-10 18:17:44', '2024-04-11 02:35:25'),
(2, 'ammaryak', 'bayu564@gmail.com', '$2y$12$KQTCulCcd03bL1kxZyvLWupsc40H1yc62fVS.ZRIuy72R7GaAATti', NULL, 0, 0, '2024-04-11 03:39:33', '2024-04-11 03:39:33'),
(3, 'Paryon', 'par@gmail.com', '$2y$12$2qnxB6Jl9BBwNsa6Qpj9zOVbHlOWAsJs/DtDFqtVjWni6IZkTRNCO', NULL, 2049000, 275, '2024-04-11 08:13:40', '2024-04-11 08:33:02'),
(4, 'Paryono', 'paryon@gmail.com', '$2y$12$83d/gE836BOsq8JIt7zkJeFeJlJ/mvOXW/lnxQ6s.fXgktorxVcdi', NULL, 0, 0, '2024-04-11 08:26:55', '2024-04-11 08:26:55');

-- --------------------------------------------------------

--
-- Table structure for table `user_rewards`
--

CREATE TABLE `user_rewards` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `reward_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_rewards`
--

INSERT INTO `user_rewards` (`id`, `user_id`, `reward_id`, `created_at`, `updated_at`) VALUES
(2, 1, 3, '2024-04-10 21:27:02', '2024-04-10 21:27:02'),
(3, 1, 2, '2024-04-10 21:28:01', '2024-04-10 21:28:01'),
(4, 1, 3, '2024-04-10 22:05:29', '2024-04-10 22:05:29'),
(6, 3, 3, '2024-04-11 08:19:55', '2024-04-11 08:19:55'),
(7, 3, 2, '2024-04-11 08:30:17', '2024-04-11 08:30:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `inbox`
--
ALTER TABLE `inbox`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inbox_user_id_foreign` (`user_id`),
  ADD KEY `inbox_partner_id_foreign` (`partner_id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `partners`
--
ALTER TABLE `partners`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `partners_name_unique` (`name`),
  ADD UNIQUE KEY `partners_email_unique` (`email`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `rewards`
--
ALTER TABLE `rewards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `topups`
--
ALTER TABLE `topups`
  ADD PRIMARY KEY (`id`),
  ADD KEY `topup_user_id_foreign` (`user_id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `transactions_user_id_foreign` (`user_id`),
  ADD KEY `transactions_partner_id_foreign` (`partner_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_rewards`
--
ALTER TABLE `user_rewards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userreward_user_id_foreign` (`user_id`),
  ADD KEY `userreward_reward_id_foreign` (`reward_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inbox`
--
ALTER TABLE `inbox`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `partners`
--
ALTER TABLE `partners`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rewards`
--
ALTER TABLE `rewards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `topups`
--
ALTER TABLE `topups`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_rewards`
--
ALTER TABLE `user_rewards`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `inbox`
--
ALTER TABLE `inbox`
  ADD CONSTRAINT `inbox_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`),
  ADD CONSTRAINT `inbox_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `topups`
--
ALTER TABLE `topups`
  ADD CONSTRAINT `topup_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_partner_id_foreign` FOREIGN KEY (`partner_id`) REFERENCES `partners` (`id`),
  ADD CONSTRAINT `transactions_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `user_rewards`
--
ALTER TABLE `user_rewards`
  ADD CONSTRAINT `userreward_reward_id_foreign` FOREIGN KEY (`reward_id`) REFERENCES `rewards` (`id`),
  ADD CONSTRAINT `userreward_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
