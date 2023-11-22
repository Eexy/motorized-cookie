import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const genderEnum = pgEnum('gender', ['M', 'F']);
export const clients = pgTable('clients', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 256 }).unique(),
  firstName: varchar('firstname', { length: 256 }).notNull(),
  lastName: varchar('lastname', { length: 256 }).notNull(),
  password: varchar('password', { length: 256 }).notNull(),
  gender: genderEnum('gender').notNull(),
});

export const categories = pgTable('categories', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
});

export const products = pgTable('products', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  description: text('description'),
  price: text('price'),
  categoryId: integer('categoryId')
    .notNull()
    .references(() => categories.id),
  createdAt: timestamp('createdAt').defaultNow(),
});
