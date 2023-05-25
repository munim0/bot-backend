import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramAsyncConfig } from './config/telegram-async.config';
import { ConfigModule } from '@nestjs/config';
import { EventModule } from './modules/event/event.module';
import { NotificationModule } from './modules/notification/notification.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmAsyncConfig } from './config/orm-async.config';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(OrmAsyncConfig),
    TelegrafModule.forRootAsync(TelegramAsyncConfig),
    ScheduleModule.forRoot(),
    EventModule,
    NotificationModule,
  ],
})
export class AppModule {}
