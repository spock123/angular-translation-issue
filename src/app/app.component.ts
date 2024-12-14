import { Component, ChangeDetectionStrategy, LOCALE_ID, inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  localeID = inject(LOCALE_ID);
  localizedTranslation = $localize`:@@localize-translation:`



}
