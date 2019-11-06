var marksData = {
    labels: ["Actitud", "Desempeño", "Presentacion", "Respeto", "Equipo", "Conocimiento"],
    datasets: [{
        label: "Equipo",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: [4.5, 4.2, 4.5, 4.7, 4.8, 4.3]
    }, {
        label: "Jonathan Triana",
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [4.7, 4, 4.5, 4.5, 4.6, 4.8]
    }]
};

var chartOptions = {
    scale: {
        ticks: {
            beginAtZero: true,
            min: 1,
            max: 5,
            stepSize: 1
        },
        pointLabels: {
            fontSize: 18
        }
    },
    legend: {
        position: 'left'
    }
};

var radarChart = new Chart(document.getElementById("radar-chart0"), {
    type: 'radar',
    data: marksData,
    options: chartOptions
});
