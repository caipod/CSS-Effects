document.getElementById("screenpoint").innerHTML = screen.width + '*' + screen.height;
document.getElementById("scale").innerHTML = "@" + window.devicePixelRatio + "x";
document.getElementById('screenpixel').innerHTML = +screen.width * window.devicePixelRatio + '*' + screen.height * window.devicePixelRatio;
document.getElementById("colorDepth").innerHTML = +screen.colorDepth + "bit";
document.getElementById("aspect").innerHTML = aspect_ratio_string;
document.getElementById("windowpoint").innerHTML = window.innerWidth + '*' + window.innerHeight;
document.getElementById("userAgent").innerHTML = navigator.userAgent;