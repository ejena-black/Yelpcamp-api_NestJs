import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { commentProviders } from './commen.providers';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CommentController],
  providers: [CommentService, ...commentProviders],
})
export class CommentModule {}
