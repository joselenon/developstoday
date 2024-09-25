import AppService from './services/AppService';

async function init() {
  await AppService.initialize();
}

init();
