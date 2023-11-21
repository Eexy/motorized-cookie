import {
  foreignKey,
  integer,
  pgEnum,
  pgTable,
  serial,
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

export const categories = pgTable(
  'categories',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 256 }).notNull(),
    parent: integer('parent'),
  },
  (table) => {
    return {
      parentReference: foreignKey({
        columns: [table.parent],
        foreignColumns: [table.id],
        name: 'custom_parent_fk',
      }),
    };
  },
);
