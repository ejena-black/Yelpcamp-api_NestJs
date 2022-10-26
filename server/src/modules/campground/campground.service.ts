import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Campground } from '../../interfaces/campground.interface';

@Injectable()
export class CampgroundService {
  constructor(
    @Inject('CAMPGROUND_MODEL')
    private campgroundModel: Model<Campground>,
  ) {}

  async findAll(): Promise<Campground[]> {
    const campgrounds = await this.campgroundModel.find({});
    return campgrounds;
  }

  async create(body): Promise<Campground> {
    const campground = await this.campgroundModel.create(body);
    return campground;
  }
}
