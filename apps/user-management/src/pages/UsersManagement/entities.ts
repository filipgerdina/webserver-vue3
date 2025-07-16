import { UserEntity } from "../../entities/user.entity";
import { UserRolesEntity } from "../../entities/userRoles.entity";
import { UsersUserRolesListQuery } from "../../../users";
import { useUserManagementStore } from "./store";
import cloneDeep from 'lodash/cloneDeep';

const pageStore = useUserManagementStore();
const userEntity = cloneDeep(UserEntity);
const userRolesEntity = cloneDeep(UserRolesEntity);

userRolesEntity.dataSource.getQueryParams = (): UsersUserRolesListQuery => (
    {
      Id: pageStore.usersDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? undefined,
    }
); 

export {
  userEntity,
  userRolesEntity,
}