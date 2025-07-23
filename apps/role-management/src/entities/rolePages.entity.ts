import { DataSource } from 'utility'
import { QueryEntity, Entity } from 'utility'
import { GetPagesOfRoleQueryDTOCoreListResponse, GetPagesOfRoleQueryDTOCoreListResponseFields, RolesRolesPagesListQuery} from '../../roles'

import { module } from '../module'

export const RolePagesEntity: QueryEntity<
RolesRolesPagesListQuery,
GetPagesOfRoleQueryDTOCoreListResponse
> = new Entity({
    dataSource: new DataSource({
        name: 'rolePages',
        method: 'GET',
        translatableResponseFields: [GetPagesOfRoleQueryDTOCoreListResponseFields.name]
    }),
    entityCode: 'ROLE_PAGES',
    module: module,
})

export default { RolePagesEntity };