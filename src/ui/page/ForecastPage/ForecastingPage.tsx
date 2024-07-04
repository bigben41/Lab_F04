import {Container} from "react-bootstrap";
import Header from "../../component/Header.tsx";
//import mockData from "./response.json";
import {useEffect, useState} from "react";
import {ForecastData} from "../../../data/ForecastData.ts";
import * as moment from "moment/moment";
import ForecastTable from "../../component/ForecastTable.tsx";
import TableLoadingSpinner from "../../component/TableLoadingSpinner.tsx";
import * as OpenWeatherMapApi from "../../../api/OpenWeatherMapApi.ts";
import WeatherChart, {ChartData} from "../../component/WeatherChart.tsx";


export default function ForecastingPage() {
    const [data, setData]
        = useState<ForecastData | undefined>(undefined)
    const [updatedTime, setUpdatedTime]
        = useState<string | undefined>(undefined)

    const getForecastData = async () => {
        //setData(mockData);
        setData(await OpenWeatherMapApi.getForecastData());
        setUpdatedTime(moment().format("YYYY-MM-DD HH:mm:ss"))
    }

    const convertChartDataList = (forecastData: ForecastData): void => {
        // for (let item of forecastData.list) {
        //             name: moment.unix(item.dt).format("YYYY-MM-DD HH:mm:ss"),
        //             humidity:item.main.humidity,
        //             temperature: item.main.temp
        // }

        return forecastData.list.map((item): void => (
            {
                name: moment.unix(item.dt).format("YYYY-MM-DD HH:mm:ss"),
                humidity:item.main.humidity,
                temperature: item.main.temp
            }
        ))
    }


    useEffect(() => {
        getForecastData()
    }, []) //must place [], if for get will loop call api

    return (
        <Container>
            <Header updatedTime={updatedTime} getForecastData={getForecastData}/>
            {
                data
                    ?<>
                    <WeatherChart dataList={convertChartDataList(data)}/>
                    <ForecastTable data={data}/>
                    </>: <TableLoadingSpinner/>
            }
        </Container>
    )
}