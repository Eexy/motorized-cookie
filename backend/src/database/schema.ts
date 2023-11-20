import { pgEnum, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const genderEnum = pgEnum('gender', ['M', 'F']);
export const clients = pgTable('clients', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 256 }).unique(),
  firstName: varchar('firstname', { length: 256 }).notNull(),
  lastName: varchar('lastname', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  gender: genderEnum('gender').notNull(),
});
