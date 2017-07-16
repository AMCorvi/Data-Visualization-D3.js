import React from 'react'
import { Grid, Segment, Tab  } from 'semantic-ui-react'



   

const DemoSection = function (props) {

    const panes = [
        { menuItem: `${props.chartname} `, render: () => <Tab.Pane> {props.chart} </Tab.Pane> },
        { menuItem: 'See The Code', render: () => <Tab.Pane>{props.code}</Tab.Pane> }
    ]


    return (


        <Segment  piled>
            <Grid column={6} centered>
                <Grid.Row>
                    {props.chart}
                </Grid.Row>
            </Grid>
        </Segment>

    )
}


export default DemoSection
