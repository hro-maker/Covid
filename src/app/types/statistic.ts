

export interface IStatistic{
  "updated_at": Date,
  "date": string,
  "deaths": number,
  "confirmed": number,
  "recovered": number,
  "new_confirmed": number,
  "new_recovered": number,
  "new_deaths": number,
  "active": number
}
export interface ICountries{
  "coordinates": {
      "latitude": number,
      "longitude": number
  },
  "name": string,
  "code": string,
  "population": number | null
  "updated_at": Date,
  "today": {
    "deaths": number | null,
    "confirmed": number | null
  },
  "latest_data": {
      "deaths": number | null,
      "confirmed":number | null,
      "recovered": number | null,
      "critical": number | null,
      "calculated": {
          "death_rate": number | null,
          "recovery_rate": number | null,
          "recovered_vs_death_ratio": number | null,
          "cases_per_million_population": number | null
      }
  }
  timeline:IStatistic[]
}


