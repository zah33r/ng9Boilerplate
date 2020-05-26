import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './startup/app.module';
import { environment } from './environments/environment';

import 'hammerjs';

import { TextEncoder } from 'text-encoding';
if (typeof (window as any).TextEncoder === 'undefined') {
    (window as any).TextEncoder = TextEncoder;
}

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.log(err));
