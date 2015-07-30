(function () {

    var RG = window.RunningGame,
        music = RG.$music = {},
        audioBg = {},
        audioOver = {};

    /**
     * initialize music
     */
    music.init = function () {

        music.ele = RG._div();

        music.ele.className = RG.$pre + '-music';

        if (_disable()) {
            _off();
        } else {
            _on();
        }

        _handler();

        RG._insert(music.ele);
    };

    /**
     * play background music
     */
    music.playBg = function () {

        audioBg = document.createElement('audio');

        audioBg.src = RG.$audio.bg;

        audioBg.volume = RG.$audio.volume || 1;

        audioBg.loop = true;

        audioBg.play();
    };

    /**
     * play over music
     */
    music.playOver = function () {

        if (!_disable()) {

            audioOver = document.createElement('audio');

            audioOver.src = RG.$audio.over;

            audioOver.volume = RG.$audio.volume || 1;

            audioOver.loop = false;

            audioOver.play();
        }
    };

    /**
     * stop background music
     */
    music.stopBg = function () {

        if (audioBg.pause) {
            audioBg.pause();
        }

        audioBg.src = '';
    };

    /**
     * handle music event
     */
    function _handler() {

        music.ele.addEventListener('touchstart', function (e) {

            if (!_disable()) {
                _disable('1');
                _off();
            } else {
                _disable('0');
                _on();
            }

            e.cancelBubble = true;
        });
    }

    /**
     * turn on music
     */
    function _on() {

        music.playBg();

        music.ele.style.background = 'url(' + RG.$imgPath + 'music-on.png) 10px 10px no-repeat';
        music.ele.style.backgroundSize = '30px';
    }

    /**
     * music is able
     */
    function _disable(disable) {

        var l = window.localStorage,
            k = 'runningGameMusicOff';

        if (disable !== undefined) {
            l.setItem(k, disable);
        } else {
            return l.getItem(k) === '1' ? true : false;
        }
    }

    /**
     * turn off music
     */
    function _off() {

        music.stopBg();

        music.ele.style.background = 'url(' + RG.$imgPath + 'music-off.png) 10px 10px no-repeat';
        music.ele.style.backgroundSize = '30px';
    }
})();