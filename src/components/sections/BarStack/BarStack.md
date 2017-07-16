```js
import React from 'react'
import { BarStackChart } from 'react-d3-basic'
import * as d3 from 'd3'

import topPerCap from '../../../data/Top.json'



 const  width = 1200,
 
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
                        <BarStackChart data={topPerCap} width={width} height={height}
                                       chartSeries={chartSeries} x={country}
                                       xScale={xScale} yTickFormat={yTickFormat} />
            )

        } 

export default BarStack
```
