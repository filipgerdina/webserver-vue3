import { NavigationGroupPermissionsEntity } from '../../entities/navigationGroupPermissions.entity';
import { PagePermissionsEntity } from '../../entities/pagePermissions.entity';
import { RolesEntity } from '../../entities/role.entity'
import { RoleNavigationGroupsEntity } from '../../entities/roleNavigationGroups.entity';
import { RolePagesEntity } from '../../entities/rolePages.entity';
import { RolesRolesNavigationGroupsListQuery, RolesPagePermissionsListQuery, RolesRolesPagesListQuery } from '../../roles';
import { useRolesManagementStore } from './rolesManagement.store';

export const rolesEntity = RolesEntity;
export const pagePermissionsEntity = PagePermissionsEntity;
export const navigationGroupPermissionsEntity = NavigationGroupPermissionsEntity;
export const rolePagesEntity = RolePagesEntity;
export const rolesNavigationGroupsEntity = RoleNavigationGroupsEntity;

const pageStore = useRolesManagementStore();

pagePermissionsEntity.dataSource.getQueryParams = (): RolesPagePermissionsListQuery => (
    {
      RoleId: pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? undefined,
    }
); 

navigationGroupPermissionsEntity.dataSource.getQueryParams = (): RolesRolesNavigationGroupsListQuery => (
    {
      RoleId: pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? undefined,
    }
); 

rolePagesEntity.dataSource.getQueryParams = (): RolesRolesPagesListQuery => (
  {
    RoleId: pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? undefined,
  }
)

rolesNavigationGroupsEntity.dataSource.getQueryParams = (): RolesRolesNavigationGroupsListQuery => (
  {
    RoleId: pageStore.rolesDataGridStore.GetDataGridView()?.selectedRowKeys?.[0] ?? undefined,
  }
)