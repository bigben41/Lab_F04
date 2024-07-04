export interface ForecastData{
    list: ForecastDataItem[]
}

export interface ForecastDataItem {
    dt:number
    main:ForecastDataListMain
    weather:ForecastDataListWeather[]
}

export interface ForecastDataListMain{
    temp_min:number
    temp_max:number
    humidity:number
    temp:number
}

export interface ForecastDataListWeather{
    icon:string
}

