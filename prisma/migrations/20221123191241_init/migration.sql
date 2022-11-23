/*
  Warnings:

  - You are about to drop the column `release_data` on the `movies` table. All the data in the column will be lost.
  - Added the required column `release_date` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_movies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "release_date" DATETIME NOT NULL
);
INSERT INTO "new_movies" ("duration", "id", "title") SELECT "duration", "id", "title" FROM "movies";
DROP TABLE "movies";
ALTER TABLE "new_movies" RENAME TO "movies";
CREATE UNIQUE INDEX "movies_title_key" ON "movies"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
