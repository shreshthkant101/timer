var timer = 0;

function start() {
    document.getElementById('tme').innerHTML = timer;
    timer++;
    setTimeout(function() {
        start();
    }, 1000);
}