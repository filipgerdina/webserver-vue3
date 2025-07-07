import { GetUsersQueryDTOCoreListResponse, GetUsersQueryDTOCoreListResponseFields } from '../../../../users';
import { DataGridConfig } from 'shared-components'

import { userEntity } from '../../userManagement.entities';
import { USERS_DATA_GRID } from '../../componentIds';
import { VisualizationType } from 'utility';

export const userGridConfig: DataGridConfig<GetUsersQueryDTOCoreListResponse> = {
  id: USERS_DATA_GRID,
  title: "s:usersss",
  entity: userEntity,
  newFormTitle: "s:addUser",
  columns: [
    { 
      field: GetUsersQueryDTOCoreListResponseFields.id,
      visible: false,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: true,
      visibleInEditMode: false
    },
    { 
      field: GetUsersQueryDTOCoreListResponseFields.username,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: true,
      visibleInEditMode: true
    },
    { 
      field: {_caption: "s:password", _field:"password", _type: "string"},
      visible: false,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: true,
      visibleInEditMode: true
    },
    { 
      field: GetUsersQueryDTOCoreListResponseFields.displayName,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    { 
      field: GetUsersQueryDTOCoreListResponseFields.email,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    { 
      field: GetUsersQueryDTOCoreListResponseFields.isSystem,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    { 
      field: GetUsersQueryDTOCoreListResponseFields.isLocked,
      visible: true,
      visualizationType: VisualizationType.Value11,
      addedInEditMode: false,
      visibleInEditMode: false
    },
    // { 
    //   field: GetUsersQueryDTOCoreListResponseFields.domain,
    //   visible: true,
    //   visualizationType: VisualizationType.Value11,
    //   addedInEditMode: false,
    //   visibleInEditMode: false
    // }
  ]
};