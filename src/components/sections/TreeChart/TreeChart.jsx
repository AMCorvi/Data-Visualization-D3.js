import React, {Component} from 'react';
import * as d3 from 'd3';


export default class TreeChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [

                {"name": "Passeriformes",   "parent": ""},
                {"name": "Other Species",  "parent": "Passeriformes"},
                {"name": "Corvidae",  "parent": "Passeriformes"},

                {"name": "Corvus",  "parent": "Corvidae"},
                {"name": "Coloeus",  "parent": "Corvidae"},
                {"name": "Nucifraga",  "parent": "Corvidae"},
                {"name": "Pica",  "parent": "Corvidae"},
                {"name": "Garrulus",  "parent": "Corvidae"},

                {"name": "Corvus corax - Common Raven",  "parent": "Corvus"},
                {"name": "Corvus monedula - Jackdaw",  "parent": "Corvus"},
                {"name": "Corvus violaceus - Violet crow",  "parent": "Corvus"},
                {"name": "Corvus frugilegus - Rook",  "parent": "Corvus"},
                {"name": "Corvus nasicus - Cuban Raven",  "parent": "Corvus"}


            ]
        }
    } //end of contructor_function

    componentDidMount() {
        const width = 800,
              height = 600;

        const chart = d3.select(this.chartRef)
          .attr('width', width+100)
          .attr('height', height)
          .append('g')
            .attr('transform', 'translate(100, 0)');

        const tree = d3.tree()
          .size([height, width - 160]);

        const stratify = d3.stratify()
          .id((d) => {
            return d.name;
          })
          .parentId((d) => {
            return d.parent;
          });

        const root = stratify(this.state.data)
          .sort((a, b) => {
            return (a.height - b.height) || a.id.localeCompare(b.id);
          });

        const link = chart.selectAll('.link')
          .data(tree(root).links())
          .enter()
            .append('path')
              .attr('class', 'link')
              .attr("d", d3.linkHorizontal()
                .x((d) => {
                  return d.y;
                })
                .y((d) => {
                  return d.x;
                })
              );

        const node = chart.selectAll('.node')
          .data(root.descendants())
          .enter()
            .append('g')
              .attr("class", (d) => {
                return "node" + (d.children ? " node--internal" : " node--leaf");
              })
              .attr("transform", (d) => {
                return `translate(${d.y},${d.x})`;
              });

        node.append('circle')
          .attr('r', 2.5);

        node.append("text")
          .attr("dy", 10)
          .attr("x", (d) => {
            return d.children ? -8 : 8;
          })
          .style("text-anchor", (d) => {
            return d.children ? "end" : "start";
          })
          .text((d) => {
            return d.id;
          });

        console.log('root data:', root);
      }

      render() {
        return (
          <svg className="tree-chart-basic" ref={(r) => this.chartRef = r}></svg>
        );
      }

}
