/*
  Warnings:

  - You are about to alter the column `price` on the `course` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `course` MODIFY `duration` INTEGER NOT NULL,
    MODIFY `price` DOUBLE NOT NULL;
