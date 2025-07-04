import { GetRolesOfUserQueryDTOCoreListResponse, GetRolesOfUserQueryDTOCoreListResponseFields } from '../../../../users';
import { DataGridConfig } from 'shared-components'

import { userEntity } from '../../userManagement.entities';
import { USER_ROLES_DATA_GRID } from '../../componentIds';
import { loadRemoteModule, settingsService, VisualizationType } from 'utility';

let module = settingsService.activeModules.value.find(m => m.moduleName ==  "rolesManagement");
if (!module) {
  throw new Error("Module is undefined or null");
}
let selectionFromDS = await loadRemoteModule(module.pathToModule!, module.moduleName!, "./rolesSelectionFromDataSource");
export const rolesByUserGridConfig: DataGridConfig<GetRolesOfUserQueryDTOCoreListResponse> = {
  id: USER_ROLES_DATA_GRID,
  title: "s:userRoles",
  newFormTitle: "s:assignRoleToUser",
  entity: userEntity.subEntities.userRoles,
  columns: [
    {
      field: GetRolesOfUserQueryDTOCoreListResponseFields.id,
      visible: false,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: true,
      visibleInEditMode: false
    },
    {
      field: { _field: "roleId", _caption: "s:role", _type: "number"},
      visible: false,
      visualizationType: VisualizationType.Value3,
      addedInEditMode: true,
      visibleInEditMode: true,
      selectionFromDataSource: selectionFromDS.selectionFromDataSource
    },
    {
      field: GetRolesOfUserQueryDTOCoreListResponseFields.name,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    {
      field: GetRolesOfUserQueryDTOCoreListResponseFields.defaultPage,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    }
  ]
};