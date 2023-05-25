import { Injectable } from '@nestjs/common';

@Injectable()
export class EventService {
  webApp(): any {
    return {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'Events',
              web_app: {
                url: 'https://bot-frontend-virid.vercel.app/event-list',
              },
            },
          ],
        ],
      },
    };
  }
}
