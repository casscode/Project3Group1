// Scatter Plot
const scatterData = [
    { x: [10, 15, 7, 3], y: [1, 2, 3, 4], mode: 'markers', type: 'scatter' }
];

const scatterLayout = { title: 'Scatter Plot' };

Plotly.newPlot('scatter', scatterData, scatterLayout);

// Pie Chart
const pieData = [{
    values: [25, 5, 70],
    labels: ['category A', 'Category B', 'Category C'],
    type: 'pie'
}];

const pieLayout = { title: 'Pie Chart' };

Plotly.newPlot('pie', pieData, pieLayout);

// Interactive Map using Leaflet
const map = L.map('map').setView([42.701848, -84.482171], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

L.marker([42.701848, -84.482171]).addTo(map)
    .bindPopup('Crash')
    .openPopup();
