import { ref, reactive, watch, type Ref } from 'vue';
import type { Module, RecordParams, ActionFormControl } from 'utility';

export function useExtraParamsForm(
  visible: Ref<boolean>,
  actionCode: Ref<string>,
  module: Ref<Module>,
  recordParams: Ref<RecordParams[]>,
  additionalExtraParamsRequestParams?: () => Map<string, any>
) {
  const formData = reactive<Record<string, any>>({});
  const controls = ref<ActionFormControl[]>([]);
  const items = ref<any[]>([]);
  const title = ref<string | undefined>(undefined);

  watch(
    [visible, actionCode],
    async ([isVisible, code]) => {
      if (!isVisible || !code) return;

      controls.value = [];
      Object.keys(formData).forEach((k) => delete formData[k]);

      try {
        module.value.moduleActionFormsDS.getQueryParams = () => {
          let data: any = {data:  { formCode: String(code) }}
          if(recordParams.value)
            data.data.recordParams = recordParams.value;
          if(additionalExtraParamsRequestParams) {
            let params = additionalExtraParamsRequestParams();
            params.forEach((value, key) => {
              data.data[key] = value;
            })
          }
          return data;
        };

        const res = await module.value.moduleActionFormsDS.retrieveData();
        title.value = res?.data?.title ?? undefined;
        controls.value = res?.data?.controls ?? [];

        // initialize formData
        controls.value.forEach((c) => {
          if (c.dataField) {
            formData[c.dataField] = res?.data?.defaultValues?.[c.dataField] ?? null;
          }
        });

        console.log(formData)
        items.value = []; // you could set up layout-based items here if needed
      } catch (err) {
        console.error('Failed to load form controls:', err);
        controls.value = [];
      }
    },
    { immediate: true }
  );

  return { formData, controls, items, title };
}
