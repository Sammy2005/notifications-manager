import { Injectable } from '@nestjs/common';
import { InjectNovu } from '../novu/novu.provider';
import { Novu, PreferenceLevelEnum } from '@novu/node';
import { GlobalPreferences } from './global-preferences';
import { TemplatePreferences } from './template-preferences';

@Injectable()
export class PreferencesService {
  constructor(@InjectNovu() private readonly novu: Novu) {}

  async getGlobalPreferences(subscriberId: string) {
    console.log('subscriberId: ', subscriberId);
    const result =
      await this.novu.subscribers.getGlobalPreference(subscriberId);
    return result.data;
  }

  async updateGlobalPreferences(
    subscriberId: string,
    preference: GlobalPreferences,
  ) {
    const result = await this.novu.subscribers.updateGlobalPreference(
      subscriberId,
      {
        enabled: true,
        preferences: preference.preferences,
      },
    );
    return result.data;
  }

  async getPreferences(subscriberId: string) {
    console.log('subscriberId: ', subscriberId);
    const result = await this.novu.subscribers.getPreference(subscriberId);
    return result.data;
  }

  async updatePreferences(
    subscriberId: string,
    workFlow: string,
    preference: TemplatePreferences,
  ) {
    const result = await this.novu.subscribers.updatePreference(
      subscriberId,
      workFlow,
      {
        enabled: true,
        channel: preference.preferences,
      },
    );
    return result.data;
  }

  async getPreferenceByLevel(subscriberId: string, level: PreferenceLevelEnum) {
    const result = await this.novu.subscribers.getPreferenceByLevel(
      subscriberId,
      level,
    );

    return result.data;
  }
}
