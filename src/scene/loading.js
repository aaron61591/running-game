(function () {

    var RG = window.RunningGame,
        needLoadCSS = true,
        finish = 0;

    /**
     * loading scene
     */
    RG._loading = function () {

        RG.$loading = new UPlayer({
            fps: 30
        });

        RG._insert(RG.$loading.canvas);


        var w = window.innerWidth,
            h = window.innerHeight;

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

        var num = 0;

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

        UPlayer.preImage(RG.$imgPath + RG.$img[0], function () {

            _load();
        });
    };

    /**
     * load game resource
     */
    function _load() {

        finish = 0;

        _loadCSS();

        _loadImg();
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
        c.href = RG.$opt.css || 'http://img.ucweb.com/s/uae/g/01/release/css/running-game-0.1.0.css';

        if (c.complete) {
            _loadedCSS();
        }

        c.onload = _loadedCSS;

        document.body.appendChild(c);
    }

    /**
     * css loaded
     */
    function _loadedCSS() {

        _loaded();

        needLoadCSS = false;
    }

    /**
     * one resouce loaded
     */
    function _loaded() {

        console.log('loaded');
        if (++finish === RG.$img.length - 1 + _needLoadCSS()) {
            RG.$observer.emit('loaded');

            setTimeout(function () {

                RG.$loading.stop();
                RG._remove(RG.$loading.canvas);
            }, 100);
        }
    }

    /**
     * whether need load css
     */
    function _needLoadCSS() {

        return needLoadCSS ? 1 : 0;
    }
})();