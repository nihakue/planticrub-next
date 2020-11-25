export type Environment = {
  CONTENTFUL_CDA_API_KEY: string,
  CONTENTFUL_CPA_API_KEY: string,
  CONTENTFUL_SPACE: string,
  CONTENTFUL_ENVIRONMENT: string,
  INSTA_TOKEN: string
}

let _env: Environment;

function assertEnvVar(key: string, defaultValue?: string): string {
  return (process.env[key] ?? defaultValue)
}

export function getEnvironment(): Environment {
  if (_env) {
    return _env;
  }
  return _env = {
    CONTENTFUL_CDA_API_KEY: assertEnvVar('CONTENTFUL_CDA_API_KEY'),
    CONTENTFUL_CPA_API_KEY: assertEnvVar('CONTENTFUL_CPA_API_KEY'),
    CONTENTFUL_SPACE: assertEnvVar('CONTENTFUL_SPACE'),
    CONTENTFUL_ENVIRONMENT: assertEnvVar('CONTENTFUL_ENVIRONMENT', 'master'),
    INSTA_TOKEN: assertEnvVar('INSTA_TOKEN'),
  }
}