import getConfig from 'next/config';

import appPackage from '~/../package.json';

const { publicRuntimeConfig } = getConfig();

export function isDevelopment(): boolean {
  return publicRuntimeConfig.isDevelopment;
}

export const isProduction = (): boolean => {
  return !isDevelopment();
};

export function getIpAddress(): string {
  return publicRuntimeConfig.ipAddress;
}

export const getEnv = (): string => {
  return `${isDevelopment() ? 'development' : 'production'}`;
};

export const getAppVersion = (): string => {
  return appPackage.version;
};

/**
 * API URL
 */
export const getApiUrl = (): string => {
  return publicRuntimeConfig.apiURL;
};
