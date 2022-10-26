import { Document } from 'mongoose';

export interface Campground extends Document {
  readonly title: string;
  readonly description: string;
}
