import { DataSource } from 'utility'
import { QueryEntity, Entity } from 'utility'
import { GetPagePermissionsOfRoleQueryDTOCoreListResponse, RolesPagePermissionsListQuery} from '../roles'

import { module } from '../module'

export const PagePermissionsEntity: QueryEntity<
RolesPagePermissionsListQuery,
GetPagePermissionsOfRoleQueryDTOCoreListResponse
> = new Entity({
    dataSource: new DataSource({
        name: 'pagePermissions',
        method: 'GET',
        translatableResponseFields: ["data.name"]
    }),
    entityCode: 'ROLE_PAGE_PERMISSIONS',
    module: module,
})

export default { PagePermissionsEntity };