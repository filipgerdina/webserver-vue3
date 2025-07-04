import { authService } from './src/services/authService'
import { routingService } from './src/services/routingService'
import { DataSource } from './src/dataSource/dataSource.config'
import type { QueryDataSource } from './src/dataSource/dataSource.config'
import { Entity, View } from './src/entity/entity.config'
import type { QueryEntity, QueryView } from './src/entity/entity.config'
import { Module } from './src/module/module.config'
import { VisualizationType, type ActionsQueryDTO, type ActionFormControl, type RecordParams, type ActionsQueryDTOCoreListResponse } from './src/module/module.config' 
import { EndPointAction } from './src/dataSource/endPointAction.config'
import { CrossTabLock } from './src/services/crossTabLock'
import { loadRemoteModule } from './src/RemoteModuleLoader'
import  RemoteModuleComponentLoader from './src/RemoteModuleComponentLoader.vue'
import { GetImageUrl } from './src/utilFunctions'
import { GetPagesQueryDTOCoreListResponseFields, GetDataSourceQueryDTOCoreListResponseFields } from './src/utl'

import { signalRService } from './src/services/signalRService'
import { translationService } from './src/services/translationService'
import { settingsService } from './src/services/settingsService'
import { pagesDataSource, dataSourcesDataSource} from './src/dataSource/utlityDataSources'
import ErrorPopupContainer from './src/ErrorPopupContainer.vue'
export {
  authService,
  routingService,
  DataSource,
  QueryDataSource,
  Entity,
  View,
  type QueryEntity,
  type QueryView,
  Module,
  EndPointAction,
  ActionsQueryDTO,
  ActionFormControl,
  VisualizationType,
  RecordParams,
  signalRService,
  CrossTabLock,
  loadRemoteModule,
  RemoteModuleComponentLoader,
  GetImageUrl,
  translationService,
  settingsService,
  ActionsQueryDTOCoreListResponse,
  pagesDataSource,
  GetPagesQueryDTOCoreListResponseFields,
  dataSourcesDataSource,
  GetDataSourceQueryDTOCoreListResponseFields,
  ErrorPopupContainer
}
