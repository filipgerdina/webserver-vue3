import { computed, ref } from 'vue'
import { DataSource } from '../dataSource/dataSource.config'
import { GetApplicationSettingsQueryDTO, GetApplicationSettingsQueryDTOCoreResponse, GetDateTimeFormatsQueryDTO, GetDateTimeFormatsQueryDTOCoreListResponse, GetDecimalSeperatorsQueryDTO, GetDecimalSeperatorsQueryDTOCoreListResponse, GetLanguagesQueryDTO, GetLanguagesQueryDTOCoreListResponse, GetModulesQueryDTO, GetModulesQueryDTOCoreListResponse } from '../utl';
import { translationService } from './translationService';

const appSettings = ref<GetApplicationSettingsQueryDTO>({})
const userSettings = ref<GetApplicationSettingsQueryDTO>({})

export const activeModules = ref<GetModulesQueryDTO[]>([]);

const languages = ref<GetLanguagesQueryDTO[]>([]);
const dateTimeFormats = ref<GetDateTimeFormatsQueryDTO[]>([]);
const decimalSeperators = ref<GetDecimalSeperatorsQueryDTO[]>([]);

export const language = computed(() => userSettings.value?.language?.id ?? appSettings.value?.language?.id ?? 1);
export const dateTimeFormat = computed(() => userSettings.value?.dateFormat?.id ?? appSettings.value?.dateFormat?.id ?? 1);
export const decimalSeperator = computed(() => userSettings.value?.decimalSeperator?.id ?? appSettings.value?.decimalSeperator?.id ?? 1);

const modulesDataSource = new DataSource<{}, {}, null, GetModulesQueryDTOCoreListResponse>({
  name: 'utl/modules',
  method: 'GET',
  isRealDS: true,
  skipAuth: true,
});

const applicationSettingsDataSource = new DataSource<{}, {}, null, GetApplicationSettingsQueryDTOCoreResponse>({
  name: 'utl/applicationSettings',
  method: 'GET',
  isRealDS: true,
  skipAuth: true,
});

const languagesDataSource = new DataSource<{}, {}, null, GetLanguagesQueryDTOCoreListResponse>({
  name: 'utl/languages',
  method: 'GET',
  isRealDS: true,
  skipAuth: true,
});

const dateTimeFormatsDataSource = new DataSource<{}, {}, null, GetDateTimeFormatsQueryDTOCoreListResponse>({
  name: 'utl/dateTimeFormats',
  method: 'GET',
  isRealDS: true,
  skipAuth: true,
});

const decimalSeperatorsDataSource = new DataSource<{}, {}, null, GetDecimalSeperatorsQueryDTOCoreListResponse>({
  name: 'utl/decimalSeperators',
  method: 'GET',
  isRealDS: true,
  skipAuth: true,
});

async function setUserSettings(languageId?: number | null, dateTimeFormatId?: number | null, decimalSeperatorId?: number | null) {
    userSettings.value.language = languages.value.find(l => l.id == languageId);
    userSettings.value.dateFormat = dateTimeFormats.value.find(l => l.id == dateTimeFormatId);
    userSettings.value.decimalSeperator = decimalSeperators.value.find(l => l.id == decimalSeperatorId);

    await translationService.setLanguage(languageId ?? userSettings.value.language?.id ?? appSettings.value.language?.id ?? 1);
}

async function setAppSettings(languageId?: number | null, dateTimeFormatId?: number | null, decimalSeperatorId?: number | null) {
    appSettings.value.language = languages.value.find(l => l.id == languageId);
    appSettings.value.dateFormat = dateTimeFormats.value.find(l => l.id == dateTimeFormatId);
    appSettings.value.decimalSeperator = decimalSeperators.value.find(l => l.id == decimalSeperatorId);

    if(!userSettings.value.language)
      await translationService.setLanguage(languageId ?? appSettings.value.language?.id ?? appSettings.value.language?.id ?? 1);
}
  async function loadApplicationSettings() {
    try {
      await modulesDataSource.retrieveData(async (res) => {
        const configResponse = await fetch('/config.json');
        if(configResponse) {
          const config = await configResponse.json();
          if(res.data) {
            res.data.forEach(module => {
              if(config[module.moduleName ?? ""])
                module.pathToModule = config[module.moduleName ?? ""]
            });
          }
        }
        activeModules.value = res.data ?? [];
      });
      applicationSettingsDataSource.retrieveData((res) => {
        appSettings.value = res.data ?? {};
        translationService.setLanguage(appSettings.value.language?.id ?? 1);
      });
      languagesDataSource.retrieveData((res) => {
        languages.value = res.data ?? [];
      });
      dateTimeFormatsDataSource.retrieveData((res) => {
        dateTimeFormats.value = res.data ?? [];
      });
      decimalSeperatorsDataSource.retrieveData((res) => {
        decimalSeperators.value = res.data ?? [];
      });
    } catch (error) {
      console.error('Failed to load application settings:', error);
      appSettings.value = {};
      languages.value = [];
      dateTimeFormats.value = [];
      decimalSeperators.value = [];
    }
  }
loadApplicationSettings();
export const settingsService = {
    appSettings,
    languages,
    dateTimeFormats,
    decimalSeperators,
    setUserSettings,
    setAppSettings,
    userSettings,
    activeModules
}
