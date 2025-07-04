import { DataSource } from 'utility'
import { QueryEntity, Entity } from 'utility'
import { GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponse, RolesRolesNavigationGroupsListQuery} from '../roles'

import { module } from '../module'

export const NavigationGroupPermissionsEntity: QueryEntity<
RolesRolesNavigationGroupsListQuery,
GetNavigationGroupPermissionsOfRoleQueryDTOCoreListResponse
> = new Entity({
    dataSource: new DataSource({
        name: 'navigationGroupPermissions',
        method: 'GET',
        translatableResponseFields: ["data.name"]
    }),
    entityCode: 'ROLE_NAVIGATION_GROUP_PERMISSIONS',
    module: module,
})

export default { NavigationGroupPermissionsEntity };