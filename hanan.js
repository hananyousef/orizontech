var xValues = [100,200,300,400,500,600,700,800,900,1000];
var yValues = [1,2,3,4,5,6,7,8,9,10,11,12];
new Chart("myChart", {
  type: "line",
  data: {
    labels: yValues,
    datasets: [{
      data: [1,4,3,9,2,6,4,8,2,5,3],
      borderColor: "#75F3E4",
      fill: false
    
    },{
      data: [12,4,7,2,8,4,7,4,2,8,6,4],
      borderColor: "#43366E",
      fill: false
    }]
  },
  options: {
    legend: {display: false},
    scales: {
        y: {
            beginAtZero: true,
            max: 100
        }
    }
  },
  
  
});

var xValues = ["12 Oct", "12 Oct", "12 Oct", "19 Oct", "26 Oct", "03 Nov", "10 Nov", "17 Nov", "24 Nov"];
var yValues = [55, 49, 44, 24, 15, 20, 12, 34, 20];
var barColors = ["#75F3E4", "#43366E","#75F3E4","#43366E","#75F3E4", "#43366E", "#75F3E4", "#43366E", "#75F3E4"];

new Chart("boxchart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {


    
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                }
            }]
        }
    ,
      
    legend: {display: false},
    title: {
      display: true
    }
  },
  
});
