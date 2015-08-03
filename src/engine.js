(function () {

    /**
     * running game
     */
    var RG = window.RunningGame = {},
        last = 0;

    /**
     * extension animation
     */
    RG.EXT = ['Sky', 'Cloud', 'Ground'];

    /**
     * style preffix
     */
    RG.PRE = 'running-game';

    /**
     * ready to start
     */
    RG.start = function (opt, cb, round) {

        if (!RG.$running) {
            _init(opt, cb, round);

            RG._load();
        }
    };

    /**
     * resource loaded
     */
    RG._loaded = function () {

        RG.$music.init();

        RG.$point.init();

        RG.$motion.init();

        RG._ready();

        _initPlayer();
    };

    /**
     * handle start event
     */
    RG._startRun = function () {

        RG.$time.init();

        RG.$p.unplug('start');

        RG._animatePerson(RG.$p);

        RG.$p.run();

        RG.$motion.combo = 0;
    };

    /**
     * handle round event
     */
    RG._round = function () {

        var cur = +new Date(),
            g;

        if (cur - last > 1000) {
            last = cur;

            g = RG.$motion.getGrade();

            console.log('grade: ', g);

            if (g === 4 && RG.$lastGrade === 5) {
                RG.$p.unplug('person');
                RG._animatePersonSuper();
            }

            if (RG.$lastGrade === 5 && g === 4) {
                RG.$p.unplug('person-super');
                RG._animatePerson();
            }

            RG.$p.opt.fps = RG.$conf.fps[g - 1];

            if (RG.$round) {
                RG.$round(RG.$lastGrade, g);
            }

            RG.$lastGrade = g;
        }
    };

    /**
     * handle end event
     */
    RG._gameover = function () {

        RG.$p.unplug('person');
        RG.$p.unplug('person-super');
        RG._animatePersonEnd(RG.$p);
        RG.$p.stop();
        RG.$p.run(1);

        RG.$point.end();

        RG.$music.stopBg();
        RG.$music.playOver();

        setTimeout(function () {

            document.body.removeChild(RG.$root);

            if (RG.$cb) {
                RG.$cb(RG.$res);
            }

            RG.$running = false;
        }, RG.$opt.endTime || 3000);
    };

    /**
     * initialize props
     */
    function _init(opt, cb, round) {

        _initProp(opt, cb, round);

        _initExt();

        _initImage();

        _initMsg();

        _initConf();

        _initAudio();

        _initRoot();
    }

    /**
     * initialize root
     */
    function _initRoot() {

        RG.$root = RG._div();
        RG.$root.id = RG.$opt.id || '';
        RG.$root.style.zIndex = 1000;

        RG._insert(RG.$root, document.body);
    }

    /**
     * initialize propery
     */
    function _initProp(opt, cb, round) {

        RG.$opt = opt || {};
        RG.$path = 'http://img.ucweb.com/s/uae/g/01/running_game/';
        RG.$cb = cb;
        RG.$round = round;
        RG.$grade = 1;
        RG.$res = 0;
        RG.$running = true;
    }

    /**
     * initialize extention animation
     */
    function _initExt() {

        var ep = RG.$extPlugin = [],
            ext = RG.$opt.extension || RG.EXT,
            i = 0;

        while (i < ext.length) {
            if (typeof ext[i] === 'string' && RG.EXT.indexOf(ext[i]) !== -1) {
                ep.push({
                    zIndex: i,
                    extName: ext[i]
                });
            }

            if (typeof ext[i] === 'function') {
                ep.push({
                    zIndex: i,
                    render: ext[i]
                });
            }

            ++i;
        }

    }

    /**
     * plug extension animation
     */
    function _plugExt() {

        var i = 0;

        while (i < RG.$extPlugin.length) {
            RG.$p.plug(RG.$extPlugin[i]);
            ++i;
        }
    }

    /**
     * initialize image
     */
    function _initImage() {

        RG.$imgPath = RG.$opt.imgPath || RG.$path + 'images/';

        RG.$img = [
            'loading.png',
            'bg.png',
            'end.png',
            'music-on.png',
            'music-off.png',
            'person.png',
            'ready.png',
            'start.png'
        ];
    }

    /**
     * initialize message
     */
    function _initMsg() {

        var m = RG.$msg = RG.$opt.msg || {};
        m.ready = m.ready || 'click button to start';
        m.result = m.result || 'cool! u ran ';
        m.nick = m.nick || 'UU';
    }

    /**
     * initialize conf
     */
    function _initConf() {

        var c = RG.$conf = RG.$opt.conf || {};

        c.grade = c.grade || [0, 1, 3, 5, 7];
        c.point = c.point || [3, 4, 5, 6, 10];
        c.fps = c.fps || [10, 20, 30, 40, 70];
    }

    /**
     * initialize audio
     */
    function _initAudio() {

        RG.$audio = RG.$opt.audio || {
            bg: RG.$path + 'audio/bg.mp3',
            over: RG.$path + 'audio/over.mp3'
        };
    }

    /**
     * run plauery
     */
    function _initPlayer() {

        RG.$p = new UPlayer({
            fps: 10
        });

        _plugExt();

        RG._animateBg();
        RG._animatePersonStart();

        RG._insert(RG.$p.canvas);

        RG.$p.run(1);
    }
})();