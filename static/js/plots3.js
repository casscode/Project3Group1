// Create our first trace
var trace1 = {
  x: years,
  y: fatalities,
  name: 'Total Fatalities',
  type: "bar"
};

// Create our second trace
var trace2 = {
  x: years,
  y: rates,
  name: 'Rate',
  yaxis: 'y2',
  type: "scatter"
};

// The data array consists of both traces
var data = [trace1, trace2];

var layout = {
  title: 'Total Fatalities vs. Fatalitly Rate Per Year',
  yaxis: {title: 'Total Fatalities'},
  xaxis: {title: 'Year'},
  yaxis2: {
    title: 'Fatalitly Rate',
    titlefont: {color: 'rgb(148, 103, 189)'},
    tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right'
  }
};

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data, layout);
