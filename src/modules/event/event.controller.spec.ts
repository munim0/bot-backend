import { Test, TestingModule } from '@nestjs/testing';
import { EventUpdate } from './event.update';
import { EventService } from './event.service';

describe('EventController', () => {
  let controller: EventUpdate;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventUpdate],
      providers: [EventService],
    }).compile();

    controller = module.get<EventUpdate>(EventUpdate);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
