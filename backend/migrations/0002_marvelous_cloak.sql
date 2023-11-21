ALTER TABLE "categories" DROP CONSTRAINT "custom_parent_fk";
--> statement-breakpoint
ALTER TABLE "categories" DROP COLUMN IF EXISTS "parent";