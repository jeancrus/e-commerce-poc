import { SWRConfiguration } from 'swr/dist/types'

const options: SWRConfiguration = {
  shouldRetryOnError: true,
  revalidateOnReconnect: true,
  revalidateOnMount: true,
  revalidateOnFocus: true
}

export default options
