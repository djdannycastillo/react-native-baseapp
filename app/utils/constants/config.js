import DeviceInfo from 'react-native-device-info';

export const API_URL = 'https://yourapiurl.com';
export const EXTERNAL_URL = 'https://yourwebsite.com';

export const appVersion = DeviceInfo.getVersion();
export const appName = DeviceInfo.getApplicationName();
export const currentYear = new Date().getFullYear();