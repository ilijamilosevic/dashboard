import React from 'react'
import { ChartComponent,DateTime,
  Inject,SeriesCollectionDirective, SeriesDirective, CandleSeries,Category, Tooltip, Zoom, Crosshair } from '@syncfusion/ej2-react-charts'
  import { financialChartData,FinancialPrimaryXAxis,FinancialPrimaryYAxis} from '../../data/dummy'
  import { Header } from '../../components'
  import { useStateContext } from '../../contexts/ContextProvider'

const Financial = () => {
  const {currentMode} = useStateContext();
  return (
    
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Financial chart" />
      <div className="w-full">
      <ChartComponent
        id="financial-chart"
        height = "420px"
        primaryXAxis = {FinancialPrimaryXAxis}
        primaryYAxis = {FinancialPrimaryYAxis}
        chartArea={{border: {width:0}}}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}>
          <Inject services = {[CandleSeries,DateTime,Category, Tooltip, Zoom, Crosshair]} />
          <SeriesCollectionDirective>
          { <SeriesDirective dataSource={financialChartData} xName='x' yName='low' name='SHIRPUR-G' enableSolidCandles = 'true' type='Candle' low='low' high='high' open='open' close='close'/> }
          </SeriesCollectionDirective>
    </ChartComponent>
      </div>
      </div>
  )
}

export default Financial