var bart = document.getElementById("bar-chart");
var barChart = new Chart(bart, {
    type: 'bar',
    data: {
      labels: ["2015", "2016", "2017", "2018", "2019"],
      datasets: [
        {
          label: "Dolars",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Profit'
      }
    }
});
