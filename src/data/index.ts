import { prerequisitesData } from './prerequisites';
import { nodejsData } from './nodejs';
import { webFrameworksData } from './webFrameworks';
import { databasesData } from './databases';
import { apiDevelopmentData } from './apiDevelopment';
import { securityData } from './security';
import { testingData } from './testing';
import { advancedNodejsData } from './advancedNodejs';
import { architectureData } from './architecture';
import { devopsData } from './devops';
import { systemDesignData } from './systemDesign';
import { totalTypescriptData } from './totalTypescript';

export const contentData = [
  ...prerequisitesData,
  ...nodejsData,
  ...webFrameworksData,
  ...databasesData,
  ...apiDevelopmentData,
  ...securityData,
  ...testingData,
  ...advancedNodejsData,
  ...architectureData,
  ...devopsData,
  ...systemDesignData,
  ...totalTypescriptData,
];
