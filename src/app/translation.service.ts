import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Locale {
    lang: string;
    // tslint:disable-next-line:ban-types
    data: Object;
}

@Injectable({
    providedIn: 'root'
})
export class TranslationService {
    // Private properties
    private langIds: any = [];

    /**
     * Service Constructor
     *
     * @param translate: TranslateService
     */
    constructor(private translate: TranslateService) {
        // add new langIds to the list
        this.translate.addLangs(['en', 'ar']);

        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    /**
     * Load Translation
     *
     * @param args: Locale[]
     */
    loadTranslations(...args: Locale[]): void {
        const locales = [...args];

        locales.forEach(locale => {
            // use setTranslation() with the third argument set to true
            // to append translations instead of replacing them
            this.translate.setTranslation(locale.lang, locale.data, true);

            this.langIds.push(locale.lang);
        });

        // add new languages to the list
        this.translate.addLangs(this.langIds);
    }

    /**
     * Setup language
     *
     * @param lang: any
     */
    setLanguage(lang?) {
        if (!lang) {
            lang = localStorage.getItem('language') || this.translate.getDefaultLang();
        }

        this.translate.use(lang);
        localStorage.setItem('language', lang);

       if (lang !== 'ar') {
            document.getElementsByTagName('html')[0].setAttribute('lang', lang);
            document.getElementsByTagName('html')[0].setAttribute('direction', 'ltr');
            document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
          } else {
            document.getElementsByTagName('html')[0].setAttribute('lang', lang);
            document.getElementsByTagName('html')[0].setAttribute('direction', 'rtl');
            document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
        }

    }

    /**
     * Returns selected language
     */
    getSelectedLanguage(): any {
        return localStorage.getItem('language') || this.translate.getDefaultLang();
    }
}
