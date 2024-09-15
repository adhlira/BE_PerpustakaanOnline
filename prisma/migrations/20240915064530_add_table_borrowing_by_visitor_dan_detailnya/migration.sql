-- CreateTable
CREATE TABLE `borrowing_by_visitors` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `visitor_id` INTEGER NOT NULL,
    `staff_id` INTEGER NOT NULL,
    `borrow_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `due_date` DATETIME(3) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detail_borrowing_by_visitors` (
    `borrowing_id` INTEGER NOT NULL,
    `book_id` INTEGER NOT NULL,
    `return_date` DATETIME(3) NULL,
    `late_charge` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`book_id`, `borrowing_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `borrowing_by_visitors` ADD CONSTRAINT `borrowing_by_visitors_visitor_id_fkey` FOREIGN KEY (`visitor_id`) REFERENCES `visitors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `borrowing_by_visitors` ADD CONSTRAINT `borrowing_by_visitors_staff_id_fkey` FOREIGN KEY (`staff_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_borrowing_by_visitors` ADD CONSTRAINT `detail_borrowing_by_visitors_borrowing_id_fkey` FOREIGN KEY (`borrowing_id`) REFERENCES `borrowing_by_visitors`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `detail_borrowing_by_visitors` ADD CONSTRAINT `detail_borrowing_by_visitors_book_id_fkey` FOREIGN KEY (`book_id`) REFERENCES `books`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
