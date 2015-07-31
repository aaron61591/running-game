(function () {

    /**
     * running game
     */
    var RG = window.RunningGame = {};

    RG.$ext = ['Sky', 'Cloud', 'Ground'];

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

        _runPlayer();

        RG._ready();

        RG.$point.init();
    }

    /**
     * run plauery
     */
    function _runPlayer() {

        RG.$p = new UPlayer({
            fps: 10
        });

        _initExtension();

        RG._animateBg();
        RG._animatePersonStart();

        RG._insert(RG.$p.canvas);

        RG.$p.run(1);
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

        RG.$path = 'http://img.ucweb.com/s/uae/g/01/running_game/';

        _initImage();

        _initMsg();

        _initConf();

        _initAudio();

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
     * initialize extension
     */
    function _initExtension() {

        var ext = RG.$opt.extension || RG.$ext,
            i = 0;

        while (i < ext.length) {
            if (typeof ext[i] === 'string' && RG.$ext.indexOf(ext[i]) !== -1) {
                RG.$p.plug({
                    zIndex: i,
                    render: RG['$ext' + ext[i]]
                });
            }

            if (typeof ext[i] === 'function') {
                RG.$p.plug({
                    zIndex: i,
                    render: ext[i]
                });
            }

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
     * start game
     */
    function _start() {

        RG.$p.unplug('start');

        RG._animatePerson(RG.$p);

        RG.$p.run();
    }
})();