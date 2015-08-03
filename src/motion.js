(function () {

    var RG = window.RunningGame,
        motion = RG.$motion = {},
        pre = '',
        btnL = {},
        btnR = {},
        curType = -1,
        curGrade = 0,
        count = 0;

    /**
     * game combo
     */
    motion.combo = 0;

    /**
     * render motion button
     */
    motion.init = function () {

        _initProp();

        _initDom();
    };

    /**
     * run step
     */
    motion.step = function (t) {

        _handler(t);

        hightlight(t);
    };

    /**
     * getGrade calculated by running
     */
    motion.getGrade = function () {

        var m = RG.$conf.grade,
            i = m.length,
            comboGrade;

        while (i--) {
            if (motion.combo >= m[i]) {
                comboGrade = i + 1;
                break;
            }
        }

        motion.combo = 0;

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
    function _initProp() {

        pre = RG.PRE + '-motion';
        count = 0;
        curGrade = 0;
        curType = -1;

        motion.combo = 0;
    }

    /**
     * initialize dom
     */
    function _initDom() {

        var e = RG._div();

        e.className = pre;

        _initBtn(e, 0);
        _initBtn(e, 1);

        RG._insert(e);
    }

    /**
     * initialize step btn
     */
    function _initBtn(e, t) {

        var s = RG._div(),
            btn = RG._div(),
            suff;

        if (t) {
            btnR = btn;
            suff = '-r';
        } else {
            btnL = btn;
            suff = '-l';
        }

        s.className = pre + suff;

        btn.className = pre + '-btn ' + pre + '-btn' + suff;

        _btnBg(btn);

        btn.addEventListener('touchstart', function () {

            motion.step(t);
        });

        s.appendChild(btn);

        e.appendChild(s);
    }

    /**
     * set btn background
     */
    function _btnBg(e) {

        e.style.background = '#8a8a8a url(' + RG.$imgPath + 'step.png) no-repeat center';
        e.style.backgroundSize = '22px 43px';
    }

    /**
     * hightlight left btn
     */
    function hightlight(t) {

        btnL.style.backgroundColor = t ? '#8a8a8a' : '#ffba15';
        btnR.style.backgroundColor = t ? '#3088e2' : '#8a8a8a';
    }

    /**
     * listen touchstart event
     */
    function _handler(t) {

        if (curType !== t) {
            if (t === 1) {
                ++motion.combo;
            }
            curType = t;
        }
    }

    /**
     * facilitate develop test
     */
    document.onkeydown = function (e) {

        switch (e.keyCode) {
        case 37:
            motion.step(0);
            break;
        case 39:
            motion.step(1);
            break;
        }
    };
})();