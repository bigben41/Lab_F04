import {Table} from "react-bootstrap";
import ForecastTableRow from "./ForecastTableRow.tsx";
import {ForecastData} from "../../data/ForecastData.ts";

type Props = {
    data: ForecastData
}

export default function ForecastTable ({data}:Props) {
    return (
        <Table striped bordered hover variant="dark" className="align-middle">
            <thead>
            <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Temperature(min/max)</th>
                <th>Humidity(%)</th>
                <th>Weather</th>
            </tr>
            </thead>
            <tbody>
            {
                data.list.map((forecastDataItem) => (
                    <ForecastTableRow item={forecastDataItem} key={forecastDataItem.dt}/>
                ))
            }
            </tbody>
        </Table>
    );

}