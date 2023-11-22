import { InferSelectModel } from 'drizzle-orm';
import { clients } from '../../database/schema';

export type IClient = InferSelectModel<typeof clients>;
