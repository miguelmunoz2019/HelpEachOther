var speedData = {
    labels: ["12/2018", "01/2019", "02/2019", "03/2019", "04/2019", "05/2019", "06/2019", "07/2019", "08/2019" ,"09/2019"],

    datasets: [{
        label: "Desempeño",
        borderColor: 'green',
        backgroundColor: 'lightgreen',
        data: [3.5, 3.7, 3.6, 3.9, 4.2, 4.3, 4.4, 4.3, 4.5, 4.6],
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

var lineChart = new Chart(document.getElementById("line-chart0"), {
    type: 'line',
    data: speedData,
    options: chartOptions
});
