import { DataSource } from 'utility'
import { QueryEntity, Entity } from 'utility'
import { GetPagePermissionsOfRoleQueryDTOCoreListResponse, GetPagePermissionsOfRoleQueryDTOCoreListResponseFields, RolesPagePermissionsListQuery} from '../../roles'

import { module } from '../module'

export const PagePermissionsEntity: QueryEntity<
RolesPagePermissionsListQuery,
GetPagePermissionsOfRoleQueryDTOCoreListResponse
> = new Entity({
    dataSource: new DataSource({
        name: 'pagePermissions',
        method: 'GET',
        translatableResponseFields: [GetPagePermissionsOfRoleQueryDTOCoreListResponseFields.name]
    }),
    entityCode: 'ROLE_PAGE_PERMISSIONS',
    module: module,
})

export default { PagePermissionsEntity };