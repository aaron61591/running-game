(function () {

    /**
     * running game
     */
    var RG = window.RunningGame = {};

    /**
     * ready to start
     */
    RG.start = function (opt, cb) {

        _init(opt, cb);

        RG._loading();
    };

    /**
     * resource loaded
     */
    function _loaded() {

        RG.$music.init();

        RG.$p = new UPlayer({
            // debug: true,
            fps: 10
        });

        _plug();

        RG.$p.run(1);

        RG._ready();

        RG.$point.init();
    }

    /**
     * observer ready hook
     */
    RG._hook = function () {

        var last = 0;

        RG.$observer.on('loaded', function () {

            _loaded();
        });

        RG.$observer.on('start', function () {

            RG._time.init();

            _start();
        });

        RG.$observer.on('end', function () {

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

                if (RG.$cd) {
                    RG.$cd(RG.$res);
                }
            }, RG.$opt.endTime || 3000);
        });

        RG.$observer.on('round', function () {

            var cur = +new Date(),
                lastGrade;

            if (cur - last > 1000) {
                last = cur;

                RG.$grade = RG._getGrade();
                console.log('grade: ', RG.$grade);

                if (RG.$grade === 4 && lastGrade !== RG.$grade) {

                    RG.$p.unplug('person');
                    RG._animatePersonSuper();
                }

                if (lastGrade === 4 && lastGrade !== RG.$grade) {

                    RG.$p.unplug('person-super');
                    RG._animatePerson();
                }

                RG.$p.opt.fps = RG.$conf.fps[RG.$grade - 1];
                lastGrade = RG.$grade;
            }
        });
    };

    /**
     * create div
     */
    RG._div = function () {

        return document.createElement('div');
    };

    /**
     * create span
     */
    RG._span = function () {

        return document.createElement('span');
    };

    /**
     * insert
     */
    RG._insert = function (e) {

        RG.$root.appendChild(e);
    };

    /**
     * remove
     */
    RG._remove = function (e) {

        RG.$root.removeChild(e);
    };

    /**
     * initialize props
     */
    function _init(opt, cb) {

        RG.$opt = opt || {};

        _initImage();

        _initMsg();

        _initConf();

        _initAudio();

        _initCSS();

        RG.$cd = cb;
        RG.$grade = 1;
        RG.$res = 0;
        RG.$pre = 'running-game';

        RG.$root = RG._div();
        RG.$root.id = RG.$opt.id;
        RG.$root.style.zIndex = 1000;

        document.body.appendChild(RG.$root);
    }

    /**
     * initialize image
     */
    function _initImage() {

        RG.$imgPath = RG.$opt.imgPath || 'images/';
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
            bg: 'http://img.ucweb.com/s/uae/g/01/release/audio/game_bg.mp3',
            over: 'http://img.ucweb.com/s/uae/g/01/release/audio/gameover.mp3'
        };
    }

    /**
     * initialize css
     */
    function _initCSS() {

        var c = RG.$css = document.createElement('link');

        c.rel = 'stylesheet';
        c.type = 'text/css';
        c.href = RG.$opt.css || 'http://img.ucweb.com/s/uae/g/01/release/css/running-game-0.1.0.css';

        document.body.appendChild(c);
    }

    /**
     * setup plugins
     */
    function _plug() {

        RG._animateSky();
        RG._animateCloud();
        RG._animateGround();
        RG._animateBg();
        RG._animatePersonStart();

        RG._insert(RG.$p.canvas);
    }

    /**
     * start game
     */
    function _start() {

        RG.$p.unplug('start');

        RG._animatePerson(RG.$p);

        RG.$p.run();
    }
})();