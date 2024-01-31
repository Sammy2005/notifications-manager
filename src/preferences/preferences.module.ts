import { Module } from '@nestjs/common';
import { PreferencesController } from './preferences.controller';
import { PreferencesService } from './preferences.service';
import { NovuProvider } from '../novu/novu.provider';

@Module({
  controllers: [PreferencesController],
  providers: [PreferencesService, NovuProvider],
})
export class PreferencesModule {}
