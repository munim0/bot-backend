import { ApiProperty } from '@nestjs/swagger';
import { CreateEventRequestDto } from '../../event/dto/create-event.request.dto';

export class CreateNotificationRequestDto {
  @ApiProperty({
    example: '',
  })
  receiver: string;

  @ApiProperty({
    example: Date.now(),
  })
  finish_date: Date;

  @ApiProperty({
    example: CreateEventRequestDto,
  })
  event_info: CreateEventRequestDto;
}
