/*
  Warnings:

  - Added the required column `category` to the `article` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `article` ADD COLUMN `category` VARCHAR(100) NOT NULL,
    ADD COLUMN `published` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `tags` VARCHAR(200) NULL;
