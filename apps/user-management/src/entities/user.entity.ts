import { DataSource, QueryEntity, Entity } from 'utility';
import { GetRolesOfUserQueryDTOCoreListResponse, GetUsersQueryDTOCoreListResponse, UsersUserRolesListQuery } from '../users'
import { module } from '../module'

export const UserEntity: QueryEntity<
{},
GetUsersQueryDTOCoreListResponse,
{}
> = 
new Entity({
    dataSource: new DataSource({
        name: 'users',
        method: 'GET',
    }),
    entityCode: 'USERS',
    module: module,
});

export default { UserEntity };