import { SelectionFromDataSource } from "shared-components"
import { rolesEntity } from "../pages/RolesManagement/rolesManagement.entities"
import { GetRolesQueryDTOCoreListResponseFields } from "../roles"
export const selectionFromDataSource: SelectionFromDataSource = {
    dataSource: rolesEntity.dataSource,
    displayDataMemeber: GetRolesQueryDTOCoreListResponseFields.name,
    idDataMember: GetRolesQueryDTOCoreListResponseFields.id
}

export default { selectionFromDataSource };