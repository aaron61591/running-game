(function () {

    /**
     * running game point
     */
    var RG = window.RunningGame,
        point = RG.$point = {},
        pre = '',
        ele = {},
        nick = {},
        dis = {},
        res = {};

    /**
     * initialize point space
     */
    point.init = function () {

        pre = RG.PRE + '-point';

        _initDom();
    };

    /**
     * update point
     */
    point.update = function () {

        RG.$res += RG.$conf.point[(RG.$lastGrade || 1) - 1] + randomDis();

        _refresh();
    };

    /**
     * game over
     */
    point.end = function () {

        ele.className = pre + ' ' + pre + '-end';

        nick.style.display = 'none';

        setTimeout(function () {

            nick.className = pre + '-nick ' + pre + '-end-nick';

            nick.style.display = 'block';

            dis.className = pre + '-end-dis';

            res.innerText = RG.$msg.result;
        }, 1000);
    };

    /**
     * initialize dom
     */
    function _initDom() {

        ele = RG._div();

        ele.className = pre;

        _initNick(ele);

        _initRes(ele);

        _initDis(ele);

        RG.$root.appendChild(ele);
    }

    /**
     * render nick
     */
    function _initNick(e) {

        nick = RG._div();

        nick.innerText = RG.$msg.nick;

        nick.className = pre + '-nick';

        e.appendChild(nick);
    }

    /**
     * render result preffix
     */
    function _initRes(e) {

        res = RG._span();

        e.appendChild(res);
    }

    /**
     * render distance
     */
    function _initDis(e) {

        dis = RG._span();

        _refresh();

        e.appendChild(dis);
    }

    /**
     * refresh point
     */
    function _refresh() {

        dis.innerText = RG.$res + ' M';
    }

    /**
     * get random distance
     */
    function randomDis() {

        return Math.random() > 0.5 ? 1 : -1;
    }
})();