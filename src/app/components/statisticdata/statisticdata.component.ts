import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IStatistic } from 'src/app/types/statistic';

@Component({
  selector: 'app-statisticdata',
  templateUrl: './statisticdata.component.html',
  styleUrls: ['./statisticdata.component.scss']
})
export class StatisticdataComponent implements OnInit {
  @Input()statistic$!:Observable<{data:IStatistic[]}>
  @Input()date!:string
  constructor() { }

  ngOnInit(): void {
  }

}
