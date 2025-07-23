import type { DxDropDownBoxTypes } from '@metronik/devextreme';
import { DataSource, translationService, type ActionFormControl } from 'utility';

export function getDropDownOptions(
  control: ActionFormControl,
  formData: Record<string, any>
): DxDropDownBoxTypes.Properties {

  return {
    dataSource: control.properties.values ?? [],
    displayExpr: control.properties.displayDataField,
    valueExpr: control.properties.valueDataField,
    disabled: control.properties?.disabled,
    placeholder: translationService.translate('s:search') + '...',
    showClearButton: !control.required,
    onValueChanged: (e: any) => {
      if (typeof control.dataField === 'string') {
        formData[control.dataField] = e.value;
      }
    },
  };
}

