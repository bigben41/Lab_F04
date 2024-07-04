
import {ForecastDataItem} from "../../data/ForecastData.ts";
import * as moment from "moment/moment";

type Props = {
    item:ForecastDataItem
}

export default function ForecastTableRow ({item}:Props){
    return (
            <tr>
                <td>{moment.unix(item.dt).format("YYYY-MM-DD")}</td>
                <td>{moment.unix(item.dt).format("HH:mm:ss")}</td>
                <td>{item.main.temp_min}/{item.main.temp_max}</td>
                <td>{item.main.humidity}</td>
                <td><img width="64px"
                         src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                </td>

            </tr>
        )

}