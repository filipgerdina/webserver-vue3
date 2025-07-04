import { DataSource } from "utility";
import { GetNavigationGroupsQueryDTOCoreListResponse, GetPagesQueryDTOCoreListResponse } from "./utl";

export const pagesDataSource = new DataSource<{}, {}, null, GetPagesQueryDTOCoreListResponse>({
    name: "pages",
    method: "GET"
});

export const navigationGroupsDataSource = new DataSource<{}, {}, null, GetNavigationGroupsQueryDTOCoreListResponse>({
    name: "navigationGroups",
    method: "GET"
});