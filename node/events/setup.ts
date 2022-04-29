import { EventContext, IOClients } from '@vtex/api'

export async function setup(ctx: EventContext<IOClients>) {
  // eslint-disable-next-line no-console
  console.log('Evento de instalação recebido', ctx)
}
