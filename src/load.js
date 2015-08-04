(function () {

    var RG = window.RunningGame,
        p = {},
        cssLoaded = false,
        extLoaded = false,
        finish = 0;

    /**
     * loading scene
     */
    RG._load = function () {

        _runAnimation();

        UPlayer.preImage(RG.$imgPath + RG.$img[0], function () {

            _loadGmae();
        });
    };

    /**
     * run loading animation
     */
    function _runAnimation() {

        var w = window.innerWidth,
            h = window.innerHeight,
            num = 0;

        p = new UPlayer({
            fps: 30
        });

        RG._insert(p.canvas);

        p.plug({
            zIndex: 0,
            render: function (ctx) {

                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, w, h);
            }
        });

        p.plug({
            zIndex: 1,
            render: function (ctx, frame) {

                var suffix = '',
                    i = 0;

                if (frame % 5 === 0) {
                    ++num;
                }

                while (i < num % 4) {
                    suffix += '.';
                    ++i;
                }

                ctx.font = 'normal bold 10px Helvetica';
                ctx.fillStyle = '#f47021';
                ctx.fillText('Loading' + suffix, w / 2 - 20, h / 2 + 10);
            }
        });

        p.run();

        p.plugCard({
            zIndex: 0,
            src: RG.$imgPath + 'loading.png',
            frame: 11,
            pulse: function () {

                this.x = w / 2 - this.img.width / this.frame / 2;
                this.y = h / 2 - this.img.height;
            }
        });
    }

    /**
     * load game resource
     */
    function _loadGmae() {

        finish = 0;

        _loadExt(_loadCSS);
    }

    /**
     * initialize css
     */
    function _loadCSS() {

        if (!cssLoaded) {
            cssLoaded = true;

            var c = document.createElement('link');

            c.rel = 'stylesheet';
            c.type = 'text/css';
            c.href = RG.$opt.css || RG.$path + 'css/running-game-0.1.0.css';

            if (c.complete) {
                _loadImg();
            }

            c.onload = _loadImg;

            RG._insert(c, document.body);
        } else {
            _loadImg();
        }
    }

    /**
     * initialize extention
     */
    function _loadExt(cb) {

        var i = RG.$extPlugin.length;

        if (!extLoaded) {
            extLoaded = true;
            while (i--) {
                if (RG.$extPlugin[i].extName) {
                    _loadJs(RG.$extPlugin[i], _extCb(RG.$extPlugin[i]), cb);
                }
            }
        } else {
            while (i--) {
                if (RG.$extPlugin[i].extName) {
                    _extCb(RG.$extPlugin[i])();
                }
            }
        }
    }

    /**
     * run ext animation script
     */
    function _extCb(ext) {

        return function () {

            ext.render = RG['$ext' + ext.extName];
        };
    }

    var waitJs = 0;

    /**
     * load extention script
     */
    function _loadJs(ext, extCb, cb) {

        ++waitJs;

        var s = document.createElement('script');

        s.src = RG.$path + 'js/extension/' + ext.extName.toLowerCase() + '.js';

        if (s.complete) {
            _jsLoaded(extCb, cb)();
        } else {
            s.onload = _jsLoaded(extCb, cb);
        }

        RG._insert(s, document.body);
    }

    /**
     * extenteion script loaded
     */
    function _jsLoaded(extCb, cb) {

        return function () {

            extCb();

            if (!--waitJs) {
                cb();
            }
        };
    }

    /**
     * load game image
     */
    function _loadImg() {

        var i = 1,
            url;

        while (i < RG.$img.length) {
            url = RG.$imgPath + RG.$img[i];

            UPlayer.preImage(url, _imgLoaded);
            ++i;
        }
    }

    /**
     * one image loaded
     */
    function _imgLoaded() {

        if (++finish === RG.$img.length - 1) {
            RG._loaded();

            p.stop();
            RG._remove(p.canvas);
        }
    }
})();