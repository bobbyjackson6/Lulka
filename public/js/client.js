var socket = io("http://localhost:3000");
socket.on("firstCamera", function (message) {
  var el = document.getElementById("video-1");
  el.src = "" + message;
});
socket.on("secondCamera", function (message) {
  var el2 = document.getElementById("video-2");
  el2.src = "" + message;
});

var smoothie1 = new SmoothieChart({
  maxValue: 38,
  minValue: 35,
  grid: {
    strokeStyle: "rgba(125, 0, 0, 0)",
    fillStyle: "rgba(60, 0, 0, 0.1)",
    lineWidth: 1,
    millisPerLine: 250,
    verticalSections: 10
  },
  labels: {
    fillStyle: "rgb(60, 0, 0)"
  }
});
var smoothie2 = new SmoothieChart({
  maxValue: 35,
  minValue: 28,
  grid: {
    strokeStyle: "rgba(125, 0, 0, 0)",
    fillStyle: "rgba(60, 0, 0, 0.1)",
    lineWidth: 1,
    millisPerLine: 250,
    verticalSections: 10
  },
  labels: {
    fillStyle: "rgb(60, 0, 0)"
  }
});
var smoothie3 = new SmoothieChart({
  maxValue: 140,
  minValue: 100,
  grid: {
    strokeStyle: "rgba(125, 0, 0, 0)",
    fillStyle: "rgba(60, 0, 0, 0.1)",
    lineWidth: 1,
    millisPerLine: 250,
    verticalSections: 10
  },
  labels: {
    fillStyle: "rgb(60, 0, 0)"
  }
});
var smoothie4 = new SmoothieChart({
  grid: {
    strokeStyle: "rgba(125, 0, 0, 0)",
    fillStyle: "rgba(60, 0, 0, 0.1)",
    lineWidth: 1,
    millisPerLine: 250,
    verticalSections: 10
  },
  labels: {
    fillStyle: "rgb(60, 0, 0)"
  }
});
smoothie1.streamTo(document.getElementById("mycanvas-1"), 1000 /*delay*/ );
smoothie2.streamTo(document.getElementById("mycanvas-2"), 1000 /*delay*/ );
smoothie3.streamTo(document.getElementById("mycanvas-3"), 1000 /*delay*/ );
smoothie4.streamTo(document.getElementById("mycanvas-4"), 2000 /*delay*/ );
// Data
var line1 = new TimeSeries();
var line2 = new TimeSeries();
var line3 = new TimeSeries();
var line4 = new TimeSeries();

// Breathing chart
var counter = 0;
let toparray = [29.3, 30.8, 32, 32.5, 33, 33.2, 33.3, 33.4, 33.4, 33.5];
var y = 28;
const e = 12,
  R = 1.5,
  C = 2;
var U = 1;
var time = 0;

function cond() {
  y = toparray[counter];
  counter++;
  if (counter == toparray.length) {
    counter = 0;
    toparray.reverse();
  }
  return y;
}

// Add a random value to each line every second
setInterval(function () {
  line1.append(new Date().getTime(), Math.random() * (37 - 36) + 36);
}, 1000);
setInterval(function () {
  line2.append(new Date().getTime(), cond());
}, 133);
setInterval(function () {
  line3.append(new Date().getTime(), Math.random() * (132 - 129) + 129);
}, 1000);
setInterval(function () {
  line4.append(new Date().getTime(), Math.random());
}, 2000);

// Add to SmoothieChart
smoothie1.addTimeSeries(line1, {
  strokeStyle: "rgb(145, 124, 116)",
  fillStyle: "rgba(145, 124, 116, 0.4)",
  lineWidth: 3
});
smoothie2.addTimeSeries(line2, {
  strokeStyle: "rgb(145, 124, 116)",
  fillStyle: "rgba(145, 124, 116, 0.4)",
  lineWidth: 3
});
smoothie3.addTimeSeries(line3, {
  strokeStyle: "rgb(145, 124, 116)",
  fillStyle: "rgba(145, 124, 116, 0.4)",
  lineWidth: 3
});
smoothie4.addTimeSeries(line4, {
  strokeStyle: "rgb(145, 124, 116)",
  fillStyle: "rgba(145, 124, 116, 0.4)",
  lineWidth: 3
});


const power = {
  name: 'power',
  action: [1, 0]
}

let power_counter = 0,
  left_right_counter = 0,
  up_down_counter = 0,
  magic_fly_counter = 0;

const left_right = {
  name: 'left_right',
  action: [4, 5]
}

const up_down = {
  name: 'up_down',
  action: [2, 3]
}


const magic_fly = {
  name: 'magic_fly',
  action: [6, 7]
}


function on_off() {
  socket.emit("power", `${power.action[power_counter]}`);
  power_counter++;
  if (power_counter > 1) {
    power_counter = 0;
  }
  console.log(power.action[power_counter])
}

function left_right_move() {
  socket.emit("left_right", `${left_right.action[left_right_counter]}`);
  left_right_counter++;
  if (left_right_counter > 1) {
    left_right_counter = 0;
  }
  console.log(left_right.action[left_right_counter])
}

function up_down_move() {
  socket.emit("up_down", `${up_down.action[up_down_counter]}`);
  up_down_counter++;
  if (up_down_counter > 1) {
    up_down_counter = 0;
  }
  console.log(up_down.action[up_down_counter])
}

function magic_fly_move() {
  socket.emit("magic_fly", `${magic_fly.action[magic_fly_counter]}`);
  magic_fly_counter++;
  if (magic_fly_counter > 1) {
    magic_fly_counter = 0;
  }
  console.log(magic_fly.action[magic_fly_counter])
}