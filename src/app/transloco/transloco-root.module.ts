import { HttpClient } from '@angular/common/http';
import {
    TRANSLOCO_LOADER,
    Translation,
    TranslocoLoader,
    TRANSLOCO_CONFIG,
    translocoConfig,
    TranslocoModule,
} from '@ngneat/transloco';
import { Injectable, NgModule } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    constructor(private http: HttpClient) {}

    getTranslation(lang: string) {
        return this.http.get<Translation>(`/assets/i18n/${lang}.json`);
    }
}

@NgModule({
    exports: [TranslocoModule],
    providers: [
        {
            provide: TRANSLOCO_CONFIG,
            useValue: translocoConfig({
                availableLangs: [
                    { id: 'ar', label: 'Arabic' },
                    { id: 'pt-br', label: 'Portuguese (Brazil)' },
                    { id: 'zh', label: 'Chinese' },
                    { id: 'hr', label: 'Croatian' },
                    { id: 'cs', label: 'Czech' },
                    { id: 'da', label: 'Danish' },
                    { id: 'nl', label: 'Dutch' },
                    { id: 'en', label: 'English' },
                    { id: 'fi', label: 'Finnish' },
                    { id: 'fr', label: 'French' },
                    { id: 'de', label: 'German' },
                    { id: 'el', label: 'Greek' },
                    { id: 'hu', label: 'Hungarian' },
                    { id: 'it', label: 'Italian' },
                    { id: 'ja', label: 'Japanese' },
                    { id: 'ko', label: 'Korean' },
                    { id: 'es-mx', label: 'Spanish (Mexico)' },
                    { id: 'no', label: 'Norwegian' },
                    { id: 'pl', label: 'Polish' },
                    { id: 'pt', label: 'Portuguese' },
                    { id: 'ru', label: 'Russian' },
                    { id: 'es', label: 'Spanish' },
                    { id: 'sv', label: 'Swedish' },
                    { id: 'tr', label: 'Turkish' },
                ],
                defaultLang: 'en',
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: environment.production,
            }),
        },
        { provide: TRANSLOCO_LOADER, useClass: TranslocoHttpLoader },
    ],
})
export class TranslocoRootModule {}
