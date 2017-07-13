import React,{ Component } from 'react'
import { Grid, Segment } from 'semantic-ui-react'
import { BarStackChart } from 'react-d3-basic'
import * as d3 from "d3"


import topPerCap from '../data/Top.json'




const styl = {
    bg: {
        background: "linear-gradient(to right, #642b73, #c6426e)"
    }
}

class PerCapita extends Component {

    render() {


            const width = 1200,
                  height = 600,
                  chartSeries = [ 
                      {
                          name: "GDP per capita (current Intl. $)",
                          field: "GDP per capita (current Intl. $)"
                      },
                      {
                          name: "GDP per person employed (current Intl. $)",
                          field: "GDP per person employed (current Intl. $)"
                      }
                  ],
                  country = d => d.Country,
                  xScale = 'ordinal',
                  yTickFormat = d3.format(".2s")

        return (

                      


            <Segment style={styl.bg} piled>
                <Grid column={3} centered>
                    <Grid.Row>

                      <BarStackChart

                          data= {topPerCap}
                          width= {width}
                          height= {height}
                          chartSeries = {chartSeries}
                          x= {country}
                          xScale= {xScale}
                          yTickFormat= {yTickFormat}

                       />  
                       
                    </Grid.Row>
                </Grid>
            </Segment>

        )
    }

}




export default PerCapita
