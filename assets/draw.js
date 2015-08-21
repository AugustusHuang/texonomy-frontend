/* JavaScript */

var canvas, context, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

var x = "black",
    y = 4;

function init() {
    canvas = document.getElementById("can");
    context = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy("move", e)
    }, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy("down", e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy("up", e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy("out", e)
    }, false);
}

// Change the cursor shape to a circle when mouse over canvas.
function changeCursor () {
    document.getElementById("can").style.cursor = "url(/static/black-circle-8.png),auto";
}

/* FIXME: Do we need an eraser? How about colorful symbols? */
/* function color(obj) {
    switch (obj.id) {
        case "black":
            x = "black";
            break;
        case "white":
            x = "white";
            break;
    }
    if (x == "white") y = 14;
    else y = 4;
}
*/

// And do we need a function to resize the cursor?

// Draw something on canvas.
function draw() {
    context.beginPath();
    context.moveTo(prevX, prevY);
    context.lineTo(currX, currY);
    context.strokeStyle = x;
    context.lineWidth = y;
    context.stroke();
    context.closePath();
}

// Clear the canvas, hide the canvas image.
function erase() {
    context.clearRect(0, 0, w, h);
    document.getElementById("canvasimg").style.display = "none";
}

function snapshot() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

function recognize() {
}

// Find the current position.
function findxy(res, e) {
    if (res == "down") {
        prevX = currX;
        prevY = currY;
        currX = e.offsetX;
        currY = e.offsetY;
        // offsetX & offsetY returns the relative location of mouse to the 
        // component.

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            context.beginPath();
            context.fillStyle = x;
            context.fillRect(currX, currY, 2, 2);
            context.closePath();
            dot_flag = false;
        }
    }
    if (res == "up" || res == "out") {
        flag = false;
    }
    if (res == "move") {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.offsetX;
            currY = e.offsetY;
            draw();
        }
    }
}

