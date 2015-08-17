/* JavaScript */

var canvas, context, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    scrolledLeft = 0,
    scrolledTop = 0,
    dot_flag = false;

var x = "black",
    y = 2;

function init() {
    canvas = document.getElementById('can');
    context = canvas.getContext("2d");
    w = canvas.width;
    h = canvas.height;

    canvas.addEventListener("mousemove", function (e) {
        findxy('move', e)
    }, false);
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
    else y = 2;
}
*/

function draw() {
    context.beginPath();
    context.moveTo(prevX, prevY);
    context.lineTo(currX, currY);
    context.strokeStyle = x;
    context.lineWidth = y;
    context.stroke();
    context.closePath();
}

function erase() {
    context.clearRect(0, 0, w, h);
    document.getElementById("canvasimg").style.display = "none";
}

function recognize() {
    document.getElementById("canvasimg").style.border = "2px solid";
    var dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

/* Try to solve mouse scrolling problems. From stackoverflow. */
/* FIXME: still we are facing our problems... */
/* $(document).mousemove(function(event) {
    captureMousePosition(event);
})

$(window).scroll(function(event) {
    if (scrollLeft != $(document).scrollLeft()) {
	xMousePos -= scrollLeft;
	scrollLeft = $(document).scrollLeft();
	xMousePos += scrollLeft;
    }
    if (scrollTop != $(document).scrollTop()) {
	yMousePos -= scrollTop;
	scrollTop = $(document).scrollTop();
	yMousePos += scrollTop;
    }
    window.status = "x = " + xMousePos + " y = " + yMousePos;
});

function captureMousePostion(event) {
    xMousePos = event.pageX;
    yMousePos = event.pageY;
    window.status = "x = " + xMousePos + " y = " + yMousePos;
}
*/

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft + document.body.scrollLeft;
        currY = e.clientY - canvas.offsetTop + document.body.scrollTop;

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
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft + document.body.scrollLeft;
            currY = e.clientY - canvas.offsetTop + document.body.scrollTop;
            draw();
        }
    }
}

