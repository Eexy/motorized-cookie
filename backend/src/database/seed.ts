import { DbType } from './database.provider';
import { categories, products } from './schema';
import { faker } from '@faker-js/faker';

export async function seedDatabase(db: DbType) {
  await seedCategory(db);
  await seedProducts(db);
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

export async function seedProducts(db: DbType) {
  const r = Math.floor(Math.random() * (101 - 10) + 10);
  const seedProducts = [];

  for (let i = 0; i < r; i++) {
    const product = {
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price({ min: 10 })),
      categoryId: Math.floor(Math.random() * (7 - 1) + 1),
    };

    seedProducts.push(product);
  }

  return await Promise.all(
    seedProducts.map(async (product) => {
      return db.insert(products).values(product);
    }),
  );
}
