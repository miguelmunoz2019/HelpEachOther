r1=4+Math.random()
r2=4+Math.random()
r3=4+Math.random()
r4=4+Math.random()
r5=4+Math.random()
r6=3+Math.random()
var marksData = {
    labels: ["Actitud", "Desempeño", "Presentacion", "Respeto", "Equipo", "Conocimiento"],
    datasets: [{
        label: "Equipo",
        backgroundColor: "rgba(200,0,0,0.2)",
        data: [2, 3, 4.5, 4.7,4, 4.3]
    }, {
        label: "Nicolas Mesa",
        backgroundColor: "rgba(0,0,200,0.2)",
        data: [r1,r2,r3,r4,r5,r6]
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

var radarChart = new Chart(document.getElementById("radar-chart"), {
    type: 'radar',
    data: marksData,
    options: chartOptions
});
