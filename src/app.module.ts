import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './notifications/notifications.module';
import { SubscribersModule } from './subscribers/subscribers.module';
import { TopicsModule } from './topics/topics.module';
import { PreferencesModule } from './preferences/preferences.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    NotificationsModule,
    SubscribersModule,
    TopicsModule,
    PreferencesModule,
  ],
})
export class AppModule {}
