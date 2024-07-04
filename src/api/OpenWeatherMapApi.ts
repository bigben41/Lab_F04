import axios from "axios";
import {ForecastData} from "../data/ForecastData.ts";

// export const getForecastData = (onLoadForecastData:(data:ForecastData)=>void) => {
//     axios.get<ForecastData>("http://api.openweathermap.org/data/2.5/forecast?q=Hong Kong&appid=23bfbf28024fcd5c067aea9aca72a0df&units=metric")
//         .then((response)=>{
//             onLoadForecastData(response.data)
//         })
// }

export const getForecastData = async():Promise<ForecastData> => {
    const response = await axios.get<ForecastData>
    ("http://api.openweathermap.org/data/2.5/forecast?q=Hong Kong&appid=23bfbf28024fcd5c067aea9aca72a0df&units=metric")
    return response.data

    // return (await axios.get<ForecastData>
    // ("http://api.openweathermap.org/data/2.5/forecast?q=Hong Kong&appid=23bfbf28024fcd5c067aea9aca72a0df&units=metric")).data
}