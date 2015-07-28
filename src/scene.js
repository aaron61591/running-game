(function () {

    var style = window.RunningGame._style,
        idStart = 'running-game-start',
        idMusic = 'running-game-music';

    /**
     * show game start scene
     */
    window.RunningGame._showStart = function () {

        _ready();

        _music();
    };

    /**
     * render ready title
     */
    function _ready() {

        var e = document.createElement('div');

        e.id = idStart;
        e.innerText = '点击踏板开始游戏';

        style.ready(e);

        document.body.appendChild(e);
    }

    /**
     * render music button
     */
    function _music() {

        var e = document.createElement('div');

        e.id = idMusic;

        style.music(e);

        document.body.appendChild(e);
    }

    /**
     * hide game start scene
     */
    window.RunningGame._hideStart = function () {


    };

    /**
     * end game start scene
     */
    window.RunningGame._showEnd = function () {

    };
})();