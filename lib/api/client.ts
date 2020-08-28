import { getEnvironment } from './environment';
import { createClient, ContentfulClientApi } from 'contentful';

let _client;

export function getClient(preview: boolean): ContentfulClientApi {
  const envi = getEnvironment();
  if (_client) {
    return _client;
  }

  return _client = createClient({
    accessToken: preview ? envi.CONTENTFUL_CPA_API_KEY : envi.CONTENTFUL_CDA_API_KEY,
    space: envi.CONTENTFUL_SPACE,
    environment: envi.CONTENTFUL_ENVIRONMENT,
    ...(preview ? {host: 'preview.contentful.com'} : {})
  });
}