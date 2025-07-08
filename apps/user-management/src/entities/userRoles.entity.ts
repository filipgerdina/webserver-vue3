import { DataSource, QueryEntity, Entity } from 'utility';
import { GetRolesOfUserQueryDTOCoreListResponse, UsersUserRolesListQuery } from '../users'
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
        translatableResponseFields: ["data.defaultPage"]
    }), 
});

export default { UserRolesEntity };