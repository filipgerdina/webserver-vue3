import { DataSource, QueryEntity, Entity } from 'utility';
import { GetRolesOfUserQueryDTOCoreListResponse, GetUsersQueryDTOCoreListResponse, UsersUserRolesListQuery } from '../users'
import { module } from '../module'

const userRoles = new Entity({
    entityCode: "USER_ROLES",
    module: module,
    dataSource: new DataSource({
        name: 'userRoles',
        method: 'GET',
        translatableResponseFields: ["data.defaultPage"]
    }), 
});

export const UserEntity: QueryEntity<
{},
GetUsersQueryDTOCoreListResponse,
{},
{
    userRoles:
    QueryEntity<
        UsersUserRolesListQuery,
        GetRolesOfUserQueryDTOCoreListResponse
    >
}
> = 
new Entity({
    dataSource: new DataSource({
        name: 'users',
        method: 'GET',
    }),
    entityCode: 'USERS',
    module: module,
    subEntities: {
        userRoles: userRoles
    }
});

export default { UserEntity };