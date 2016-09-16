// import { bootstrap } from '@angular/platform-browser-dynamic';
// import { disableDeprecatedForms, provideForms } from '@angular/forms';
// import { provideRouter } from '@angular/router';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { HTTP_PROVIDERS } from '@angular/http';
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);

/*
bootstrap(App, [
  ...HTTP_PROVIDERS,
  disableDeprecatedForms(),
  provideForms(),
  provideRouter(routes),
  { provide: LocationStrategy, useClass: HashLocationStrategy },
  ...providers
]);
*/
