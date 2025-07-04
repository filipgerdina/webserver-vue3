import { DataSource } from "../dataSource/dataSource.config";
import { Module } from "../module/module.config";

export class Entity<
  TUrl extends { [key: string]: any; } = any,
  TQuery extends { [key: string]: any; } = any,
  TBody = any,
  TResponse = any,
  TViews extends Record<string, View<any, any, any, any>> = Record<string, View<any, any, any, any>>,
  TSubEntities extends Record<string, Entity> = Record<string, Entity<any, any, any, any, any, any>>
> {
  public dataSource: DataSource<TUrl, TQuery, TBody, TResponse>;
  public entityCode: string;
  public views: TViews;
  public subEntities: TSubEntities;
  public module: Module;

  constructor(options: {
    dataSource: DataSource<TUrl, TQuery, TBody, TResponse>,
    entityCode: string,
    module: Module,
    views?: TViews,
    subEntities?: TSubEntities,
  }) {
    this.dataSource = options.dataSource;
    this.entityCode = options.entityCode;
    this.module = options.module;
    this.views = options.views ?? {} as TViews;
    this.subEntities = options.subEntities ?? {} as TSubEntities;
  }

  public getData(): Promise<TResponse | undefined> {
    return this.dataSource.retrieveData();
  }

  public getActions() {
    this.module.moduleActionsDS.getQueryParams = () => ({
      RecordTypeCode: this.entityCode
    });

    return this.module.moduleActionsDS.retrieveData();
  }
}

export class View<
  TUrl extends { [key: string]: any; },
  TQuery extends { [key: string]: any; },
  TBody = any,
  TResponse = any
> {
    dataSource: DataSource<TUrl, TQuery, TBody, TResponse>;

    constructor(options: {
        dataSource: DataSource<TUrl, TQuery, TBody, TResponse>
    }) {
        this.dataSource = options.dataSource;
    }

    public getData(): Promise<TResponse | undefined> {
        return this.dataSource.retrieveData();
    }
}

export type QueryEntity<
  Query extends { [key: string]: any; }, 
  Result,
  Views extends Record<string, View<any, any, any, any>> = Record<string, View<any, any, any, any>>,
  SubEntities extends Record<string, Entity> = Record<string, Entity<any, any, any, any, any, any>>
> = Entity<{}, Query, null, Result, Views, SubEntities>;

export type QueryView<
  Query extends { [key: string]: any; }, 
  Result,
> = View<{}, Query, null, Result>;