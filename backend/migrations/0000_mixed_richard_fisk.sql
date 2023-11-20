DO $$ BEGIN
 CREATE TYPE "gender" AS ENUM('M', 'F');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "clients" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256),
	"firstname" varchar(256) NOT NULL,
	"lastname" varchar(256) NOT NULL,
	"password" varchar(256) NOT NULL,
	"gender" "gender" NOT NULL,
	CONSTRAINT "clients_email_unique" UNIQUE("email")
);
