import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form :FormGroup
  selectedLanguage: string = 'en'
  languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Georgian', value: 'ge' },
  ];
  constructor(private translateService: TranslateService,public fb: FormBuilder) {
    this.form = this.fb.group({
      language: this.fb.control('en')
    })
    this.translateService.setDefaultLang(this.form.get('language')?.value);
  }
  ngOnInit() {
    this.translateService.use(this.languageName?.value);
  }
  changelanguageName(e:any) {
    // this.languageName?.setValue(e.target.value, {
    //   onlySelf: true
    // })
    console.log(this.form.get('language')?.value)
    this.translateService.use(e.target.value)
  }
  get languageName() {
    return this.form.get('language');
  }
}
