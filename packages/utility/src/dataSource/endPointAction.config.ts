import { DataSource } from "./dataSource.config";

export class EndPointAction {
    dataSource: DataSource<any, any>;

    constructor(endpoint: string){
        let method = endpoint.split(";")[0];
        let name = endpoint.slice(method.length + 2);
        this.dataSource = new DataSource({
            name: name,
            method: method as any,
            processEndPointAction: true
        });
    }
}