/* JavaScript */

var canvas, context, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    //tempX = 0,
    //tempY = 0,
    dot_flag = false;

var x = "black",
    y = 3;

function init() {
    canvas = document.getElementById('can');
    context = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
    // Test.
    //canvas.addEventListener("mousemove", function (e) {
	//showxy(e)
    //}, false);
    canvas.addEventListener("mousedown", function (e) {
        findxy('down', e)
    }, false);
    canvas.addEventListener("mouseup", function (e) {
        findxy('up', e)
    }, false);
    canvas.addEventListener("mouseout", function (e) {
        findxy('out', e)
    }, false);
}

/*
function showxy(e) {
    tempX = event.clientX - canvas.offsetLeft + document.body.scrollLeft;
    tempY = event.clientY - canvas.offsetTop + document.body.scrollTop;
    document.show.mousex.value = tempX;
    document.show.mousey.value = tempY;
}
*/

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
    else y = 3;
}
*/

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

// FIXME: This function should have different name since it is supposed to save
// the image.
function recognize() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

// Find current coordinate, should notice the scroll.
// NOTE: The coordinate won't change if we scroll down or right, but the
// absolute position will change.
function findxy(res, e) {
    if (res == "down") {
        prevX = currX;
        prevY = currY;
        currX = e.clientX// - canvas.offsetLeft - document.body.scrollLeft;
        currY = e.clientY// - canvas.offsetTop - document.body.scrollTop;

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
            currX = e.clientX// - canvas.offsetLeft - document.body.scrollLeft;
            currY = e.clientY// - canvas.offsetTop - document.body.scrollTop;
            draw();
        }
    }
}

