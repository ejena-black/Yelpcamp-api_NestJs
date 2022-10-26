import { IsNotEmpty, Length } from 'class-validator';

export class CreateCampgroundDto {
  @IsNotEmpty({ message: 'There should be a name for the campground' })
  title: string;

  @IsNotEmpty({ message: 'Please describe this campground' })
  @Length(30, 255)
  description: string;
}
