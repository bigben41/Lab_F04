import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

// export type ChartData = {
//     name: string,
//     temperature: number,
//     humidity: number
// };

type Props = {
    dataList: ChartData[]

};


export default function WeatherChart({dataList}: Props) {
    return (
        <div style={{height:"500px"}}>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={dataList}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{r: 8}}/>
                    <Line type="monotone" dataKey="humidity" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}



