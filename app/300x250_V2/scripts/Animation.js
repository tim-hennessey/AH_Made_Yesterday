var app = app || {};


app.Animation = (function () {

    var t = TweenMax;
    var tl1 = new TimelineMax();
    var tl2 = new TimelineMax();

    var table = document.getElementById('table');
    var marble = document.getElementById('marble');
    var lid = document.getElementById('lid');
    var txt1 = document.getElementById('txt1');
    var txt2 = document.getElementById('txt2');
    var logo = document.getElementById('logo');
    var resolve_bg = document.getElementById('resolve_bg');
    var resolve_txt1 = document.getElementById('resolve_txt1');
    var resolve_txt2a = document.getElementById('resolve_txt2a');
    var resolve_txt2b = document.getElementById('resolve_txt2b');
    var resolve_txt2c = document.getElementById('resolve_txt2c');
    var cta = document.getElementById('cta');

    var buttonExit = document.getElementById('button-exit');
    var plug = document.getElementById('plug');


    // --------------------------------------------------------------------------------------
    // set default properties
    function initialize() {
        t.set(banner, {opacity: 1});
        // t.set(lid, {transformOrigin: "left"});

        buttonExit.addEventListener('mouseover', function () {
            t.to(cta, .1, {backgroundColor: "rgba(0, 59, 169, 1)"});
        });

        buttonExit.addEventListener('mouseout', function () {
            t.to(cta, .25, {backgroundColor: "rgba(0, 32, 92, 1)"});
        });
    }

    // --------------------------------------------------------------------------------------
    // Starts the animation
    function start() {
        tl1.from(lid, 2, {scale:2, ease: Cubic.easeInOut}, "+=2")
            .from(lid, 1, {opacity:0}, "-=2")

            .from(table, 3, {y: "+=150", scale: 2, ease: Cubic.easeInOut}, "-=1.5")
            .from(marble, 3, {y: "-=20", ease: Cubic.easeInOut}, "-=3");

        tl2.to(txt1, .5, {opacity: 0}, "+=2.5")
            .from(txt2, .5, {opacity: 0})
            .to(txt2, .5, {opacity: 0}, "+=3")
            .to(table, 1, {x:"-=300", ease: Cubic.easeInOut})
            .to(logo, 1, {x:"-=300", ease: Cubic.easeInOut}, "-=1")
            .to(resolve_bg, 1, {x:"-=300", ease: Cubic.easeInOut}, "-=1")
            .to(resolve_txt1, .5, {opacity:1})
            .to(resolve_txt1, .5, {opacity:0}, "+=2")

            .to(resolve_txt2a, .2, {opacity:1})
            .to(resolve_txt2b, .2, {opacity:1}, "+=.5")
            .to(resolve_txt2c, .2, {opacity:1}, "+=.5")

            .to(cta, .2, {opacity:1}, "+=.5");
    }

    // --------------------------------------------------------------------------------------
    // Stops the animation
    function stop() {
        console.log("stopping animation");
    }

    // --------------------------------------------------------------------------------------
    // Publicly accessible methods and properties
    return {
        initialize: initialize,
        start: start,
        stop: stop
    }

})();
