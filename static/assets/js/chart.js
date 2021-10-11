  // グラフ
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '10/01',
        '10/02',
        '10/03',
        '10/04',
        '10/05',
        '10/06',
        '10/07',
        '10/08',
        '10/09',
        '10/10'
      ],
      datasets: [{
        label:'売上予測',
        data: [
          153390,
          213459,
          184833,
          240032,
          234895,
          240924,
          240032,
          234897,
          240929,
          280348
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 2,
        pointBackgroundColor: '#007bff',
        hoverRadius: 5
       
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false,
          }
        }]
      },
      legend: {
        display: false
      },
      
    
      tooltips:{
        callbacks:{
            label: function(tooltipItems, data) {
                if(tooltipItems.yLabel == "0"){
                    return "";
                }
                return data.datasets[tooltipItems.datasetIndex].label + "：" + tooltipItems.yLabel + "個";
            }
        }
      }
    }
  })