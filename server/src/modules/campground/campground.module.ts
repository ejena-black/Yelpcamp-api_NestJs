import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CampgroundController } from './campground.controller';
import { campgroundProviders } from './campground.providers';
import { CampgroundService } from './campground.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CampgroundController],
  providers: [CampgroundService, ...campgroundProviders],
})
export class CampgroundModule {}
