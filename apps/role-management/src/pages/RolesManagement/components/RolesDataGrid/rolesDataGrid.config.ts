import { GetRolesQueryDTOCoreListResponse, GetRolesQueryDTOCoreListResponseFields } from '../../../../../roles';
import { DataGridConfig } from 'shared-components'

import { rolesEntity } from '../../rolesManagement.entities';
import { ROLES_DATA_GRID } from '../../componentIds';
import { GetPagesQueryDTOCoreListResponseFields, pagesDataSource, VisualizationType } from 'utility';

export const rolesGridConfig: DataGridConfig<GetRolesQueryDTOCoreListResponse> = {
  id: ROLES_DATA_GRID,
  title: "s:roles",
  newFormTitle: "s:newRole",
  entity: rolesEntity,
  columns: [
    { 
      field: GetRolesQueryDTOCoreListResponseFields.id, 
      visible: false,
      addedInEditMode: true,
      visibleInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    { 
      field: GetRolesQueryDTOCoreListResponseFields.name,
      visible: true,
      addedInEditMode: true,
      visualizationType: VisualizationType.Value11
    },
    { 
      field: GetRolesQueryDTOCoreListResponseFields.defaultPage,
      visible: true,
      addedInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    { 
      field: { _field: "defaultPageId", _caption: "s:defaultPage", _type: "number"},
      visible: false,
      addedInEditMode: true,
      visualizationType: VisualizationType.Value3,
      selectionFromDataSource: {
        dataSource: pagesDataSource,
        displayDataMemeber: GetPagesQueryDTOCoreListResponseFields.name,
        idDataMember: GetPagesQueryDTOCoreListResponseFields.id
      }
    },
  ]
};