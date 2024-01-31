import { Module } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
import { ConfigModule } from '@nestjs/config';
import { NovuProvider } from '../novu/novu.provider';

@Module({
  imports: [ConfigModule],
  providers: [NotificationsService, NovuProvider],
  controllers: [NotificationsController],
})
export class NotificationsModule {}
