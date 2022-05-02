import { EventContext, IOClients } from '@vtex/api'

export async function setup(ctx: EventContext<IOClients>) {
  await ctx.clients.apps.installApp('vtex.list@0.x')
}
