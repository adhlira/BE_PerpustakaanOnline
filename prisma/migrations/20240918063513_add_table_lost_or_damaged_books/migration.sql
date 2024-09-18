/*
  Warnings:

  - You are about to alter the column `status` on the `books` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(7))`.
  - You are about to alter the column `status` on the `borrowing_by_members` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(7))`.
  - You are about to alter the column `status` on the `borrowing_by_visitors` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(7))`.
  - You are about to alter the column `status` on the `detail_borrowing_by_members` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(7))`.
  - You are about to alter the column `status` on the `detail_borrowing_by_visitors` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(7))`.

*/
-- AlterTable
ALTER TABLE `book_reservation` MODIFY `status` ENUM('PENDING', 'AVAILABLE', 'NOT_AVAILABLE', 'NOTIFIED', 'LOST', 'DAMAGED', 'BORROWED', 'RETURNED') NOT NULL;

-- AlterTable
ALTER TABLE `books` MODIFY `status` ENUM('PENDING', 'AVAILABLE', 'NOT_AVAILABLE', 'NOTIFIED', 'LOST', 'DAMAGED', 'BORROWED', 'RETURNED') NOT NULL;

-- AlterTable
ALTER TABLE `borrowing_by_members` MODIFY `status` ENUM('PENDING', 'AVAILABLE', 'NOT_AVAILABLE', 'NOTIFIED', 'LOST', 'DAMAGED', 'BORROWED', 'RETURNED') NOT NULL;

-- AlterTable
ALTER TABLE `borrowing_by_visitors` MODIFY `status` ENUM('PENDING', 'AVAILABLE', 'NOT_AVAILABLE', 'NOTIFIED', 'LOST', 'DAMAGED', 'BORROWED', 'RETURNED') NOT NULL;

-- AlterTable
ALTER TABLE `detail_book_reservatiion` MODIFY `status` ENUM('PENDING', 'AVAILABLE', 'NOT_AVAILABLE', 'NOTIFIED', 'LOST', 'DAMAGED', 'BORROWED', 'RETURNED') NOT NULL;

-- AlterTable
ALTER TABLE `detail_borrowing_by_members` MODIFY `status` ENUM('PENDING', 'AVAILABLE', 'NOT_AVAILABLE', 'NOTIFIED', 'LOST', 'DAMAGED', 'BORROWED', 'RETURNED') NOT NULL;

-- AlterTable
ALTER TABLE `detail_borrowing_by_visitors` MODIFY `status` ENUM('PENDING', 'AVAILABLE', 'NOT_AVAILABLE', 'NOTIFIED', 'LOST', 'DAMAGED', 'BORROWED', 'RETURNED') NOT NULL;

-- CreateTable
CREATE TABLE `lost_or_damaged_books` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `book_id` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'AVAILABLE', 'NOT_AVAILABLE', 'NOTIFIED', 'LOST', 'DAMAGED', 'BORROWED', 'RETURNED') NOT NULL,
    `reported_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descriptiion` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `lost_or_damaged_books` ADD CONSTRAINT `lost_or_damaged_books_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
