import React from 'react'
import { Grid, Segment, Tab, Label, Header  } from 'semantic-ui-react'



   

const DemoSection = function (props) {

    const panes = [
        { menuItem: `${props.chartname} `, render: () => <Tab.Pane> {props.chart} </Tab.Pane> },
        { menuItem: 'See The Code', render: () => <Tab.Pane>{props.code}</Tab.Pane> }
    ]


    return (


        <Segment  piled>
           <Header as='h3' content={props.chartname} />
           <Grid column={6} centered>
                <Grid.Row>
                    {props.chart}
                </Grid.Row>
            </Grid>
            <Label size='small'>
                Source of data used: '{props.source}'
            </Label>
        </Segment>

    )
}


export default DemoSection
