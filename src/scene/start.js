(function () {

    var RG = window.RunningGame,
        pre, ready, inter, finger;

    /**
     * show game start scene
     */
    RG._ready = function () {

        pre = RG.$pre;

        RG._initMotion();

        _ready();

        _finger();

        _setupListener();
    };

    /**
     * render ready title
     */
    function _ready() {

        ready = RG._div();

        ready.innerText = RG.$opt.msg.ready;

        ready.className = pre + '-ready';

        ready.style.background = 'url("' + RG.$opt.img.ready + '") 50% -200px / 225px 245px no-repeat';

        RG._insert(ready);
    }

    /**
     * render finger
     */
    function _finger() {

        finger = RG._div();

        finger.className = pre + '-finger';

        var i = 0;

        inter = setInterval(function () {

            if (++i % 2) {
                finger.style.left = 0;
                finger.style.right = 'initial';
                finger.style.background = 'url("' + RG.$opt.img.ready + '") 50% 0% / 225px 245px no-repeat';
            } else {
                finger.style.left = 'initial';
                finger.style.right = 0;
                finger.style.background = 'url("' + RG.$opt.img.ready + '") 50% -100px / 225px 245px no-repeat';
            }

            RG._motionChange();
        }, 200);

        RG._insert(finger);
    }

    /**
     * click to start
     */
    function _start() {

        clearInterval(inter);

        RG._remove(finger);

        RG._remove(ready);

        RG._remove(RG.$music.ele);
    }

    /**
     * set up listener
     */
    function _setupListener() {

        document.body.addEventListener('touchstart', _handler);
    }

    /**
     *
     */
    function _handler() {

        _start();

        RG.$observer.emit('start');

        document.body.removeEventListener('touchstart', _handler);
    }
})();