function start(){
    document.getElementById("b").style.visibility = "visible";
}
var rs = new Audio("run.mp3");
rs.loop = true;

var js = new Audio("jump.mp3");

var ds = new Audio("dead.mp3");

var ss = new Audio("slide.mp3");

function key(event){  //key function
    //alert(event.which);
    if(event.which == 13){  //Enter key
        //alert("Enter");
        if(rw == 0){
            rw = setInterval(run,100);
            rs.play();
            fid = f();
            fid2 = f2();
            fw = setInterval(move,100);
            fw2 = setInterval(move2,100);
            bw = setInterval(back,100);
            sw = setInterval(score,1100);
        }
    }
    if(event.which == 32){  //Space key
        //alert("Space");
        if(jw == 0){
            if(slw == 0){
                clearInterval(rw);
                rs.pause();
                rw = -1;
                jw = setInterval(jump,100);
                js.play();
            }
        }
    }
    if(event.which == 40){  // down arrrow key
         //alert("dak");
         if(slw == 0){
             if( jw == 0){
                clearInterval(rw);
                rs.pause();
                rw = -1;
                slw = setInterval(slide,160);
                ss.play();
             }
        }
    }
}    
var fid = 0;
var p = 700;
function f(){                             // creat flames
    for(var y = 0; y < 20; y++){
        var a = document.createElement("img");
        a.src = "flame.gif";
        a.className = "f";
        a.style.marginLeft = p + "px";
        a.id = "d" + y;
        document.getElementById("b").appendChild(a);
        p = p + 1000;
    }
}
var fw = 0;
function move(){                     //flames moving function
    for(y = 0; y < 20; y++){
        var z = getComputedStyle(document.getElementById("d" + y));
        var w = parseInt(z.marginLeft) - 20;
        document.getElementById("d" + y).style.marginLeft = w + "px";
        if(w <= 180 & w >= 40){
            if(mt > 290){
                clearInterval(rw);
                rs.pause();
                clearInterval(jw);
                jw = -1;
                rw = -1;
                clearInterval(sw);
                clearInterval(fw2);
                clearInterval(fw);
                clearInterval(bw);
                dw = setInterval(dead,100);
                ds.play();
            }
        }
    }
}
var fid2 = 0;
var p2 = 1200;
function f2(){                             // creat bats
    for(var y = 0; y < 20; y++){
        var a = document.createElement("img");
        a.src = "bat.gif";
        a.className = "f2";
        a.style.marginLeft = p2 + "px";
        a.id = "d2" + y;
        document.getElementById("b").appendChild(a);
        p2 = p2 + 1000;
    }
}
var fw2 = 0;
function move2(){                     //bats moving function
    for(y = 0; y < 20; y++){
        var z = getComputedStyle(document.getElementById("d2" + y));
        var w = parseInt(z.marginLeft) - 20;
        document.getElementById("d2" + y).style.marginLeft = w + "px";
        if(w <= 170 & w >= -10){
            if(mt < 370){
                clearInterval(rw);
                rs.pause();
                clearInterval(jw);
                jw = -1;
                rw = -1;
                clearInterval(sw);
                clearInterval(fw2);
                clearInterval(fw);
                clearInterval(bw);
                clearInterval(slw);
                slw = -1;
                dw = setInterval(dead,100);
                ss.pause();
                ds.play();

            }
        }
    }
}
var rw = 0; 
var r = 1;
var img = document.getElementById("boy");
function run(){                             //run function
    r = r + 1;
    if(r == 9){
        r = 1;
    }
    img.src = "Run (" + r + ").png"
}
var mt = 340;
var jw = 0;
var j = 1;
function jump(){                          //jump function
    if(j <= 5){
        mt = mt - 50;
    }
    if(j >= 6){
        mt = mt + 50;
    }
    img.style.marginTop = mt + "px";
    j = j + 1;
    if(j == 11){
        j = 1;
        clearInterval(jw);
        rw = 0;
        rw = setInterval(run,100);
        rs.play();
        jw = 0;
        if(fid == 0){
            fid = f();
        }
        if(fw == 0){
            fw = setInterval(move,100);
        }
        if(fid2 == 0){
            fid2 = f2();
        }
        if(fw2 == 0){
            fw2 = setInterval(move2,100);
        }
        if(bw == 0){
            bw = setInterval(back,100);
        }
        if(sw == 0){
            sw = setInterval(score,1100);
        }
    }
    img.src = "Jump (" + j + ").png";
}
var slw = 0;
var sl = 1;
function slide(){                             //slide function
    if(sl <= 5){
        mt = mt + 17;
    }
    if(sl >= 6){
        mt = mt - 17;
    }
    img.style.marginTop = mt + "px";
    img.src = "Slide (" + sl + ").png";
    sl = sl + 1;
    if(sl ==11){
        sl = 1;
        clearInterval(slw);
        rw = 0;
        rw = setInterval(run,100);
        rs.play();
        slw = 0;
        if(fid == 0){
            fid = f();
        }
        if(fw == 0){
            fw = setInterval(move,100);
        }
        if(fid2 == 0){
            fid2 = f2();
        }
        if(fw2 == 0){
            fw2 = setInterval(move2,100);
        }
        if(bw == 0){
            bw = setInterval(back,100);
        }
        if(sw == 0){
            sw = setInterval(score,1100);
        }
        ss.pause();
    }
}
var bw = 0;
var b = 0;
function back(){            // backgroud moving function
    b = b - 20;
    document.getElementById("b").style.backgroundPositionX = b + "px";
}
var sw = 0;
var u = 0;
function score(){                  // score function
    u = u + 2;
    document.getElementById("score").innerHTML = u;
}
var dw = 0;
var d = 1;
function dead(){                   // dead function
    d = d + 1;
    if(d == 11){
        d = 10;
        img.style.marginTop = "340px";
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endScore").innerHTML = u;
    }
    img.src = "Dead (" + d + ").png";
}
function re(){
    location.reload();
}


