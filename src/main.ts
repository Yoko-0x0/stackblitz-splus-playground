import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; 
import { environment } from './app/environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// api
export function getBaseUrl() { 
  //return environment.apiServer;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];



platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
