import {
  __federation_method_getRemote as getRemote,
  __federation_method_setRemote as setRemote,
  __federation_method_unwrapDefault as unwrapModule,
} from "virtual:__federation__";

async function loadRemoteModule(pathToModule: string, remoteName:string, exposedModule: string) : Promise<any>{
    let remoteModule;
    try {
        remoteModule = await getRemote(remoteName, exposedModule);
    }
    catch (err){
        setRemote(remoteName, {
            url: pathToModule.startsWith("http") ? pathToModule : window.location.origin + '/remotes' + pathToModule,
            format: 'esm',
            from: 'vite',
        } as any);

        remoteModule = await getRemote(remoteName, exposedModule);
    }
    
    const mod = await unwrapModule(remoteModule) as any;

    if (!mod) {
        throw new Error("Remote store module does not export useRoleManagementStore");
    }
    else return mod;
}

export {
    loadRemoteModule
}