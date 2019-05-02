var canvas, ctx, flag = false,
        prevX = 0,
        currX = 0,
        prevY = 0,
        currY = 0,
        dot_flag = false;

    var x = "black",
        y = 5;
    
    function init() {
        canvas = document.getElementById('can');
        ctx = canvas.getContext("2d");
        w = canvas.width;
        h = canvas.height;
    
        canvas.addEventListener("mousemove", function (e) {
            findxy('move', e)
        }, false);
        canvas.addEventListener("mousedown", function (e) {
            // console.log(e);
            findxy('down', e)
        }, false);
        canvas.addEventListener("mouseup", function (e) {
            findxy('up', e)
        }, false);
        canvas.addEventListener("mouseout", function (e) {
            findxy('out', e)
        }, false);
    }
    
    function color(obj) {
        switch (obj.id) {
            case "green":
                x = "rgb(88, 255, 163)";
                break;
            case "lightblue":
                x = "rgb(72, 197, 255)";
                break;    
            case "blue":
                x = "rgb(46, 119, 255)";
                break;
            case "red":
                x = "rgb(255, 58, 58)";
                break;
            case "yellow":
                x = "rgb(255, 225, 56)";
                break;
            case "orange":
                x = "rgb(255, 93, 81)";
                break;
            case "purple":
                x = "rgb(106, 42, 255)";
                break;
            
            case "black":
                x = "black";
                break;
            case "white":
                x = "white";
                break;
        }
        if (x == "white") y = 5;
        else y = 5;
    
    }
    
    function draw() {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        // ctx.moveTo(prevX+window.innerWidth, prevY+window.innerHeight);
        // ctx.lineTo(currX+window.innerWidth, currY+window.innerHeight);
        ctx.strokeStyle = x;
        ctx.lineWidth = y;
        ctx.stroke();
        ctx.closePath();
    }
    
    function erase() {
        var m = confirm("Want to clear");
        if (m) {
            ctx.clearRect(0, 0, w, h);
            document.getElementById("canvasimg").style.display = "none";
        }
    }
    
    function save() {
        document.getElementById("canvasimg").style.border = "2px solid";
        var dataURL = canvas.toDataURL();
        document.getElementById("canvasimg").src = dataURL;
        document.getElementById("canvasimg").style.display = "inline";
        
    }
    
    function findxy(res, e) {
        // console.log(canvas.offsetTop);
        if (res == 'down') {
            prevX = currX;
            prevY = currY;
            currX = e.clientX+window.scrollX-canvas.offsetLeft;
            currY = e.clientY+window.scrollY-canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                ctx.beginPath();
                ctx.fillStyle = x;
                ctx.fillRect(currX, currY, 2, 2);
                ctx.closePath();
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
                currX = e.clientX+window.scrollX-canvas.offsetLeft;
                currY = e.clientY+window.scrollY-canvas.offsetTop;
                draw();
            }
        }
    }

