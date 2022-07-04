/*
  Warnings:

  - Added the required column `firstName` to the `Entrant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Entrant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middleName` to the `Entrant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Entrant" ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "middleName" TEXT NOT NULL;
