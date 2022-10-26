import { Connection } from 'mongoose';
import { campgroundSchema } from '../database/schemas/campground.schema';

export const campgroundProviders = [
  {
    provide: 'CAMPGROUND_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Campground', campgroundSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
