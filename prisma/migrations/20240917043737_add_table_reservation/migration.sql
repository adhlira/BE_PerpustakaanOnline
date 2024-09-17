-- CreateTable
CREATE TABLE `book_reservation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `member_id` INTEGER NOT NULL,
    `book_id` INTEGER NOT NULL,
    `reservation_date` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `notification_sent` BOOLEAN NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `book_reservation` ADD CONSTRAINT `book_reservation_member_id_fkey` FOREIGN KEY (`member_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `book_reservation` ADD CONSTRAINT `book_reservation_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
