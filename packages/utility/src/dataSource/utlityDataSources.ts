import { GetDataSourceQueryDTOCoreListResponse, GetPagesQueryDTOCoreListResponse } from "../utl";
import { DataSource } from "./dataSource.config";

export const pagesDataSource = new DataSource<{}, {}, null, GetPagesQueryDTOCoreListResponse>({
    name: "pages",
    method: "GET",
    translatableResponseFields: ["data.name"],
    cacheEnabled: true
});

export const dataSourcesDataSource = new DataSource<{}, {}, null, GetDataSourceQueryDTOCoreListResponse>({
    name: "dataSources",
    method: "GET",
    translatableResponseFields: ["data.name"],
    cacheEnabled: true
});
