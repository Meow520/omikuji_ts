var omikuji = function () {
    var kuji = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
    var num = Math.floor(Math.random() * kuji.length);
    var res = kuji[num];
    return res;
};
var getElement = function () {
    var start = document.getElementById("start");
    var output = document.getElementById("output");
    var result = document.getElementById("result");
    var restart = document.getElementById("restart");
    var quit = document.getElementById("quit");
    var anime = document.getElementById("animation");
    var explain = document.getElementById("explain");
    return [start, output, result, restart, quit, anime, explain];
};
var getOutput = function (result, output, res) {
    result.textContent = res;
    result.innerHTML = res;
    output.hidden = false;
};
window.onload = function () {
    var _a = getElement(), start = _a[0], output = _a[1], result = _a[2], restart = _a[3], quit = _a[4], anime = _a[5], explain = _a[6];
    start.addEventListener("click", function () {
        explain.hidden = true;
        anime.className = "loading";
        start.hidden = true;
        setTimeout(function () {
            var res = omikuji();
            getOutput(result, output, res);
            anime.className = "";
        }, 3000);
    });
    restart.addEventListener("click", function () {
        anime.className = "loading";
        start.hidden = true;
        restart.hidden = true;
        quit.hidden = true;
        result.hidden = true;
        setTimeout(function () {
            var res = omikuji();
            getOutput(result, output, res);
            anime.className = "";
            restart.hidden = false;
            quit.hidden = false;
            result.hidden = false;
        }, 3000);
    });
    quit.addEventListener("click", function () {
        start.hidden = false;
        output.hidden = true;
        explain.hidden = false;
    });
};
