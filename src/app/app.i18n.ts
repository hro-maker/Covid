import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function instantiateTranslateHttpLoader(httpClient:any) {
   return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
 }

 export const translateModuleConfig = {
   loader: {
     provide: TranslateLoader,
     useFactory: instantiateTranslateHttpLoader,
     deps: [HttpClient]
   }
 };
