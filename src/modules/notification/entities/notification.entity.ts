import { Column, Entity } from 'typeorm';
import { RootAbstractEntity } from '../../../database/entities/root-abstract.entity';

@Entity('notifications')
export class NotificationEntity extends RootAbstractEntity {
  @Column('jsonb', { nullable: false, default: {} })
  event_info: string;

  @Column()
  finish_date: Date;

  @Column()
  receiver: string;
}
