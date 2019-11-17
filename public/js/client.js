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
smoothie4.streamTo(document.getElementById("mycanvas-4"), 1000 /*delay*/ );
// Data
var line1 = new TimeSeries();
var line2 = new TimeSeries();
var line3 = new TimeSeries();
var line4 = new TimeSeries();

// Add a random value to each line every second
setInterval(function () {
    line1.append(new Date().getTime(), Math.random());
}, 1000);
setInterval(function () {
    line2.append(new Date().getTime(), Math.random());
}, 1000);
setInterval(function () {
    line3.append(new Date().getTime(), Math.random());
}, 1000);
setInterval(function () {
    line4.append(new Date().getTime(), Math.random());
}, 1000);

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