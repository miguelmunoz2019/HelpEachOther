r1=3+Math.random()
r2=3+Math.random()
r3=4+Math.random()
r4=4+Math.random()
r5=4+Math.random()
r6=3+Math.random()

var speedData = {
    labels: ["07/2019", "08/2019" ,"09/2019"],

    datasets: [{
        label: "Desempeño",
        borderColor: 'red',
        backgroundColor: '#FFCCCB',
        data: [r1,r2,r3,r4,r5,r6],
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
