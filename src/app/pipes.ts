import { Pipe, PipeTransform } from "@angular/core";
import { IStatistic } from "./types/statistic";

@Pipe({name: 'filterArray'})
export class FilterArr implements PipeTransform {
  transform(value: IStatistic[] | undefined,date:string): IStatistic[] {
    return value ? value?.filter(el=>el.date === date) : []
  }
}
export type fieldType = 'confirmed'|'deaths'|'recovered';
@Pipe({name: 'sumArr'})
export class Sum implements PipeTransform {
  transform(value: IStatistic[] | undefined,field:fieldType): number {
    // console.log(value,field)
    return  value ? value.reduce((acc,el)=>{
      return  acc+el[field]
    },0) :0
  }
}
