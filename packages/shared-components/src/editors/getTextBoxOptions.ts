import type { DxTextBoxTypes } from '@metronik/devextreme';
import type { ActionFormControl } from 'utility';

export function getTextBoxOptions(
  control: ActionFormControl,
  formData: Record<string, any>
): DxTextBoxTypes.Properties {
  return {
    mode: control.dataField?.toLocaleLowerCase().includes('password') ? 'password' : 'text',
    disabled: control.properties?.readOnly,
    inputAttr: { 
      'autocomplete': "new-password",
      'name': 'no-suggest-' + control.dataField
    },
    // value: typeof control.dataField === 'string' ? formData[control.dataField] ?? undefined : undefined,
    onValueChanged: (e: any) => {
      if (typeof control.dataField === 'string') {
        formData[control.dataField] = e.value?.length ? e.value : null;
      }
    }
  };
}
