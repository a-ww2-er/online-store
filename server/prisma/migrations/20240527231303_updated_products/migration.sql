/*
  Warnings:

  - You are about to drop the column `tags` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `products` DROP COLUMN `tags`,
    MODIFY `rating` DECIMAL(65, 30) NOT NULL DEFAULT 0;
