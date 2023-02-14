/*
  Warnings:

  - You are about to drop the `Verb` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Verb" DROP CONSTRAINT "Verb_auth0_fkey";

-- DropTable
DROP TABLE "Verb";

-- CreateTable
CREATE TABLE "Noun" (
    "id" SERIAL NOT NULL,
    "category" TEXT NOT NULL,
    "polish_word" TEXT NOT NULL,
    "english_word" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "notes" TEXT NOT NULL,
    "auth0" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Noun_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Noun" ADD CONSTRAINT "Noun_auth0_fkey" FOREIGN KEY ("auth0") REFERENCES "User"("auth0ID") ON DELETE RESTRICT ON UPDATE CASCADE;
