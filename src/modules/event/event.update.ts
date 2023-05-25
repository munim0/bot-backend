import { Injectable } from '@nestjs/common';
import { EventService } from './event.service';
import { Ctx, InjectBot, On, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

@Update()
@Injectable()
export class EventUpdate {
  constructor(
    @InjectBot() private bot: Telegraf<Context>,
    private readonly eventService: EventService,
  ) {}

  @Start()
  async start(@Ctx() ctx: Context) {
    console.log(ctx);
    await ctx.reply('Looking for events tap here', this.eventService.webApp());
  }

  @On('message')
  async echo(@Ctx() ctx: Context) {
    console.log(ctx.message.from);
    await ctx.reply('you said');
  }
}
