(function () {

    var RG = window.RunningGame,
        ready, finger, inter;

    /**
     * show game start scene
     */
    RG._ready = function () {

        _initTop();

        _initFinger();

        _setupListener();
    };

    /**
     * render ready title
     */
    function _initTop() {

        ready = RG._div();

        ready.innerText = RG.$msg.ready;

        ready.className = RG.PRE + '-ready';

        ready.style.background = 'url(' + RG.$imgPath + 'ready.png) 50% -200px / 225px 245px no-repeat';

        RG._insert(ready);
    }

    /**
     * render finger
     */
    function _initFinger() {

        finger = RG._div();

        finger.className = RG.PRE + '-finger';

        var i = 0;

        inter = setInterval(function () {

            if (++i % 2) {
                RG.$motion.step(0);
                _changeBg(0);
            } else {
                RG.$motion.step(1);
                _changeBg(1);
            }
        }, 200);

        RG._insert(finger);
    }

    /**
     * change finger background
     */
    function _changeBg(t) {

        var s = finger.style;
        s.left = t ? 'initial' : 0;
        s.right = t ? 0 : 'initial';
        s.background = 'url(' + RG.$imgPath + 'ready.png) 50% ' +
            (t ? '-100px' : '0%') + ' / 225px 245px no-repeat';
    }

    /**
     * set up listener
     */
    function _setupListener() {

        document.body.addEventListener('touchstart', _handler);
    }

    /**
     * start touch handleer
     */
    function _handler() {

        clearInterval(inter);

        RG._remove(finger);

        RG._remove(ready);

        RG._remove(RG.$music.ele);

        RG._startRun();

        document.body.removeEventListener('touchstart', _handler);
    }
})();