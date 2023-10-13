import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingLineSeries } from '@syncfusion/ej2-react-charts';
// import { chartData } from './datasource.js';

function StackedLine() {
    const marker = { visible: true, width: 10, height: 10, border: { width: 2, color: '#F8AB1D' } };

    let chartData = [
        { x: 'Food', y: 90, y1: 40, y2: 70, y3: 120 },
        { x: 'Transport', y: 80, y1: 90, y2: 110, y3: 70 },
        { x: 'Medical', y: 50, y1: 80, y2: 120, y3: 50 },
        { x: 'Clothes', y: 70, y1: 30, y2: 60, y3: 180 },
        { x: 'Personal Care', y: 30, y1: 80, y2: 80, y3: 30 },
        { x: 'Books', y: 10, y1: 40, y2: 30, y3: 270 },
        { x: 'Fitness', y: 100, y1: 30, y2: 70, y3: 40 },
        { x: 'Electricity', y: 55, y1: 95, y2: 55, y3: 75 },
        { x: 'Tax', y: 20, y1: 50, y2: 40, y3: 65 },
        { x: 'Pet Care', y: 40, y1: 20, y2: 80, y3: 95 },
        { x: 'Education', y: 45, y1: 15, y2: 45, y3: 195 },
        { x: 'Entertainment', y: 75, y1: 45, y2: 65, y3: 115 }
    ]

    React.useEffect(() => {
        console.log(chartData);
    }, [])

    return <ChartComponent id='charts' primaryXAxis={{ interval: 1, valueType: 'Category' }} primaryYAxis={{ title: 'Expense', minimum: 0, maximum: 400, interval: 100, labelFormat: '${value}' }}>
        <Inject services={[StackingLineSeries, Legend, Tooltip, DataLabel, Category]} />
        <SeriesCollectionDirective>
            <SeriesDirective dataSource={chartData} xName='x' yName='y' name='John' width='2' type='StackingLine' marker={{ visible: true }} dashArray='5,1'>
            </SeriesDirective>
            <SeriesDirective dataSource={chartData} xName='x' yName='y1' name='Peter' width='2' type='StackingLine' marker={{ visible: true }} dashArray='5,1'>
            </SeriesDirective>
            <SeriesDirective dataSource={chartData} xName='x' yName='y2' name='Steve' width='2' type='StackingLine' marker={{ visible: true }} dashArray='5,1'>
            </SeriesDirective>
            <SeriesDirective dataSource={chartData} xName='x' yName='y3' name='Charle' width='2' type='StackingLine' marker={{ visible: true }} dashArray='5,1'>
            </SeriesDirective>
        </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default StackedLine;