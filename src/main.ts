import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {} from '../src/app/login/login.component'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

