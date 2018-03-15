var id = sessionStorage.userid;
var choreslist = sessionStorage.getItem('todo' + id);
var checkedchores = sessionStorage.getItem('tododone' + id);
var houseid = sessionStorage.getItem('house' + id);
var rms = sessionStorage.getItem(houseid).split(',');

// get data for progress bar
for (var i = 0; i < rms.length; i++) {
  rms[i];
}

if (choreslist) {
  choreslist = choreslist.split(',');
  choreslist = choreslist.length;
} else {
  choreslist = 1;
}
if (checkedchores) {
  checkedchores = checkedchores.length;
} else {
  checkedchores = 0;
}
var ratio = checkedchores/choreslist;
if (ratio < (1/3)) {
  color = 'yellow';
} else if (ratio < (2/3)) {
  color = 'orange';
} else {
  color = 'green';
}

// setup progress bar
function progressBar() {

  var height = 15,
  segmentWidth = 875,
  roundedCorners = 10,
  backgroundFill = 'lightgray',
  state = 'started';


  function bar(selection) {

    selection.each(function(data) {

      svg.append('rect')
      .attr('class', 'bg-rect')
      .attr('rx', roundedCorners)
      .attr('ry', roundedCorners)
      .attr('fill',  backgroundFill)
      .attr('height', height)
      .attr('width', segmentWidth)
      .attr('x', 0);

      var progress = svg.append('rect')
      .attr('class', 'progress-rect')
      .attr('fill', function() {
        return color;
      })
      .attr('height', height)
      .attr('width', 0)
      .attr('rx', roundedCorners)
      .attr('ry', roundedCorners)
      .attr('x', 0);

      progress.transition()
      .duration(1000)
      .attr('width', function() {
        return ratio * 875;
      });

    });

  }

  return bar;
}


var svg = d3.select('.progress')
.append('svg')
.attr('height', 100)
.attr('width', 875);
var bar = progressBar()
svg.call(bar);

// setup pie chart
var ctx = document.getElementById('myChart').getContext('2d');
var pie = new Chart(ctx, {
  // The type of chart we want to create
  type: 'pie',

  // The data for our dataset
  data: {
    labels: [],
    datasets: [{
      backgroundColor: [],
      data: [],
    }]
  },

  options: {
    legend: {
      position: 'bottom',
    }
  }
});

function addData(chart, label, data, color) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
    dataset.data.push(data);
    dataset.backgroundColor.push(color);
  });
  chart.update();
}

var colorList = ['indigo', 'purple', 'blue', 'teal', 'maroon', 'navy', 'lavender'];

// load piechart with point stats
function loadpie() {
  var points;
  var tpoints = 0;
  var name;
  var color;
  for (var i = 0; i < rms.length; i++) {
    tpoints = tpoints + Number(sessionStorage.getItem('points'+rms[i]));
  }
  if (tpoints == 0) {
    addData(pie, 'No points earned yet', 1, 'Grey');
  } else {
    for (var i = 0; i < rms.length; i++) {
      points = Number(sessionStorage.getItem('points'+rms[i]));
      name = sessionStorage.getItem('name'+rms[i]);
      color = colorList[i % colorList.length];
      addData(pie, name, points, color);
    }
  }
}

loadpie();

// make tooltips hoverable
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
