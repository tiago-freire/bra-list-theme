import { EventContext, IOClients, AppsListItem } from '@vtex/api'

const getAllApps = (ctx: EventContext<IOClients>) => {
  return ctx.clients.apps.listApps().then(({ data }) => data)
}

const containsApp = ({
  list,
  app,
  version,
}: {
  app: string
  version: number
  list: AppsListItem[]
}) => list.filter(item => item.id.includes(`${app}@${version}`)).length > 0

export async function setup(ctx: EventContext<IOClients>) {
  const apps = await getAllApps(ctx)
  if (!containsApp({ list: apps, app: 'vtex.list', version: 0 })) {
    await ctx.clients.apps.installApp('vtex.list@0.x')
  }
}
