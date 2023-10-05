// Create our first trace
let trace1 = {
  x: years,
  y: fatalities,
  type: "scatter"
};

// Create our second trace
let trace2 = {
  x: years,
  y: rates,
  type: "scatter"
};

// The data array consists of both traces
let data = [trace1, trace2];

var layout = {
  title: 'Double Y Axis Example',
  yaxis: {title: 'yaxis title'},
  yaxis2: {
    title: 'yaxis2 title',
    titlefont: {color: 'rgb(148, 103, 189)'},
    tickfont: {color: 'rgb(148, 103, 189)'},
    overlaying: 'y',
    side: 'right'
  }
};

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data, layout);
