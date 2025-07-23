import { GetDataSourceQueryDTOCoreListResponse, GetDataSourceQueryDTOCoreListResponseFields, GetPagesQueryDTOCoreListResponse, GetPagesQueryDTOCoreListResponseFields } from "../utl";
import { DataSource } from "./dataSource.config";

export const pagesDataSource = new DataSource<{}, {}, null, GetPagesQueryDTOCoreListResponse>({
    name: "pages",
    method: "GET",
    translatableResponseFields: [GetPagesQueryDTOCoreListResponseFields.name],
    cacheEnabled: true
});

export const dataSourcesDataSource = new DataSource<{}, {}, null, GetDataSourceQueryDTOCoreListResponse>({
    name: "dataSources",
    method: "GET",
    translatableResponseFields: [GetDataSourceQueryDTOCoreListResponseFields.name],
    cacheEnabled: true
});
