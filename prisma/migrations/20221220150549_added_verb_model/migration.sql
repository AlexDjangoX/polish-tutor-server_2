/*
  Warnings:

  - You are about to drop the column `userId` on the `Profile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[auth0]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `auth0` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_userId_fkey";

-- DropIndex
DROP INDEX "Profile_userId_key";

-- AlterTable
ALTER TABLE "Profile" DROP COLUMN "userId",
ADD COLUMN     "auth0" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Verb" (
    "id" SERIAL NOT NULL,
    "polish_word" TEXT NOT NULL,
    "english_word" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "auth0" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Verb_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Verb_auth0_key" ON "Verb"("auth0");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_auth0_key" ON "Profile"("auth0");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_auth0_fkey" FOREIGN KEY ("auth0") REFERENCES "User"("auth0ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Verb" ADD CONSTRAINT "Verb_auth0_fkey" FOREIGN KEY ("auth0") REFERENCES "User"("auth0ID") ON DELETE RESTRICT ON UPDATE CASCADE;
