import { IStatistic } from "./types/statistic"

export const getTime=()=>{
  const time=new Date(Date.now())
  console.log(time.getMonth(),time.getDay,time)
  return `${time.getFullYear()}-${(time.getMonth() + 1).toString().padStart(2,'0')}-${(time.getDate()).toString().padStart(2,'0')}`
}
export const setapCountryOptions=(arr:IStatistic[]):any=>{
  return {
    xAxis: {
      type: 'category',
      data: arr
          .map((c) => new Date(c.date).toLocaleDateString())
          .reverse(),
    },
    legend: {

      data: ['Confirmed', 'Recovered', 'Deaths'],
    },
    yAxis: {
      type: 'value'
    },
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
    },
    series: [
      {
              name: 'Confirmed',
                type: 'bar',
                data:arr
                  .map((c) => {
                    return c.new_confirmed;
                  })
                  .reverse(),

              },
              {
                name: 'Recovered',
                type: 'bar',
                data: arr?.map((c) => c.new_recovered).reverse(),
              },
              {
                name: 'Deaths',
                type: 'bar',
                data: arr?.map((c) => c.new_deaths).reverse(),
              },
    ]
  };
}
export const  filter=(arr:IStatistic[],e:boolean):IStatistic[]=>{
  return  e ? arr.filter(el=>{
     const answer=   new Date().getTime() - new Date(el.date).getTime()<= 2629800000 * 3
     return answer
   }
     ) : arr
 }
