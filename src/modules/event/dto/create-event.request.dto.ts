import { ApiProperty } from '@nestjs/swagger';

export class CreateEventRequestDto {
  @ApiProperty({
    example: 'Environmental Awareness Workshop',
  })
  name: string;

  @ApiProperty({
    example:
      'Join us for an interactive workshop focused on raising environmental awareness, exploring sustainable practices, and discussing ways to make a positive impact on our planet.',
  })
  description: string;

  @ApiProperty({
    example: '2023-07-25',
  })
  date: Date;

  @ApiProperty({
    example: 'Community Center',
  })
  place: string;

  @ApiProperty({
    example: 'assets/images/5.png',
  })
  photoURL: string;
}
