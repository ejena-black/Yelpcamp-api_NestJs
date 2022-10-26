import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { CommentModule } from './modules/comment/comment.module';
import { CampgroundModule } from './modules/campground/campground.module';
import { databaseProviders } from './modules/database/database.providers';

@Module({
  imports: [CampgroundModule, CommentModule, UserModule],
  controllers: [AppController],
  providers: [AppService, ...databaseProviders],
})
export class AppModule {}
