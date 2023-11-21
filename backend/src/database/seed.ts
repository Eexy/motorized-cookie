import { DbType } from './database.provider';
import { categories } from './schema';

export async function seedDatabase(db: DbType) {
  await seedCategory(db);
}

export async function seedCategory(db: DbType) {
  const seedCategories = [
    'shoes',
    'jeans',
    'underwears',
    'shirts',
    'socks',
    'coats',
    'sweats',
  ];

  return await Promise.all(
    seedCategories.map(async (cat) => {
      return db.insert(categories).values({ name: cat });
    }),
  );
}
