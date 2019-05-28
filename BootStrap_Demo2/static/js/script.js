var lineChartData = {
  //X坐标数据
  labels: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  datasets: [
    {
      label:'会员人数',
      //统计表的背景颜色
      fillColor: "rgba(255,255,255,0)",
      //统计表画笔颜色
      strokeColor: "rgba(0,0,0,1)",
      //点的颜色
      piontColor: "rgba(155,39,39,1)",
      //点的边框的颜色
      pointStrokeColor: "#fff",
      //鼠标触发时的颜色
      pointHighlightFill: "#fff",
      //鼠标触发时点边框的颜色
      pointHighlightStroke: "rgba(220,220,220,1)",
      //Y坐标的数据
      data: [111,123,145,133,149,123,166]
    },
    {
      label:'注册人数',
      //统计表的背景颜色
      fillColor: "#rgba(255,255,255,0)",
      //统计表画笔颜色
      strokeColor: "rgba(92,184,92,1)",
      //点的颜色
      piontColor: "rgba(23,126,23,1)",
      //点的边框的颜色
      pointStrokeColor: "#fff",
      //鼠标触发时的颜色
      pointHighlightFill: "#fff",
      //鼠标触发时点边框的颜色
      pointHighlightStroke: "rgba(151,187,205,1)",
      //Y坐标的数据
      data: [23,33,24,55,45,47,50]
    }

  ]
}

window.onload = function(){
  var ctx = document.getElementById("canvas").getContext("2d");
  // window.myLine = new Chart(ctx).Line(lineChartData,{
  window.myLine = Chart.Line(ctx,{
    data:lineChartData,
    responsive:true
  });
}


// // 下面是柱状图
// var ctx = document.getElementById('canvas').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['周一', '周二', '周三', '周四', '周五', '周六',"周日"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3,4],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     }
// });