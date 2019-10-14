var marksData = {
    labels: ["Actitud", "Desempeño", "Presentacion", "Respeto", "Equipo"],
    datasets: [{
        label: "Esperado",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: [90, 85, 90, 95, 90]
    }, {
        label: "Camilo",
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [88, 80, 89, 92, 85]
    }]
};

var chartOptions = {
    scale: {
        ticks: {
            beginAtZero: true,
            min: 50,
            max: 100,
            stepSize: 20
        },
        pointLabels: {
            fontSize: 18
        }
    },
    legend: {
        position: 'left'
    }
};

var radarChart = new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: marksData,
    options: chartOptions
});
