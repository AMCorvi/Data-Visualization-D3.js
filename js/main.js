/* ******   Data Value and Data Creation functions ***** */


// Create Array for bar chart data
let barData = Array;

// Define function to create randomized amount of data
let createDataPoints = (amount, max)=>{

    // Determine whether datapoint is greater then max and 
    //   and decrease if  that is the case. 
    if (max > 100) { max = max * .80; 
        return max;
    };

    barData = Array.apply(null, new Array(amount) ) 
    barData = barData.map(el => {
      return   Math.floor( Math.random()*100 )       
    });


    return barData;
};

createDataPoints(Math.floor(Math.random()*100+5),82);
// Remove
console.log(barData)

// Pie chart datapoints

let pieChartData = [
    {
        label: "Bell",
        value: 33
    },
    {
        label: "Biv",
        value: 33
    },
    {
        label: "Devoe",
        value: 33
    },
]
// That girl is ...... ok now back to work!!!! 


// Data display specifications
//
let height = 400,
    width = 400,
    barWidth = 50,
    barOffset = 5,
    nodeWidth = 5,
    radius = 200;

// Linear scale allow data not to exceed maximum 
let yScale = d3.scale.linear()
                .domain([0, d3.max(barData)])
                .range([0, height])

// Distribute all data across the x-axis evenly
let xScale = d3.scale.ordinal()
                .domain( d3.range(0, barData.length) )
                .rangeBands([ 0, width ])

// Assign color of data-point relative to max and min
let colors = d3.scale.linear()
                .domain( [ 0 , d3.max(barData)*.25, d3.max(barData)*.50, d3.max(barData)*.75, d3.max(barData) ])
                .range(['#FFCB03', '#B222B2', '#2222B2', '#22B2B2', '#22B222'])


// Colors for pie chart
let pieColors = d3.scale.category10();

// Adding tooltips
let tooltip = d3.select('body').append('div')
        .style('position', 'absolute')
        .style('padding', '0 10px')
        .style('background', 'white')
        .style('opacity', 0)

 /* ***** Visualization ***** */

let barChart = d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .selectAll('rect').data(barData)
    .enter().append('rect')
        .style('fill', colors)
        .attr('width', xScale.rangeBand())
        .attr('height', (data)=> {
            return 0 ;  
        })
        .attr('x', (data, index)=> {
            return xScale(index) ; 
        })
        .attr('y', (data)=> {
            return  height 
        })
    .on('mouseover', function(data){
        tooltip.transition()
            .style('opacity', .9)

        tooltip.html(data)
            .style('color', 'firebrick')
            .style('left', (d3.event.pageX - 35) + 'px')
            .style('top',  (d3.event.pageY - 30) + 'px')

        d3.select(this)
            .style('opacity', '.3') 
    })
    .on('mouseout', function(data){

        tooltip.html(null)

        d3.select(this)
            .style('opacity', '1') 
    })
    
// Animate chart
barChart.transition()
    .attr('height', (data)=> {
            return yScale(data);  
        })
    .attr('y', (data)=> {
            return  height - yScale(data);
        })
    .delay((data, index)=>{
        return index * 20 ;
    })
    .duration(800)
    .ease('elastic')


/* ****** Pie Chart ***** */

let pie = d3.layout.pie()
            .value((data)=>{
                return data.value;
            })

let arc = d3.svg.arc()
            .outerRadius(radius)

let pieChart = d3.select('#pieChart').append('svg')
            .attr('width', width)
            .attr('height', height)
            .append('g')
                .attr('transform', `translate(${width - radius}, ${height - radius})`)
                .selectAll('path').data(pie(pieChartData))
                .enter().append('g')
                    .attr('class' , 'slice')

let slices = d3.selectAll('g.slice')
            .append('path')
            .attr('fill', (data, index)=>{
                    return pieColors(index)
                })
            .attr('d', arc)

let text  = d3.selectAll('g.slice')
            .append('text')
            .text(function(data,index){
                    return data.data.label
                 })
            .attr('text-anchor', 'middle')
            .attr('transform', (data)=>{
                data.innerRadius = 0;
                data.outerRadius = radius;
                return `translate(${arc.centroid(data)})`
            })




/* ***** Force Node Visualization ***** */
let nodes = [
        { name: "Bacon"},
        { name: "Person 1", target:[0] },
        { name: "Person 2", target:[1] },
        { name: "Person 3", target:[2] },
        { name: "Person 4", target:[0, 1, 2, 3] },
        { name: "Person 5", target:[3] }
]

let links = [];

for (var i = 0; i<nodes.length; i++){
    if (nodes[i].target !==undefined){
        for (var x = 0; x<nodes[i].target.length; x++){
            links.push(
                {
                source: node[i],
                target: nodes[i].target[x]
                }
            )
        }
    }
}


let nodeChart = d3.select('#nodeChart')
            .append('svg')
            .attr('width' , width)
            .attr('height', height)

let force = d3.layout.force()
        .nodes(nodes)
        .links([])
        .charge(-1000)
        .size(width, height)

let link = nodeChart.selectAll('line')
        .data(links).enter().append('line')
        .attr('stroke', 'white')

let node = nodeChart.selectAll('circle')
        .data(nodes).enter()
        .append('g')
        .call(force.drag);

node.append('circle')
    .attr('cx', (d)=>{
        return d.x;
    })
    .attr('cy', (d)=>{
        return d.y;
    })
    .attr('r', nodeWidth )
    
force.on('tick', (event)=>{
    node.attr('transform', (data, index)=>{
        return `translate(${d.x}, ${d.y})` ; 
    })
})

force.start()
