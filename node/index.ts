import {
  Service,
  ServiceContext,
  ParamsContext,
  RecorderState,
  IOClients,
} from '@vtex/api'

import { setup } from './events/setup'

declare global {
  type Context = ServiceContext<IOClients, State>

  interface State extends RecorderState {
    code: number
  }
}

export default new Service<IOClients, State, ParamsContext>({
  clients: {
    implementation: IOClients,
    options: {
      default: {
        retries: 2,
        timeout: 10000,
      },
      events: {
        exponentialBackoffCoefficient: 2,
        exponentialTimeoutCoefficient: 2,
        initialBackoffDelay: 50,
        retries: 1,
        timeout: 3000,
        concurrency: 10,
      },
    },
  },
  events: {
    onAppInstalled: setup,
  },
})
