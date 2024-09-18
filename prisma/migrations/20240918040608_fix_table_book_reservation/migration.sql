/*
  Warnings:

  - You are about to drop the column `book_id` on the `book_reservation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `book_reservation` DROP FOREIGN KEY `book_reservation_book_id_fkey`;

-- AlterTable
ALTER TABLE `book_reservation` DROP COLUMN `book_id`;
