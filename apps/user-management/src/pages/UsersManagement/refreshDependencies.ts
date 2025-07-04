// refreshDependencies.ts
import { USERS_DATA_GRID, USER_ROLES_DATA_GRID } from './componentIds';

const refreshDependencies: Record<string, string[]> = {
  [USERS_DATA_GRID]: [USER_ROLES_DATA_GRID],
  [USER_ROLES_DATA_GRID]: [],
};

export default refreshDependencies;
