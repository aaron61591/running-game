(function () {

    var RG = window.RunningGame,
        pre,
        btnLeft, btnRight,
        cur, combo, curGrade,
        count;

    /**
     * render motion button
     */
    RG._initMotion = function () {

        var e = RG._div();

        _init();

        e.className = pre;

        _motionLeft(e);
        _motionRight(e);

        RG._insert(e);
    };

    /**
     * change motion hightlight
     */
    RG._motionChange = function () {

        ++count;
        if (count % 2) {
            _hightlightLeft();
        } else {
            _hightlightRight();
        }
    };

    /**
     * getGrade calculated by running
     */
    RG._getGrade = function () {

        var m = RG.$opt.conf.grade,
            i = m.length,
            comboGrade;

        while (i--) {
            if (combo >= m[i]) {
                comboGrade = i + 1;
                break;
            }
        }

        combo = 0;

        if (comboGrade > curGrade) {
            if (comboGrade - curGrade >= 2) {
                curGrade += 2;
            } else {
                curGrade += 1;
            }
        }

        if (comboGrade < curGrade) {
            curGrade -= 1;
        }

        return curGrade;
    };

    /**
     * initialize props
     */
    function _init() {

        pre = RG.$pre + '-motion';
        count = 0;
        combo = 0;
        curGrade = 0;
        cur = -1;
    }

    /**
     * render left motion
     */
    function _motionLeft(e) {

        var s = RG._div();

        s.className = pre + '-l';

        _btnLeft(s);

        e.appendChild(s);
    }

    /**
     * render left btn
     */
    function _btnLeft(e) {

        btnLeft = RG._div();

        btnLeft.className = pre + '-btn ' + pre + '-btn-l';

        _btnBg(btnLeft);

        btnLeft.addEventListener('touchstart', _left);

        e.appendChild(btnLeft);
    }

    /**
     * render right motion
     */
    function _motionRight(e) {

        var s = RG._div();

        s.className = pre + '-r';

        _btnRight(s);

        e.appendChild(s);
    }

    /**
     * render right btn
     */
    function _btnRight(e) {

        btnRight = RG._div();

        btnRight.className = pre + '-btn ' + pre + '-btn-r';

        _btnBg(btnRight);

        btnRight.addEventListener('touchstart', _right);

        e.appendChild(btnRight);
    }

    /**
     * set btn background
     */
    function _btnBg(e) {

        e.style.background = '#8a8a8a url("' + RG.$opt.img.step + '") no-repeat center';
        e.style.backgroundSize = '22px 43px';
    }

    /**
     * hightlight left btn
     */
    function _hightlightLeft() {

        btnLeft.style.backgroundColor = '#ffba15';
        btnRight.style.backgroundColor = '#8a8a8a';
    }

    /**
     * hightlight right btn
     */
    function _hightlightRight() {

        btnLeft.style.backgroundColor = '#8a8a8a';
        btnRight.style.backgroundColor = '#3088e2';
    }

    /**
     * run left
     */
    function _left() {

        _handler(0);

        _hightlightLeft();
    }

    /**
     * run right
     */
    function _right() {

        _handler(1);

        _hightlightRight();
    }

    /**
     * listen touchstart event
     */
    function _handler(type) {

        if (cur !== type) {
            if (type === 1) {
                ++combo;
                if (window.navigator.vibrate) {
                    window.navigator.vibrate(20);
                }
            }
            cur = type;
        }
    }

    document.onkeydown = function (e) {

        if (e.keyCode === 37) {
            _left();
        }

        if (e.keyCode === 39) {
            _right();
        }
    };
})();