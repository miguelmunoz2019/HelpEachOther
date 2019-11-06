var marksData = {
    labels: ["Actitud", "Desempeño", "Presentacion", "Respeto", "Equipo", "Conocimiento"],
    datasets: [{
        label: "Equipo",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: [4.5, 4.2, 4.5, 4.7, 4.8, 4.3]
    }, {
        label: "Pedro Rodriguez",
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [2.3, 2.7, 4, 2.5, 2.6, 2.8]
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

var radarChart = new Chart(document.getElementById("radar-chart1"), {
    type: 'radar',
    data: marksData,
    options: chartOptions
});
