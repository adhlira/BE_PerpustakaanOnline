/*
  Warnings:

  - A unique constraint covering the columns `[phone_number]` on the table `visitors` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `visitors_phone_number_key` ON `visitors`(`phone_number`);
