import { GetPagePermissionsOfRoleQueryDTOCoreListResponse, GetPagesOfRoleQueryDTOCoreListResponseFields } from '../../../../../roles';
import { DataGridConfig } from 'shared-components'

import { PAGE_PERMISSIONS_DATA_GRID } from '../../componentIds';
import { VisualizationType } from 'utility';
import { pagePermissionsEntity, rolePagesEntity } from "../../rolesManagement.entities";

export const pagePermissionsDataGrid: DataGridConfig<GetPagePermissionsOfRoleQueryDTOCoreListResponse> = {
  id: PAGE_PERMISSIONS_DATA_GRID,
  title: "s:pagePermissions",
  newFormTitle: "s:addPagePermission",
  entity: pagePermissionsEntity,
  columns: [
    { 
      field: GetPagesOfRoleQueryDTOCoreListResponseFields.id, 
      visible: false,
      addedInEditMode: true,
      visibleInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    { 
      field: GetPagesOfRoleQueryDTOCoreListResponseFields.name,
      visible: true,
      addedInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    { 
      field: { _field: "pageId", _caption: "s:page", _type: "number"},
      visible: false,
      addedInEditMode: true,
      visualizationType: VisualizationType.Value3,
      selectionFromDataSource: {
        dataSource: rolePagesEntity.dataSource,
        displayDataMemeber: GetPagesOfRoleQueryDTOCoreListResponseFields.name,
        idDataMember: GetPagesOfRoleQueryDTOCoreListResponseFields.id
      }
    },
  ]
};