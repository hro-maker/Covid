import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { getTime } from '../../helpers';
import { StatisticServise } from '../../servises/statistic.servise';
import { IStatistic } from '../../types/statistic';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss'],
})
export class StatisticComponent implements OnInit {
  @ViewChild('input') input!: ElementRef;
  statics$: Observable<{ data: IStatistic[] }>;
  date = getTime();
  loading=true;
  constructor(private statisticServise: StatisticServise) {
    this.loading=true
    this.statics$ = this.statisticServise.getTimeLine();
  }
  ngOnInit() {
      this.statics$.subscribe(e=>{
        this.loading=false
      })
  }

  ngAfterViewInit(): void {
    // fromEvent(this.input.nativeElement, 'change').subscribe((e) => {
    //     console.log((e as any).target.value);
    // });
  }
}
