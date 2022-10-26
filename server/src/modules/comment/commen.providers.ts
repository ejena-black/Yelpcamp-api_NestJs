import { Connection } from 'mongoose';
import { commentSchema } from '../database/schemas/comment.schema';

export const commentProviders = [
  {
    provide: 'COMMENT_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Comment', commentSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
