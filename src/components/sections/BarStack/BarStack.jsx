import React from 'react'
import { BarStackTooltip } from 'react-d3-tooltip'
import * as d3 from 'd3'

import topPerCap from '../../../data/Top.json'



 const  width = 1000,
 
        height = 600,
        chartSeries = [
            {
                name: 'GDP per capita (current Intl. $)',
                field: 'GDP per capita (current Intl. $)',
            },
            {
                name: 'GDP per person employed (current Intl. $)',
                field: 'GDP per person employed (current Intl. $)',
            },
        ],
        country = d => d.Country,
        xScale = 'ordinal',
        yTickFormat = d3.format('.2s')


        const BarStack = function () {

            return (
                        <BarStackTooltip data={topPerCap} title='Top Countries GDP per capita of employed' width={width} height={height}
                                       chartSeries={chartSeries} x={country}
                                       xScale={xScale} yTickFormat={yTickFormat} color={false} />
            )

        } 




export default BarStack

