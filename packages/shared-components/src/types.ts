import type { DataSource, Entity, View, VisualizationType, Field } from 'utility';

export interface ColumnConfig {
  field: Field,
  visible: boolean
  visibleInEditMode?: boolean
  addedInEditMode?: boolean
  visualizationType?: VisualizationType
  selectionFromDataSource?: SelectionFromDataSource
}

export interface SelectionFromDataSource {
  dataSource: DataSource<any, any, any, any>
  displayDataMemeber: Field;
  idDataMember: Field
}

export interface DataGridConfig<TResponse, TViews extends Record<string, View<any, any, any, any>> = Record<string, View<any, any, any, any>>> {
  entity: Entity<any, any, any, TResponse, TViews>
  title: string,
  viewName?: string
  columns: ColumnConfig[]
  id: string,
  newFormTitle?: string,
  selectFirstByDefault?: boolean,
}
