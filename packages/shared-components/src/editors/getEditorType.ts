import { VisualizationType } from 'utility';
import { FormItemComponent } from '@metronik/devextreme'

export function getEditorType(visualizationType: VisualizationType | undefined): FormItemComponent {
  switch (visualizationType) {
    case VisualizationType.Value3:
      return 'dxSelectBox';
    case VisualizationType.Value7:
      return 'dxCheckBox';
    default:
      return 'dxTextBox';
  }
}
