
import "./Header.css";


type Props = {
    updatedTime: undefined|string
    getForecastData:() => void
}

export default function Header({updatedTime, getForecastData}: Props) {
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap">
                <h1 className="text-white">5 Days / 3 Hours Forecast</h1>
                <div className="d-flex align-items-center">
                    <div className="text-white">
                        Last Update Time:<br/>
                        {updatedTime
                            ? updatedTime
                            : "waitwait"}
                    </div>
                    <div id="btn-refresh" onClick={getForecastData}>
                    </div>
                </div>
            </div>
            <div>
                <div id="title-location"><i>Hong Kong</i></div>
            </div>
        </div>
    );

}