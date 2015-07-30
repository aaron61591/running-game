(function () {

    /**
     * running game point
     */
    var RG = window.RunningGame,
        point = RG.$point = {},
        pre,
        pt, nick, dis, res;

    /**
     * initialize point space
     */
    point.init = function () {

        pre = RG.$pre + '-point';

        pt = _div();

        pt.className = pre;

        _nick(pt);

        _res(pt);

        _dis(pt);

        RG.$root.appendChild(pt);
    };

    /**
     * update point
     */
    point.update = function () {

        RG.$res += RG.$conf.point[RG.$grade - 1] + randomDis();

        _refresh();

        function randomDis() {

            return Math.random() > 0.5 ? 1 : -1;
        }
    };

    /**
     * game over
     */
    point.end = function () {

        pt.className = pre + ' ' + pre + '-end';

        nick.style.display = 'none';

        setTimeout(function () {

            nick.className = pre + '-nick ' + pre + '-end-nick';

            nick.style.display = 'block';

            dis.className = pre + '-end-dis';

            res.innerText = RG.$msg.result;
        }, 1000);
    };

    /**
     * render nick
     */
    function _nick(e) {

        nick = _div();

        nick.innerText = RG.$msg.nick;

        nick.className = pre + '-nick';

        e.appendChild(nick);
    }

    /**
     * render result preffix
     */
    function _res(e) {

        res = _span();

        e.appendChild(res);
    }

    /**
     * render distance
     */
    function _dis(e) {

        dis = _span();

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
     * create div
     */
    function _div() {

        return document.createElement('div');
    }

    /**
     * create span
     */
    function _span() {

        return document.createElement('span');
    }
})();