import React from 'react'
import {AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, 
  Inject, PieSeries,AccumulationLegend,AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Pie = () => {
  const {currentMode} = useStateContext();

  return (
    <AccumulationChartComponent
    id="pie-chart"
    height = "420px"
    chartArea={{border: {width:0}}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
      <Inject services = {[PieSeries,AccumulationLegend,AccumulationTooltip, AccumulationDataLabel]} />
      <AccumulationSeriesCollectionDirective>
      <AccumulationSeriesDirective  dataSource={pieChartData} xName='x' yName='y' type='Pie'/>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie