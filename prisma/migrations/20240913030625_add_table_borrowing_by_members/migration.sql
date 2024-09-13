-- CreateTable
CREATE TABLE `borrowing_by_members` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `book_id` INTEGER NOT NULL,
    `borrow_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `due_date` DATETIME(3) NOT NULL,
    `return_date` DATETIME(3) NOT NULL,
    `late_charge` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `borrowing_by_members` ADD CONSTRAINT `borrowing_by_members_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `borrowing_by_members` ADD CONSTRAINT `borrowing_by_members_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
