var smoothie_1 = new SmoothieChart({
  maxValue: 35,
  minValue: 28
});
smoothie_1.streamTo(document.getElementById("mycanvas-1"), 1000);
var line1 = new TimeSeries();

var counter = 0;
let toparray = [29.3, 30.8, 32, 32.5, 33, 33.2, 33.3, 33.4, 33.4, 33.5];
var y = 28;
var e = 12,
  R = 1.5,
  C = 2;
var U = 1;
var time = 0;
function getTim() {
  time = new Date().getTime();

  return time;
}
function breathe() {
  getTim();
  U = e * (1 - Math.exp(-(time / (R * C))));

  return U;
}

setInterval(function() {
  line1.append(new Date(), cond());
}, 133);

smoothie_1.addTimeSeries(line1);

function cond() {
  y = toparray[counter];
  console.log(y);
  counter++;
  console.log(counter);
  if (counter == toparray.length) {
    counter = 0;
    toparray.reverse();
    console.log(toparray);
  }
  return y;
}

// Canvas-2

var smoothie_2 = new SmoothieChart({
  maxValue: 38,
  minValue: 35
});
smoothie_2.streamTo(document.getElementById("mycanvas-2"), 1000);
var line2 = new TimeSeries();
setInterval(function() {
  line2.append(new Date().getTime(), Math.random() * (37 - 36) + 36);
}, 1000);

smoothie_2.addTimeSeries(line2);
