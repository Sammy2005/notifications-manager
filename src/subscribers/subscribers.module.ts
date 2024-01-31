import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NovuProvider } from '../novu/novu.provider';
import { SubscribersService } from './subscribers.service';
import { SubscribersController } from './subscribers.controller';

@Module({
  imports: [ConfigModule],
  providers: [NovuProvider, SubscribersService],
  controllers: [SubscribersController],
})
export class SubscribersModule {}
