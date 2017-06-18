module.exports = function(data) {
  var sum = [0, 0, 0, 0, 0], n = 0, results = [];

  for (; n < data.length; n++) {
    if (data[n][1] != null) {
      sum[0] += data[n][0];
      sum[1] += data[n][1];
      sum[2] += data[n][0] * data[n][0];
      sum[3] += data[n][0] * data[n][1];
      sum[4] += data[n][1] * data[n][1];
    }
  }

  var gradient = (n * sum[3] - sum[0] * sum[1]) / (n * sum[2] - sum[0] * sum[0]);
  var intercept = (sum[1] / n) - (gradient * sum[0]) / n;
  return {equation: [gradient, intercept]};
}
