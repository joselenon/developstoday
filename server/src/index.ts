import * as admin from 'firebase-admin';

import AppService from './services/AppService';

async function init() {
  await AppService.initialize();
}

init();
