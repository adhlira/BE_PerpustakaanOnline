/*
  Warnings:

  - You are about to drop the column `book_id` on the `borrowing_by_members` table. All the data in the column will be lost.
  - You are about to drop the column `late_charge` on the `borrowing_by_members` table. All the data in the column will be lost.
  - You are about to drop the column `return_date` on the `borrowing_by_members` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `borrowing_by_members` DROP FOREIGN KEY `borrowing_by_members_book_id_fkey`;

-- AlterTable
ALTER TABLE `borrowing_by_members` DROP COLUMN `book_id`,
    DROP COLUMN `late_charge`,
    DROP COLUMN `return_date`;

-- CreateTable
CREATE TABLE `detail_borrowing_by_members` (
    `loan_id` INTEGER NOT NULL,
    `book_id` INTEGER NOT NULL,
    `return_date` DATETIME(3) NULL,
    `late_charge` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`loan_id`, `book_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detail_borrowing_by_members` ADD CONSTRAINT `detail_borrowing_by_members_loan_id_fkey` FOREIGN KEY (`loan_id`) REFERENCES `borrowing_by_members`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_borrowing_by_members` ADD CONSTRAINT `detail_borrowing_by_members_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
