import React, {Component} from 'react';
import * as d3 from d3;


export default class TreeChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [

                {"name": "ProjectA",   "parent": ""},
                {"name": "ApplicationA",  "parent": "ProjectA"},
                {"name": "EnvironmentB",  "parent": "ProjectA"},

                {"name": "TierC",  "parent": "ApplicationA"},
                {"name": "TierD",  "parent": "ApplicationA"},
                {"name": "TierE",  "parent": "ApplicationA"},

                {"name": "ServiceF",  "parent": "EnvironmentB"},

                {"name": "ContainerG", "parent": "TierE"},
                {"name": "ContainerH", "parent": "TierE"}

            ]
        }
    } //end of contructor_function

    componentDidMount(){
        const width = 700,
              height = 500;

        const chart = d3.select(this.chartRef)
            .attr('width', width+100)
            .attr('height', height)
            .append('g')
                .attr('transform', 'translate(100, 0)')



    }

}
