import { UserEntity } from "../../entities/user.entity";
import { UsersUserRolesListQuery } from "../../users";
import { useUserManagementStore } from "./userManagement.store";

const pageStore = useUserManagementStore();
const userEntity = UserEntity;

userEntity.subEntities.userRoles.dataSource.getQueryParams = (): UsersUserRolesListQuery => (
    {
      Id: pageStore.usersDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? undefined,
    }
); 

export {
    userEntity,
}