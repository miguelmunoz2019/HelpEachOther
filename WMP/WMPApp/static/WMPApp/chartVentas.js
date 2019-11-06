var speedData = {
    labels: ["03/2019", "04/2019", "05/2019", "06/2019", "07/2019", "08/2019" ,"09/2019"],

    datasets: [{
        label: "Desempeño",
        borderColor: 'orange',
        backgroundColor: '#FFCF9E',
        data: [4.1, 4.3, 4.3, 4.4, 4.1, 3.9, 3.7],
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

var lineChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: speedData,
    options: chartOptions
});
