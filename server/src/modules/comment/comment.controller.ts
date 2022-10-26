import { Controller, Get } from '@nestjs/common';

@Controller('api/comment')
export class CommentController {
  @Get('/')
  getComment() {
    return 'comment route';
  }
}
