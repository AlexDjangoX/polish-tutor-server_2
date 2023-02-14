/*
  Warnings:

  - You are about to drop the column `userId` on the `Kanban` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[auth0]` on the table `Kanban` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `auth0` to the `Kanban` table without a default value. This is not possible if the table is not empty.
  - Made the column `auth0ID` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Kanban" DROP CONSTRAINT "Kanban_userId_fkey";

-- DropIndex
DROP INDEX "Kanban_userId_key";

-- AlterTable
ALTER TABLE "Kanban" DROP COLUMN "userId",
ADD COLUMN     "auth0" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "auth0ID" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Kanban_auth0_key" ON "Kanban"("auth0");

-- AddForeignKey
ALTER TABLE "Kanban" ADD CONSTRAINT "Kanban_auth0_fkey" FOREIGN KEY ("auth0") REFERENCES "User"("auth0ID") ON DELETE RESTRICT ON UPDATE CASCADE;
