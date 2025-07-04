import { computed, isRef, Ref, ref, unref, watch } from 'vue'
import { DataSource, QueryDataSource } from '../dataSource/dataSource.config'
import { authService } from './authService'

type Translation = {
  key: string
  languageId: number
  value: string
}

const translations = ref<Translation[]>([])

const translationDataSource = ref<QueryDataSource<{ langId: number }, Translation[]> | null>(null);

const currentLangId = ref<number | null>(null)

async function loadTranslations(langId: number): Promise<void> {
  try {
    if(!translationDataSource.value) {
       translationDataSource.value = new DataSource<{}, { langId: number }, null, Translation[]>({
          name: 'utl/translations',
          method: 'GET',
          isRealDS: true,
          skipAuth: true,
        })
    }

    translationDataSource.value.getQueryParams = () => ({ langId: langId })
    const response = await translationDataSource.value.retrieveData();
    ((response as any).data as { languageId: number | null }[]).forEach((t) => {
      t.languageId = langId;
    });
    translations.value.splice(0, translations.value.length, ...((response as any).data as Translation[]));
    currentLangId.value = langId
  } catch (error) {
    console.error('Failed to load translations:', error)
    translations.value = []
  }
}

async function setLanguage(langId: number): Promise<void> {
  if (currentLangId.value !== langId) {
    await loadTranslations(langId).catch(error => console.error('Error loading translations:', error))
  }
}

function translate(key: string, returnKeyIfNull = true): string {
  const match = translations.value.find(t => t.key === key)
  return match?.value || (returnKeyIfNull ? key : '')
}

// function translateRef(key: string | Ref<string>, returnKeyIfNull = true) {
//   const keyRef = isRef(key) ? key : ref(key)

//   return computed(() => {
//     const langId = currentLangId.value
//     const k = unref(keyRef)
//     const match = translations.value.find(t => t.key === k && t.languageId === langId)
//     return match?.value || (returnKeyIfNull ? k : '')
//   })
// }



export const translationService = {
  loadTranslations,
  translate,
  translations,
  setLanguage,
}
