import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedLanguage: string = 'en'
  languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Georgian', value: 'ge' },
  ];
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
  }

  ngOnInit() {
    this.translateService.use(this.selectedLanguage);
  }

  changeLanguage(language:string) {
    this.translateService.use(language)
  }

}
