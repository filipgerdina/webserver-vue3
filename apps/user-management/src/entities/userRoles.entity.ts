import { DataSource, QueryEntity, Entity } from 'utility';
import { GetRolesOfUserQueryDTOCoreListResponse, GetRolesOfUserQueryDTOCoreListResponseFields, UsersUserRolesListQuery } from '../../users'
import { module } from '../module'

export const UserRolesEntity: QueryEntity<
UsersUserRolesListQuery,
GetRolesOfUserQueryDTOCoreListResponse
> = 
new Entity({
    entityCode: "USER_ROLES",
    module: module,
    dataSource: new DataSource({
        name: 'userRoles',
        method: 'GET',
        translatableResponseFields: [GetRolesOfUserQueryDTOCoreListResponseFields.defaultPage]
    }), 
});

export default { UserRolesEntity };