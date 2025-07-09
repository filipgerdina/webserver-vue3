import { fetchService } from "../services/fetchService"
import { translationService } from "../services/translationService"

function isObject(val: any): val is Record<string, any> {
  return val && typeof val === 'object' && !Array.isArray(val);
}

function deepTranslate(obj: any, pathParts: string[], translateFn: (key: string) => string): void {
  if (!obj) return;

  const [currentKey, ...restPath] = pathParts;

  if (Array.isArray(obj)) {
    for (const item of obj) {
      deepTranslate(item, pathParts, translateFn);
    }
    return;
  }

  if (restPath.length === 0) {
    if (currentKey in obj && typeof obj[currentKey] === 'string') {
      obj[currentKey] = translateFn(obj[currentKey]);
    }
  } else {
    const next = obj[currentKey];
    if (Array.isArray(next)) {
      for (const item of next) {
        deepTranslate(item, restPath, translateFn);
      }
    } else if (isObject(next)) {
      deepTranslate(next, restPath, translateFn);
    }
  }
}

export class DataSource<
  TUrl extends { [key: string]: any },
  TQuery extends { [key: string]: any },
  TBody = any,
  TResponse = any
> {
  public name: string;
  public method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  public cacheEnabled: boolean;
  public dataSourceToRemoveFromCache?: string;
  private isRealDS: boolean = false;
  private processEndPointAction: boolean = false;
  private baseUrl: string = 'https://localhost:7241/';
  private skipAuth: boolean = false;

  public getUrlParams?: () => TUrl;
  public getQueryParams?: () => TQuery;
  public getBodyParams?: () => TBody;

  private urlParams: TUrl | null = null;
  private queryParams: TQuery | null = null;
  private bodyParams: TBody | null = null;

  private translatableResponseFields: string[] = [];

  constructor(options: {
    name: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    cacheEnabled?: boolean;
    isRealDS?: boolean;
    processEndPointAction?: boolean;
    baseUrl?: string;
    skipAuth?: boolean;
    getUrlParams?: () => TUrl;
    getQueryParams?: () => TQuery;
    getBodyParams?: () => TBody;
    translatableResponseFields?: string[];
  }) {
    this.name = options.name;
    this.method = options.method ?? 'POST';
    this.skipAuth = options.skipAuth ?? false;
    this.cacheEnabled = options.cacheEnabled ?? false;
    this.isRealDS = options.isRealDS ?? false;
    this.processEndPointAction = options.processEndPointAction ?? false;
    this.baseUrl = options.baseUrl ?? this.baseUrl;
    this.getUrlParams = options.getUrlParams;
    this.getQueryParams = options.getQueryParams;
    this.getBodyParams = options.getBodyParams;
    this.translatableResponseFields = options.translatableResponseFields ?? [];
  }

  private setUrlParams(): void {
    this.urlParams = this.getUrlParams ? this.getUrlParams() : null;
  }

  private setQueryParams(): void {
    this.queryParams = this.getQueryParams ? this.getQueryParams() : null;
  }

  private setBodyParams(): void {
    this.bodyParams = this.getBodyParams ? this.getBodyParams() : null;
  }

  private async applyTranslation(result: any): Promise<any> {
    if (!result || !this.translatableResponseFields.length) return result;

    const cloned = structuredClone(result); // avoid mutating original
    for (const path of this.translatableResponseFields) {
      const parts = path.split('.');
      deepTranslate(cloned, parts, translationService.translate);
    }
    return cloned;
  }

  public async retrieveData(
    onSuccess?: (res: TResponse) => void,
    onError?: (err: any) => void
  ): Promise<TResponse | undefined> {
    this.setUrlParams();
    this.setQueryParams();
    this.setBodyParams();

    let url = this.baseUrl;
    let body;

    if (this.isRealDS) {
      url += this.name;

      if (this.urlParams) {
        Object.keys(this.urlParams).forEach((param) => {
          url = url.replace(`{${param}}`, this.urlParams![param]);
        });
      }

      if (this.queryParams) {
        const queryString = Object.entries(this.queryParams)
          .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
          .join('&');
        if (queryString) url += `?${queryString}`;
      }

      body = this.bodyParams;
    } else {
      url += this.processEndPointAction ? 'utl/processEndPointAction' :'utl/resolveDataSource';
      body = {
        name: (this.processEndPointAction ? this.baseUrl : "") + this.name,
        urlParams: this.getUrlParams?.() ?? null,
        queryParams: this.getQueryParams?.() ?? null,
        bodyParams: this.getBodyParams?.() ?? null,
        ...(this.processEndPointAction ? { method: this.method } : {})
      };
    }

    try {
      const result = await fetchService<TResponse>(
        url,
        this.isRealDS ? this.method : 'POST',
        {},
        body,
        this.skipAuth
      );

      const translatedResult = await this.applyTranslation(result);

      if (onSuccess) onSuccess(translatedResult);
      return translatedResult;
    } catch (err) {
      if (onError) onError(err);
      return undefined;
    }
  }
}

export type QueryDataSource<Q extends { [key: string]: any; }, R> = DataSource<{}, Q, null, R>;
export type QueryBodyDataSource<Q extends { [key: string]: any; }, B, R> = DataSource<{}, Q, B, R>;
export type UrlDataSource<U extends { [key: string]: any; }, R> = DataSource<U, {}, null, R>;
export type UrlBodyDataSource<U extends { [key: string]: any; }, R> = DataSource<U, {}, null, R>;