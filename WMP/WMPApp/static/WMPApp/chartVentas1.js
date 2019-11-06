var speedData = {
    labels: ["07/2019", "08/2019" ,"09/2019"],

    datasets: [{
        label: "Desempeño",
        borderColor: 'red',
        backgroundColor: '#FFCCCB',
        data: [2.1, 2.3, 2.2],
    }]
};

var chartOptions = {
    legend: {
        display: true,
        position: 'bottom',
        labels: {
            boxWidth: 5,
            fontColor: 'black'
        }
    }
};

var lineChart = new Chart(document.getElementById("line-chart1"), {
    type: 'line',
    data: speedData,
    options: chartOptions
});
