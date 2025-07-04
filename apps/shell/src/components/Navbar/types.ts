export type NavigationGroup = {
  displayName: string
  pages?: Page[]
  navigationGroups?: NavigationGroup[]
  iconUrl?: string
}

export type Page = {
  name: string
  path: string
  pageComponent: string
  module: Module
  iconUrl?: string
}

export type Module = {
  remoteModule: string
  pathToModule: string
}
