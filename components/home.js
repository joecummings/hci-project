var gaugeChart = AmCharts.makeChart("chartdiv", {
  "type": "gauge",
  "theme": "dark",
  "axes": [{
    "axisAlpha": 0,
    "tickAlpha": 0,
    "labelsEnabled": false,
    "startValue": 0,
    "endValue": 100,
    "startAngle": 0,
    "endAngle": 270,
    "bands": [{
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "100%",
      "innerRadius": "85%"
    }, {
      "color": "#84b761",
      "startValue": 0,
      "endValue": 80,
      "radius": "100%",
      "innerRadius": "85%",
      "balloonText": "90%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "80%",
      "innerRadius": "65%"
    }, {
      "color": "#fdd400",
      "startValue": 0,
      "endValue": 35,
      "radius": "80%",
      "innerRadius": "65%",
      "balloonText": "35%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "60%",
      "innerRadius": "45%"
    }, {
      "color": "#cc4748",
      "startValue": 0,
      "endValue": 92,
      "radius": "60%",
      "innerRadius": "45%",
      "balloonText": "92%"
    }, {
      "color": "#eee",
      "startValue": 0,
      "endValue": 100,
      "radius": "40%",
      "innerRadius": "25%"
    }, {
      "color": "#67b7dc",
      "startValue": 0,
      "endValue": 68,
      "radius": "40%",
      "innerRadius": "25%",
      "balloonText": "68%"
    }]
  }],
  "allLabels": [{
    "text": "Joe C",
    "x": "49%",
    "y": "5%",
    "size": 15,
    "bold": true,
    "color": "#84b761",
    "align": "right"
  }, {
    "text": "Shu",
    "x": "49%",
    "y": "15%",
    "size": 15,
    "bold": true,
    "color": "#fdd400",
    "align": "right"
  }, {
    "text": "Christoph",
    "x": "49%",
    "y": "24%",
    "size": 15,
    "bold": true,
    "color": "#cc4748",
    "align": "right"
  }, {
    "text": "Joe Ch",
    "x": "49%",
    "y": "33%",
    "size": 15,
    "bold": true,
    "color": "#67b7dc",
    "align": "right"
  }],
  "export": {
    "enabled": true
  }
});

id = sessionStorage.userid;
var chart = AmCharts.makeChart("bardiv",
{
    "type": "serial",
    "theme": "dark",
    "dataProvider": [{
        "name": "Me",
        "points":   sessionStorage.getItem('points'+id),
        "color": "#7F8DA9",
        "bullet": "https://scontent-ort2-1.xx.fbcdn.net/v/t31.0-8/28337442_1294268390719867_4810829379562380624_o.jpg?oh=bfa15cfe858b85ccda6f7c6a318f0d05&oe=5B3D4018"
    }],
    "valueAxes": [{
        "maximum": 100,
        "minimum": 0,
        "axisAlpha": 0,
        "dashLength": 0,
        "position": "left"
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<span style='font-size:13px;'>[[category]]: <b>[[value]]</b></span>",
        "bulletOffset": 10,
        "bulletSize": 75,
        "colorField": "color",
        "cornerRadiusTop": 8,
        "customBulletField": "bullet",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "type": "column",
        "valueField": "points"
    }],
    "marginTop": 0,
    "marginRight": 0,
    "marginLeft": 0,
    "marginBottom": 0,
    "autoMargins": false,
    "categoryField": "name",
    "categoryAxis": {
        "axisAlpha": 0.0,
        "gridAlpha": 0.0,
        "inside": true,
        "tickLength": 0
    },
    "export": {
    	"enabled": false
     }
});
