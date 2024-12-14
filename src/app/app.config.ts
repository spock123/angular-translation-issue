/// <reference types="@angular/localize" />

import {
  enableProdMode,
  importProvidersFrom,
  provideExperimentalZonelessChangeDetection,
  ApplicationConfig,
} from '@angular/core';

import { environment } from '../environments/environment';
import {
  provideClientHydration,
  BrowserModule,
  withI18nSupport,
  Meta,
} from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule),
    provideExperimentalZonelessChangeDetection(),
    provideClientHydration(withI18nSupport()),
    Meta,
  ],
};

export { appConfig };
