type RemoteOptions = {
  remoteUrl: string;
  remoteName: string;
  exposedModule: string;
};

const remoteCache = new Map<string, any>();
const remoteInitState = new Set<string>(); // tracks initialized remotes

import { init, loadRemote, registerRemotes } from '@module-federation/enhanced/runtime';
export async function loadRemoteModule({
  remoteUrl,
  remoteName,
  exposedModule,
}: RemoteOptions): Promise<any> {
  init({
    name: "shell",
    remotes: [
    ]
});
  registerRemotes([
    {
        name: remoteName,
        type: 'esm',
        entry: remoteUrl.startsWith("http") ? remoteUrl : window.location.origin + '/remotes' + remoteUrl,
    }
  ]);

  let module = await loadRemote(exposedModule.replace(".", remoteName)).then((m: any) => {
    return m
  });

  return module;
}
