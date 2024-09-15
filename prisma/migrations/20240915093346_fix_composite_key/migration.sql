/*
  Warnings:

  - The primary key for the `detail_borrowing_by_visitors` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `detail_borrowing_by_visitors` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`borrowing_id`, `book_id`);
