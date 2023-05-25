import { Body, Controller, Get, Post } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationRequestDto } from './dto/create-notification.request.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get('test')
  findOne() {
    console.log('We good');
    return 'Hello world';
  }
  @Post('add')
  create(@Body() addNotificationDto: CreateNotificationRequestDto) {
    console.log(addNotificationDto);
    return this.notificationService.create(addNotificationDto);
  }
}
