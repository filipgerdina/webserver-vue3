import { DataSource } from 'utility'
import { QueryEntity, Entity } from 'utility'
import { GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponse, GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields, RolesRolesNavigationGroupsListQuery} from '../../roles'

import { module } from '../module'

export const RoleNavigationGroupsEntity: QueryEntity<
RolesRolesNavigationGroupsListQuery,
GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponse
> = new Entity({
    dataSource: new DataSource({
        name: 'roleNavigationGroups',
        method: 'GET',
        translatableResponseFields: [GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponseFields.name]
    }),
    entityCode: 'ROLE_NAVIGATION_GROUPS',
    module: module,
})

export default { RoleNavigationGroupsEntity };