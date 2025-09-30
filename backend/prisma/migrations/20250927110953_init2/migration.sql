/*
  Warnings:

  - Made the column `age` on table `Users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `email` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Users` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    MODIFY `age` INTEGER NOT NULL,
    MODIFY `email` VARCHAR(191) NOT NULL;
