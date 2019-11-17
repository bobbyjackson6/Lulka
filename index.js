const express = require('express');
const socketIO = require('socket.io');
const path = require('path');
const http = require('http')

const publicPath = path.join(__dirname, '/public');
const port = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app)
const io = socketIO(server)


var image = [
    "http://pngimg.com/uploads/number1/number1_PNG14871.png",
    "http://pngimg.com/uploads/number2/Number%202%20PNG%20images%20free%20download_PNG14955.png",
    "http://pngimg.com/uploads/number3/number3_PNG15004.png",
    "http://pngimg.com/uploads/number4/number4_PNG15041.png"
];

app.use(express.static(publicPath))

io.sockets.on('connection', (socket) => {
    console.log('IO connection')
    var counter = 0;
    // When the client connects, they are sent a message
    var sending_image = function () {
        socket.emit("firstCamera", `${image[counter]}`);
        console.log(image[counter]);
        counter++;
        if (counter == image.length) {
            counter = 0;
        }
    };
    setInterval(sending_image, 300);
    var sending_image_2 = function () {
        socket.emit("secondCamera", `${image[counter-1]}`);
        console.log(image[counter]);
        counter++;
        if (counter == image.length) {
            counter = 0;
        }
    };
    setInterval(sending_image_2, 200);
})

server.listen(port, () => {
    console.log(`Server has been started on port ${port}...`)
})