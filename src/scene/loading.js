(function () {

    var RG = window.RunningGame,
        finish = 0;

    /**
     * loading scene
     */
    RG._loading = function () {

        _runAnimation();

        UPlayer.preImage(RG.$imgPath + RG.$img[0], function () {

            _load();
        });
    };

    /**
     * run loading animation
     */
    function _runAnimation() {

        RG.$loading = new UPlayer({
            fps: 30
        });

        RG._insert(RG.$loading.canvas);


        var w = window.innerWidth,
            h = window.innerHeight,
            num = 0;

        RG.$loading.plug({
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

        RG.$loading.run();

        RG.$loading.plugCard({
            zIndex: 0,
            src: RG.$imgPath + 'loading.png',
            frame: 11,
            pulse: function (ctx) {

                ctx.fillStyle = '#fff';
                ctx.fillRect(0, 0, w, h);

                this.x = w / 2 - this.img.width / this.frame / 2;
                this.y = h / 2 - this.img.height;
            }
        });
    }

    /**
     * load game resource
     */
    function _load() {

        finish = 0;

        _loadExt();

        _loadCSS();
    }

    /**
     * load game image
     */
    function _loadImg() {

        var i = 1,
            url;

        while (i < RG.$img.length) {
            url = RG.$imgPath + RG.$img[i];

            UPlayer.preImage(url, _loaded);
            ++i;
        }
    }

    /**
     * initialize css
     */
    function _loadCSS() {

        var c = document.createElement('link');

        c.rel = 'stylesheet';
        c.type = 'text/css';
        c.href = RG.$opt.css || RG.$path + 'css/running-game-0.1.0.css';

        if (c.complete) {
            _loadImg();
        }

        c.onload = _loadImg;

        RG._insert(c, document.body);
    }

    /**
     * initialize extention
     */
    function _loadExt() {

        var i = RG.$extPlugin.length;

        while (i--) {
            if (RG.$extPlugin[i].extName) {
                _loadScript(RG.$extPlugin[i]);
            }
        }
    }

    /**
     * load extention script
     */
    function _loadScript(ext) {

        var s = document.createElement('script');

        s.onload = function () {

            ext.render = RG['$ext' + ext.extName];
        };

        s.src = RG.$path + 'js/extension/' + ext.extName.toLowerCase() + '.js';

        RG._insert(s, document.body);
    }

    /**
     * one resouce loaded
     */
    function _loaded() {

        if (++finish === RG.$img.length - 1) {
            RG.$observer.emit('loaded');

            RG.$loading.stop();
            RG._remove(RG.$loading.canvas);
        }
    }
})();