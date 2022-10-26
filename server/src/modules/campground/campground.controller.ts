// eslint-disable-next-line prettier/prettier
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CampgroundService } from './campground.service';
import { CreateCampgroundDto } from './dto/CreateCampground.dto';

@Controller('api/campground')
export class CampgroundController {
  constructor(private campgroundservice: CampgroundService) {}

  @Get('/')
  getAllCampgrounds() {
    return this.campgroundservice.findAll();
  }

  @Post('/')
  @UsePipes(ValidationPipe)
  createCampground(@Body() data: CreateCampgroundDto) {
    return this.campgroundservice.create(data);
  }
}
