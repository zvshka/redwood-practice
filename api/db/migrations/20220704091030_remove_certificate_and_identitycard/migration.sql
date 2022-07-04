/*
  Warnings:

  - You are about to drop the `Certificate` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `IdentityCard` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Certificate" DROP CONSTRAINT "Certificate_entrantId_fkey";

-- DropForeignKey
ALTER TABLE "IdentityCard" DROP CONSTRAINT "IdentityCard_entrantId_fkey";

-- DropTable
DROP TABLE "Certificate";

-- DropTable
DROP TABLE "IdentityCard";
