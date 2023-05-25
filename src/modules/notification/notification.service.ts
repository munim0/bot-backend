import { Injectable, Logger } from '@nestjs/common';
import { NotificationEntity } from './entities/notification.entity';
import { CreateNotificationRequestDto } from './dto/create-notification.request.dto';
import { Cron } from '@nestjs/schedule';
import { InjectBot } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { In, MoreThan } from 'typeorm';

@Injectable()
export class NotificationService {
  constructor(@InjectBot() private bot: Telegraf<Context>) {}

  private readonly logger = new Logger(NotificationService.name);
  async create(
    addNotificationDto: CreateNotificationRequestDto,
  ): Promise<NotificationEntity> {
    const notification = new NotificationEntity();
    notification.receiver = addNotificationDto.receiver;
    notification.finish_date = addNotificationDto.event_info.date;
    notification.event_info = JSON.stringify(addNotificationDto.event_info);
    return await notification.save();
  }

  @Cron('* 2 * * *')
  async handleCron() {
    const notifications = await NotificationEntity.find({
      where: {
        finish_date: MoreThan(new Date()),
      },
    });
    for (const notification of notifications) {
      const event_info = JSON.parse(notification.event_info);
      await this.bot.telegram.sendMessage(
        notification.receiver,
        `This is a notification regarding ${event_info.name}. Date ${event_info.date}. Place ${event_info.place}.`,
      );
    }
  }
}
