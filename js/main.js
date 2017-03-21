var barData = [ 13, 55, 75, 80, 14];

var height = 400,
    width = 600,
    barWidth = 50,
    barOffset = 5;

var yScale = d3.scale.linear()
                .domain([0, d3.max(barData)])
                .range([0, height])

var xScale = d3.scale.ordinal()
                .domain( d3.range(0, barData.length) )
                .rangeBands([ 0, width ])

var colors = d3.scale.linear()
                .domain( [ 0 , barData.length*.33, barData.length*66 d3.max(barData) ])
                .range(['red', 'orange', 'cyan', 'green'])

d3.select('#chart').append('svg')
    .attr('width', width)
    .attr('height', height)
    .style('background', '#C9D7D6')
    .selectAll('rect').data(barData)
    .enter().append('rect')
        .style('fill', colors)
        .attr('width', xScale.rangeBand())
        .attr('height', function(d) {
            return yScale(d);  
        })
        .attr('x', function(data, index) {
            return xScale(index) ; 
        })
        .attr('y', function(data) {
            return  height - yScale(data);
        })
