import { Body, Controller, Get, Put, Query } from '@nestjs/common';
import { PreferencesService } from './preferences.service';
import { GlobalPreferences } from './global-preferences';
import { TemplatePreferences } from './template-preferences';

@Controller('preferences')
export class PreferencesController {
  constructor(private readonly preferencesService: PreferencesService) {}

  @Get('/global')
  async getGlobalPreferences(@Query('subscriberId') subscriberId: string) {
    return this.preferencesService.getGlobalPreferences(subscriberId);
  }

  @Put('/update/global')
  async updateGlobalPreferences(
    @Query('subscriberId') subscriberId: string,
    @Body() preference: GlobalPreferences,
  ) {
    return this.preferencesService.updateGlobalPreferences(
      subscriberId,
      preference,
    );
  }

  @Get('/user')
  async getPreferences(@Query('subscriberId') subscriberId: string) {
    return this.preferencesService.getPreferences(subscriberId);
  }

  @Put('/update/user')
  async updatePreferences(
    @Query('subscriberId') subscriberId: string,
    @Query('workflowId') workflowId: string,
    @Body() preference: TemplatePreferences,
  ) {
    return this.preferencesService.updatePreferences(
      subscriberId,
      workflowId,
      preference,
    );
  }
}
