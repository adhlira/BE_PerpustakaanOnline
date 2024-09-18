/*
  Warnings:

  - You are about to alter the column `status` on the `book_reservation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.

*/
-- AlterTable
ALTER TABLE `book_reservation` MODIFY `status` ENUM('PENDING', 'AVAILABLE', 'NOTIFIED') NOT NULL;

-- CreateTable
CREATE TABLE `detail_book_reservatiion` (
    `reservation_id` INTEGER NOT NULL,
    `book_id` INTEGER NOT NULL,
    `status` ENUM('PENDING', 'AVAILABLE', 'NOTIFIED') NOT NULL,
    `notification_sent` BOOLEAN NOT NULL,

    PRIMARY KEY (`reservation_id`, `book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detail_book_reservatiion` ADD CONSTRAINT `detail_book_reservatiion_reservation_id_fkey` FOREIGN KEY (`reservation_id`) REFERENCES `book_reservation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_book_reservatiion` ADD CONSTRAINT `detail_book_reservatiion_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
