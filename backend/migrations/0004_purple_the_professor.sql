ALTER TABLE "categories" ADD COLUMN "createAt" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "clients" ADD COLUMN "createAt" timestamp DEFAULT now();