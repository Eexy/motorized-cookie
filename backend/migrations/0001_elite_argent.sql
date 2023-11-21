CREATE TABLE IF NOT EXISTS "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"parent" integer
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "categories" ADD CONSTRAINT "custom_parent_fk" FOREIGN KEY ("parent") REFERENCES "categories"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
