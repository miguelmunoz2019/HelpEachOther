var speedData = {
    labels: ["10", "20", "30", "40", "50", "60" ,"70"],
    
    datasets: [{
        label: "Ventas",
        backgroundColor: 'green',
        data: [0, 59, 75, 20, 20, 55, 40],
    }]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'top',
        labels: {
            boxWidth: 80,
            fontColor: 'green'
        }
    }
};

var lineChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: speedData,
    options: chartOptions
});
