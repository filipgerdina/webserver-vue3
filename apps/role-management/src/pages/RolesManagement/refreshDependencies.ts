// refreshDependencies.ts
import { NAVIGATION_GROUP_PERMISSIONS_DATA_GRID, PAGE_PERMISSIONS_DATA_GRID, ROLES_DATA_GRID } from './componentIds'

const refreshDependencies: Record<string, string[]> = {
  [ROLES_DATA_GRID]: [PAGE_PERMISSIONS_DATA_GRID, NAVIGATION_GROUP_PERMISSIONS_DATA_GRID],
};

export default refreshDependencies;
