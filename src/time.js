(function () {

    var RG = window.RunningGame,
        time = RG.$time = {},
        pre, top, second, gameTime;

    /**
     * initialize time
     */
    time.init = function () {

        pre = RG.$pre + '-top';

        gameTime = RG.$conf.gameTime || 10000;

        top = RG._div();

        top.className = pre;

        _second(top);

        _suffix(top);

        RG._insert(top);

        _countdown(gameTime, 100, _step, _end);
    };

    /**
     * time
     */
    function _second(e) {

        second = RG._span();
        second.className = pre + '-second';
        second.innerText = '10.0';
        e.appendChild(second);
    }

    /**
     * suffix
     */
    function _suffix(e) {

        var s = RG._span();
        s.innerText = 's';
        e.appendChild(s);
    }

    /**
     * countdown step
     */
    function _step(remind) {

        var r = remind / 1000;

        second.innerText = r % 1 !== 0 ? r + '' : r + '.0';

        if (remind !== gameTime && remind % 500 === 0) {
            RG.$point.update();
        }
    }

    /**
     * countdown end
     */
    function _end() {

        RG.$observer.emit('end');

        top.className = pre + ' ' + pre + '-end';

        setTimeout(function () {

            top.className = pre + ' ' + pre + '-end' + ' ' + pre + '-hide';
        }, 1000);
    }

    /**
     * countdown
     */
    function _countdown(cd, inter, interCb, cb) {

        var t = 0,
            timer = setInterval(function () {

                interCb(cd - t);

                t += inter;

                if (t > cd && cd !== -1) {
                    clearInterval(timer);
                    if (cb) {
                        cb();
                    }
                }
            }, inter);
    }
})();