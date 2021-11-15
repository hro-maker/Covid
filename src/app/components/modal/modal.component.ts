import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICountries, IStatistic } from 'src/app/types/statistic';
import { CountriesServise } from './../../servises/countries.servise';
import { from, Observable, of } from 'rxjs';
import { ThemePalette } from '@angular/material/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit {
  @Input() code!: string;
  @Output() changemodaltext: EventEmitter<string> = new EventEmitter();
  countrie: ICountries | null = null;
  form=new FormGroup({
    checked : new FormControl(false),
    checked2:new FormControl(false)
  })
  statics$!: Observable<{ data: IStatistic[] }>;
  constructor(private countriesservise: CountriesServise) {}
  ngAfterViewInit() {
    this.form.get('checked')?.valueChanges.subscribe(e=>{
       this.countriesservise.setallLast(e)
    })
    this.form.get('checked2')?.valueChanges.subscribe(e=>{
      this.countriesservise.setnewLast(e)
   })
  }
  ngOnInit(): void {
    this.countriesservise.getCountrie(this.code).subscribe((e) => {
      this.countrie = e.data;
      this.statics$ = of({ data: e.data.timeline });
    });
  }
  close(e: Event) {
    if ((e.target as any).className === 'modal__wrapper') {
      this.changemodaltext.emit('');
    }
  }
}
