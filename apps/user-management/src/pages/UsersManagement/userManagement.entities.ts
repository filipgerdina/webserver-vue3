import { UserEntity } from "../../entities/user.entity";
import { UserRolesEntity } from "../../entities/userRoles.entity";
import { UsersUserRolesListQuery } from "../../users";
import { useUserManagementStore } from "./userManagement.store";

const pageStore = useUserManagementStore();
const userEntity = UserEntity;
const userRolesEntity = UserRolesEntity;

userRolesEntity.dataSource.getQueryParams = (): UsersUserRolesListQuery => (
    {
      Id: pageStore.usersDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? undefined,
    }
); 

export {
  userEntity,
  userRolesEntity,
}