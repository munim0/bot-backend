import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventUpdate } from './event.update';

@Module({
  providers: [EventService, EventUpdate],
})
export class EventModule {}
