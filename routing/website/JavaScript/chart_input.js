function ChartInput(data){
  this.type = "line";
  this.data = data;
  this.options = {hover: {mode: 'label'}};
}

function Data(labels, datasets){
  this.labels = labels;
  this.datasets = datasets;
}

function DatasetCurrent(label, data){
  this.label = label;
  this.fill = false;
  this.lineTension = 0.1;
  this.backgroundColor = "rgba(75,192,192,0.4)";
  this.borderColor = "rgba(75,192,192,1)";
  this.borderCapStyle = 'butt';
  this.borderDash = [];
  this.borderDashOffset = 0.0;
  this.borderJoinStyle = 'mitter';
  this.pointBorderColor = "rgba(75,192,192,1)";
  this.pointBackgroundColor = "#fff";
  this.pointBorderWidth = 1;
  this.pointHoverRadius = 5;
  this.pointHoverBackgroundColor = "rgba(75,192,192,1)";
  this.pointHoverBorderColor = "rgba(220,220,220,1)";
  this.pointHoverBorderWidth = 2;
  this.pointRadius = 1;
  this.pointHitRadius = 10;
  this.data = data;
  this.spanGaps = false;
}

function DatasetFuture(label, data){
  this.label = label;
  this.fill = false;
  this.lineTension = 0.1;
  this.backgroundColor = "rgba(255,99,132,0.4)";
  this.borderColor = "rgba(255,99,132,1)";
  this.borderCapStyle = 'butt';
  this.borderDash = [];
  this.borderDashOffset = 0.0;
  this.borderJoinStyle = 'mitter';
  this.pointBorderColor = "rgba(255,99,132,1)";
  this.pointBackgroundColor = "#fff";
  this.pointBorderWidth = 1;
  this.pointHoverRadius = 5;
  this.pointHoverBackgroundColor = "rgba(255,99,132,1)";
  this.pointHoverBorderColor = "rgba(220,220,220,1)";
  this.pointHoverBorderWidth = 2;
  this.pointRadius = 1;
  this.pointHitRadius = 10;
  this.data = data;
  this.spanGaps = false;
}
