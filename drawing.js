const BACKGROUND_COLOR = "#000";
const LINE_COLOR = "#fff";
const LINE_WIDTH = 15;

var Current_X = 0;
var Current_Y = 0;
var Previous_X = 0;
var Previous_Y = 0;

var canvas;
var context;

var isPainting = false;

function prepareCanvas() {

    console.log('Preparing Canvas');

     canvas = document.getElementById('my_canvas');
     context = canvas.getContext('2d');

    context.fillStyle = 'BACKGROUND_COLOR';
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    context.strokeStyle = LINE_COLOR;

    document.addEventListener('mousedown', function (event) {

        // console.log('X Co-ordinates', event.clientX);
        // console.log('Mouse Presses');
        isPainting = true;

        Current_X = event.clientX - canvas.offsetLeft;
        Current_Y = event.clientY - canvas.offsetTop;  


    });

    document.addEventListener('mouseup', function (event) {
        // console.log('Mouse is released!!')
        isPainting = false;

    });
    document.addEventListener('mousemove', function (event) {
        if (isPainting) {
            Previous_X = Current_X;
            Current_X = event.clientX - canvas.offsetLeft;
            Previous_Y = Current_Y;
            Current_Y = event.clientY - canvas.offsetTop;

            // console.log(`Current X:  ${Current_X}`);

            context.lineWidth = LINE_WIDTH;
            draw();
            context.lineJoin = 'round';
        }

    });

    canvas.addEventListener('mouseleave', function (event) {
        // console.log('Mouse is left!!')
        isPainting = false;

    });


    //Touch Events

    canvas.addEventListener('touchstart', function (event) {

        // console.log('X Co-ordinates', event.clientX);
        console.log('Touchdown!');
        isPainting = true;

        Current_X = event.touches[0].clientX - canvas.offsetLeft;
        Current_Y = event.touches[0].clientY - canvas.offsetTop;  


    });

    canvas.addEventListener('touchmove', function (event) {
        if (isPainting) {
            Previous_X = Current_X;
            Current_X = event.touches[0].clientX - canvas.offsetLeft;
            Previous_Y = Current_Y;
            Current_Y = event.touches[0].clientY - canvas.offsetTop;

            // console.log(`Current X:  ${Current_X}`);

            context.lineWidth = LINE_WIDTH;
            draw();
            context.lineJoin = 'round';
        }

    });

    canvas.addEventListener('touchend', function (event) {
        // console.log('Touch is released!!')
        isPainting = false;

    });

    canvas.addEventListener('touchcancel', function (event) {
        // console.log('Touch Cancel!!')
        isPainting = false;

    });
}


function draw() {
    context.beginPath();
    context.moveTo(Previous_X, Previous_Y);
    context.lineTo(Current_X, Current_Y);
    context.closePath();
    context.stroke();
}


function clearCanvas(){
    Current_X = 0;
    Current_Y = 0;
    Previous_X = 0;
    Previous_Y = 0;
    context.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

}

