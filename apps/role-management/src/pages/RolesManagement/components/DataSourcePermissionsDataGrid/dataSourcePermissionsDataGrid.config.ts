import { GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponse, GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields } from '../../../../roles';
import { DataGridConfig } from 'shared-components'

import { NAVIGATION_GROUP_PERMISSIONS_DATA_GRID } from '../../componentIds';
import { VisualizationType } from 'utility';
import { navigationGroupPermissionsEntity, rolesNavigationGroupsEntity } from "../../rolesManagement.entities";

export const navigationGroupPermissionsDataGrid: DataGridConfig<GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponse> = {
  id: NAVIGATION_GROUP_PERMISSIONS_DATA_GRID,
  title: "s:navigationGroupPermissions",
  newFormTitle: "s:addNavigationGroupPermission",
  entity: navigationGroupPermissionsEntity,
  columns: [
    { 
      field: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.id, 
      visible: false,
      addedInEditMode: true,
      visibleInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    { 
      field: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.name,
      visible: true,
      addedInEditMode: false,
      visualizationType: VisualizationType.Value11
    },
    { 
      field: { _field: "navigationGroupId", _caption: "s:navigationGroup", _type: "number"},
      visible: false,
      addedInEditMode: true,
      visualizationType: VisualizationType.Value3,
      selectionFromDataSource: {
        dataSource: rolesNavigationGroupsEntity.dataSource,
        displayDataMemeber: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.name,
        idDataMember: GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.id
      }
    },
  ]
};