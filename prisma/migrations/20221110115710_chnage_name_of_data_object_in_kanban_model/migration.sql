/*
  Warnings:

  - You are about to drop the column `data` on the `Kanban` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Kanban" DROP COLUMN "data",
ADD COLUMN     "kanbanObject" JSONB;
