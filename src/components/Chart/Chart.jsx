
import ChartBar from './ChartBar';

import './Chart.css';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    console.log(dataPointValues)

    const totalMaximum = Math.max(...dataPointValues) //copy array with 12 numbers

    console.log(dataPointValues)

    return (

        <div className="chart">
        {props.dataPoints.map((dataPoint) => (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={totalMaximum}
                label={dataPoint.label}
            />
        ))}
        </div>


    )
}

export default Chart;