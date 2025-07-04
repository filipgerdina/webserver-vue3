import type { DxCheckBoxTypes } from '@metronik/devextreme';
import type { ActionFormControl } from 'utility';

export function getCheckBoxOptions(
  control: ActionFormControl,
  formData: Record<string, any>
): DxCheckBoxTypes.Properties {
  return {
    disabled: control.properties?.readOnly,
    onValueChanged: (e: any) => {
      if (typeof control.dataField === 'string') {
        formData[control.dataField] = e.value;
      }
    },
  };
}
