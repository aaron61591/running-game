(function () {

    var RG = window.RunningGame,
        music = RG.$music = {},
        audioBg = {},
        audioCheer = {};

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

        audioBg.volume = RG.$audio.volume;

        audioBg.loop = true;

        audioBg.play();
    };

    /**
     * play cheer music
     */
    music.playCheer = function () {

        if (!_disable()) {

            audioCheer = document.createElement('audio');

            audioCheer.src = RG.$audio.cheer;

            audioCheer.volume = RG.$audio.volume;

            audioCheer.loop = false;

            audioCheer.play();
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

        music.ele.style.background = 'url("' + RG.$opt.img.musicOn + '") 10px 10px no-repeat';
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

        music.ele.style.background = 'url("' + RG.$opt.img.musicOff + '") 10px 10px no-repeat';
        music.ele.style.backgroundSize = '30px';
    }
})();