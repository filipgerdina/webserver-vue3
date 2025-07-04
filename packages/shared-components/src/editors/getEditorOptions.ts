import { VisualizationType } from 'utility';
import type { ActionFormControl } from 'utility';

import { getTextBoxOptions } from './getTextBoxOptions';
import { getDropDownOptions } from './getDropDownOptions';
import { getCheckBoxOptions } from './getCheckBoxOptions';

export function getEditorOptions(
  control: ActionFormControl,
  formData: Record<string, any>
): any {
  switch (control.visualizationType) {
    case VisualizationType.Value3:
      return getDropDownOptions(control, formData);
    case VisualizationType.Value7:
      return getCheckBoxOptions(control, formData);
    default:
      return getTextBoxOptions(control, formData);
  }
}
