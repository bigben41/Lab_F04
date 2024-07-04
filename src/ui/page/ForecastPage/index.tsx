import React from "react";
import {Container} from "react-bootstrap";
import Header from "../../component/Header.tsx";
import ForecastTable from "../../component/ForecastTable.tsx";
//import mockData from "./response.json";
import {ForecastData} from "../../../data/ForecastData.ts";
import * as moment from "moment/moment";
import TableLoadingSpinner from "../../component/TableLoadingSpinner.tsx";
import * as OpenWeatherMapApi from "../../../api/OpenWeatherMapApi.ts";

type Props = {

}

type State = {
    data: undefined | ForecastData
    updatedTime: undefined | string
}

export default class ForecastPage extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            data: undefined,
            updatedTime: undefined
        }
    }

    onLoadForecastData = (data: ForecastData) => {
        this.setState({
                data: data,
                updatedTime: moment().format("YYYY-MM-DD HH:mm:ss")
            }
        )
    }

    getForecastData = () => {
        this.setState({
            data:undefined,
            updatedTime:undefined
        })
        setTimeout(()=>
            {OpenWeatherMapApi.getForecastData(this.onLoadForecastData)}
            ,2000
        )
    }


    componentDidMount() {
            this.getForecastData()
    }


    render() {
        return (
            <Container>
                <Header updatedTime={this.state.updatedTime}
                        getForecastData={this.getForecastData}/>
                    {
                        this.state.data
                            ? <ForecastTable data={this.state.data}/>
                            : <TableLoadingSpinner/>
                    }
            </Container>
    )
    }
    }