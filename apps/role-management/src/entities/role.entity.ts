import { DataSource } from 'utility'
import { QueryEntity, Entity } from 'utility'
import { GetRolesQueryDTOCoreListResponse} from '../roles'

import { module } from '../module'

export const RolesEntity: QueryEntity<
{},
GetRolesQueryDTOCoreListResponse
> = new Entity({
    dataSource: new DataSource({
        name: 'roles',
        method: 'GET',
        translatableResponseFields: ["data.defaultPage"]
    }),
    entityCode: 'ROLES',
    module: module,
})

export default { RolesEntity };